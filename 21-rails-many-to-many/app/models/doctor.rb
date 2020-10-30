class Doctor < ApplicationRecord

    has_many :appointments
    has_many :patients, through: :appointments

    def to_s
        "#{self.name} -  #{self.specialty}"
    end
end
