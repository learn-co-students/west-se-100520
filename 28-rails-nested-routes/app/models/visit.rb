class Visit < ApplicationRecord
  belongs_to :user
  belongs_to :state
  has_many :comments, dependent: :destroy
  validates :rating, presence: true


  def name
    "#{user.username}'s visit to #{state.name}"
  end

end