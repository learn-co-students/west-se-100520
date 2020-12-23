class User < ApplicationRecord
    has_many :userarts
    has_many :arts, through: :userarts
    
end
