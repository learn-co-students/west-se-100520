class Tweet

    attr_reader :message, :user

    @@all = []

    def self.all
        @@all
    end
    
    def initialize(message, user)
        @message = message
        @user = user
        @@all << self
    end

    def username
        self.user.username
    end

end