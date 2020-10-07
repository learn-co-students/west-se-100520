class User

    attr_reader :username

    def initialize(username)
        @username = username
        @tweets = []
    end

    # def username
    #     @username
    # end

    def post_tweet(message)
        #create a new tweet
        tweet = Tweet.new(message)
        #add that tweet instance to this user's collection of tweets
        @tweets << tweet
        tweet
    end

    def add_tweet(tweet)
        @tweets << tweet
    end

end