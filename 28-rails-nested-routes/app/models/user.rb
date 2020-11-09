class User < ApplicationRecord
  has_many :visits, dependent: :destroy
  has_many :states, through: :visits
  has_many :comments, dependent: :destroy

  has_secure_password

  validates :username, presence: true, uniqueness: true
end