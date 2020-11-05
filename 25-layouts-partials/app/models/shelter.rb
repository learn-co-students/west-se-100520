class Shelter < ApplicationRecord
  has_many :dogs
  has_many :owners, through: :dogs
end
