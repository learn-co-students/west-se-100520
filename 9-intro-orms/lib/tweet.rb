class Tweet
  attr_accessor :message, :username
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

  def initialize(attrs={})
    @message = attrs['message']
    @username = attrs['username']
    @id = attrs['id']
    # @@all << self
  end
end
