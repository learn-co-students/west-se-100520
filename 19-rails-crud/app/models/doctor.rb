class Doctor < ApplicationRecord

    def to_s
        "#{self.name} -  #{self.specialty}"
    end
end
