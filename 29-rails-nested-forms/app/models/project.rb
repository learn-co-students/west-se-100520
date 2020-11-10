class Project < ApplicationRecord

    has_many :tasks, dependent: :destroy
    validates :name, :due_date, presence: true
    validates_associated :tasks

    # the reject_if option below allows the submission of forms with inputs for multiple new objects in the nested form, even when some of those inputs are blank
    accepts_nested_attributes_for :tasks, reject_if: :all_blank
    # accepts_nested_attributes_for :tasks, reject_if: lambda{|attrs| attrs['name'].blank?}


    # the custom writer method below overwrites the tasks_attributes= method provided by the accepts_nested_attributes_for macro above
    # def tasks_attributes=(attributes)
    #     # byebug
    #     attributes.values.each do |attrs|
    #         attrs[:name] = attrs[:name].upcase
    #         self.tasks.build(attrs)
    #     end
    # end

    def complete
        self.tasks.where(complete: true)
    end

    def incomplete
        self.tasks.where(complete: false)
    end

end
