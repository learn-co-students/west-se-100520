class Art < ApplicationRecord
    belongs_to :artist
    has_many :userarts
    has_many :users, through: :userarts
end
