class Ingredient < ApplicationRecord
    has_many :recipe_ingredients
    has_many :recipes, through: :recipe_ingredients
    has_many :allergies, dependent: :destroy
    has_many :users, through: :allergies

    def self.by_allergic_users
        left_joins(:users).group(:id).order('count(users.id) DESC')
    end
end
