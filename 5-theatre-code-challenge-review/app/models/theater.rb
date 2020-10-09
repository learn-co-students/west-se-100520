class Theater

    attr_reader :city

    @@all = []

    def self.all
        @@all
    end

    def initialize(title, city)
        @title, @city = title, city
        @@all << self
    end

    def performances
        Performance.all.select {|p_obj| p_obj.theater == self}
    end

    def musicals
        self.performances.map {|p_obj| p_obj.musical}
    end

end