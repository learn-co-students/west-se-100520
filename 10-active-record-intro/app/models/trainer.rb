class Trainer < ActiveRecord::Base

    has_many :boxers

    # def boxers
    #     # Boxer.all.select{|b|b.trainer_id == self.id}
    #     Boxer.where(trainer_id: self.id )
    # end
end