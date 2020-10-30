class Cow < ApplicationRecord
  belongs_to :farmer

  validates :name, { presence: true, uniqueness: true }
  validates :spots, numericality: { less_than_or_equal_to: 50 }
end
