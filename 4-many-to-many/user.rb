class User
  attr_reader :username, :tweets

  def initialize(username)
    @username = username
    @tweets = [] # this is the idea that we will remove later
  end

  def post_tweet(message)
    Tweet.new(message, self)
  end

  def tweets
    Tweet.all.select do |tweet|
      tweet.user == self
    end
  end

end
