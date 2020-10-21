class User

    attr_reader :username, :tweets

    def initialize(username)
        @username = username
        # @tweets = []
    end

    # def username
    #     @username
    # end

    def tweets
        Tweet.all.select do |tweet|
            tweet.user == self
        end
    end

    def post_tweet(message)
        #create a new tweet
        Tweet.new(message, self)
        #add that tweet instance to this user's collection of tweets
    end

end