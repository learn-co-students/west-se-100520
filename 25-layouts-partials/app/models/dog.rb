class Dog < ApplicationRecord
  belongs_to :owner, optional: true
  belongs_to :shelter, optional: true
  accepts_nested_attributes_for :owner, :reject_if => :all_blank
  validates :name, presence: true
  validates :age, presence: true
  validates :breed, presence: true
end
