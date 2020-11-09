class State < ApplicationRecord
  has_many :visits
  has_many :users, through: :visits
  has_many :comments

  validates :name, presence: true, uniqueness: true


  def self.order_alpha
    order("name asc")
  end
end