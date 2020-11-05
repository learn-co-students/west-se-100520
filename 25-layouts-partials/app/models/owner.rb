class Owner < ApplicationRecord
  has_many :dogs
  has_many :shelters, through: :dogs
  validates :name, presence: true
end
