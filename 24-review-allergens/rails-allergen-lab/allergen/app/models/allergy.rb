class Allergy < ApplicationRecord
  belongs_to :user
  belongs_to :ingredient

  validates :ingredient, uniqueness: {scope: :user}
end
