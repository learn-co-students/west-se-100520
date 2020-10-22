class Hero

    attr_accessor :abilities

    # Accepts an array of abilities
    # Each ability will be represented by a hash with a name and "coolness" rating
    def initialize(abilities)
        self.abilities = abilities
    end

    # Returns the heros coolest ability
    def coolest_ability
        this_cool_ability = nil
        abilities.each do | current_ability |  
            if this_cool_ability == nil || current_ability[:coolness] > this_cool_ability[:coolness]
                this_cool_ability = current_ability
            end
        end
        this_cool_ability
    end

    def ability_names
        @abilities.map do |ability|
             ability[:name]
        end
    end

    # Returns abilities Ordered Alphabetically 
    def ordered_abilities
        ability_names.sort
    end

    def add_ability(ability)
        if ability.class == Hash
            self.abilities << ability
        end
    end
end