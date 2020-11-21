class Animal < ApplicationRecord
  belongs_to :species
  enum gender: [:male, :female, :non_binary]

  validates :name, presence: true
end
