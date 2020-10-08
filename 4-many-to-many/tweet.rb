class Tweet
  attr_reader :message, :user

  @@all = []

  def initialize(message, user)
    @message = message
    @user = user
    @@all << self
    # @likes = 0
  end

  def self.all
    @@all
  end

  def username
    user.username
  end

  def like_count
    # current_likes = Like.all.select do |like|
    #   like.tweet == self
    # end
    # current_likes.count
    Like.all.select {|like| like.tweet == self}.count
  end

  def likers
    # return an array of all the users who have liked this tweet
  end
end
