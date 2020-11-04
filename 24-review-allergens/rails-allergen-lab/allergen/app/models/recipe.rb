class Recipe < ApplicationRecord
  belongs_to :user
  has_many :recipe_ingredients, dependent: :destroy
  has_many :ingredients, through: :recipe_ingredients

  MEAL_TYPES = ["Breakfast", "Lunch", "Dinner", "Appetizers", "Sweets"]
  validates :meal_type, inclusion: {in: MEAL_TYPES}
  # validate :meal_type_check



  # def meal_type_check
  #   if meal_type.present? && !MEAL_TYPES.include?(meal_type)
  #     errors.add(:meal_type, "must be Breakfast, Lunch, Dinner, Appetizers, or Sweets")
  #   end
  # end
end
