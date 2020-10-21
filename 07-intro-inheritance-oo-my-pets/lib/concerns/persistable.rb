module Persistable

    module ClassMethods
        def all
            self::ALL
        end

        def reset_all
            all.clear
        end

        def count
            all.length
        end
    end

    module InstanceMethods
        def initialize(*args)
            self.class.all << self
        end
    end
end