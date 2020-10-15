class Performance

    @@all = []

    def self.all
        @@all
    end

    attr_reader :musical, :theater

    def initialize(date, musical, theater)
        @date = date
        @musical = musical
        @theater = theater
        @@all << self
    end

    def hometown_setting?
        @musical.setting_city == @theater.city
    end


end