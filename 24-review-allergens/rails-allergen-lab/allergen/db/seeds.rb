# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Recipe.destroy_all
Ingredient.destroy_all

MEAL_TYPES = ["Breakfast", "Lunch", "Dinner", "Appetizers", "Sweets"]

10.times do
    User.create(name: Faker::Superhero.name)
end

30.times do
    Ingredient.create(name: Faker::Food.ingredient)
end

15.times do
    Recipe.create(name: Faker::Food.dish, user: User.all.sample, meal_type: MEAL_TYPES.sample)
end

30.times do
    RecipeIngredient.create(recipe: Recipe.all.sample, ingredient: Ingredient.all.sample, measurement: Faker::Food.measurement)
end

20.times do
    Allergy.create(user: User.all.sample, ingredient: Ingredient.all.sample)
end