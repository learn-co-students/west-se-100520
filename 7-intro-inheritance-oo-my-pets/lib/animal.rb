class Animal
 
    attr_reader :name
    attr_accessor :mood

    # extend Persistable::ClassMethods # import all class methods from the Persistable module
    # include Persistable::InstanceMethods # include imports all instance level methods

    def initialize(name)
        @name = name
        @mood = "nervous"
    end

end
