class Boxer < ActiveRecord::Base

    belongs_to :trainer
    
    # def trainer
    #     # Trainer.all.find { |trainer| trainer.id == self.trainer_id}
    #     Trainer.find(self.trainer_id)
    # end
end