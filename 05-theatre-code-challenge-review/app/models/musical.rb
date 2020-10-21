class Musical

    @@all = []

    def self.all
        @@all
    end

    def self.all_introductions
        @@all.each do |mus_obj|
            puts "Welcome, this is #{mus_obj.name}, set in #{mus_obj.setting_city}"
        end
    end

    attr_accessor :name
    attr_reader :setting_city

    def initialize(name, city)
        @name = name
        @setting_city = city
        @@all << self
    end

    def perform_in_theater(theater, date)
        Performance.new(date, self, theater)
    end

    def performances
        # result = []
        # Performance.all.each do |p|
        #     if p.musical == self
        #         result << p 
        #     end
        # end
        # result
        Performance.all.select do |p|
            p.musical == self
        end
    end
    
    def theaters
        self.performances.map do |p|
            p.theater
        end
    end
end