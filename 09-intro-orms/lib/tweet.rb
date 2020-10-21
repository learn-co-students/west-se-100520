class Tweet
  attr_accessor :message, :username, :id
  # @@all = []

  def self.all
    # @@all
    sql = <<-SQL
      SELECT * FROM tweets
    SQL
    results = DB[:conn].execute(sql)
    results.map do |tweet_hash|
      self.new(tweet_hash)
    end
  end

  def self.find_by_id(id)
    sql = <<-SQL
      SELECT * FROM tweets
      WHERE id = ?
    SQL
    Tweet.new(DB[:conn].execute(sql, id)[0])
  end

  def initialize(attrs={})
    @message = attrs['message']
    @username = attrs['username']
    @id = attrs['id']
    # @@all << self
  end

  def save
    # if the instance already exits in DB
    if persisted?
      sql = <<-SQL
        UPDATE tweets
        SET message = ?
        WHERE id = ?
      SQL
      DB[:conn].execute(sql, self.message, self.id)
    # update

    else
    # create it
    sql = <<-SQL
      INSERT INTO tweets (username, message)
      VALUES (?, ?)
    SQL
    DB[:conn].execute(sql, self.username, self.message)
    end
  end

  def delete
    sql = <<-SQL
      DELETE FROM tweets
      WHERE id = ?
    SQL
    DB[:conn].execute(sql, self.id)
  end

  def persisted?
    !!self.id
  end
end
