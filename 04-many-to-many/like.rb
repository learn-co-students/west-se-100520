class Like

    attr_reader :user, :tweet

    @@all = []

    def self.all
        @@all
    end

    def initialize(user, tweet)
        @user = user
        @tweet = tweet
        self.save
    end

    def save
        @@all << self
    end

end