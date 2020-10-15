class User
  attr_reader :username

  def initialize(username)
    @username = username
    # @tweets = [] # this is the idea that we will remove later
  end

  def post_tweet(message)
    Tweet.new(message, self)
  end

  def tweets
    Tweet.all.select do |tweet|
      tweet.user == self
    end
  end

  def like_tweet(tweet)
    Like.new(self, tweet)
  end

  def likes
    # returns an array of likes belonging to this user instance
    # binding.pry
    Like.all.select do |like|
      like.user == self
    end
  end

  def liked_tweets
    # return an array of all the tweet objects a user has liked
    binding.pry
    likes.map do |like|
      like.tweet
    end
  end


end

