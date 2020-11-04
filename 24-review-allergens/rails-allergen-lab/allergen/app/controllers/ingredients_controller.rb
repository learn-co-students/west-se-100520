class IngredientsController < ApplicationController

    def index
        # @ingredients = Ingredient.all.sort_by {|i| i.users.count }.reverse
        # @ingredients = Ingredient.left_joins(:users).group(:id).order('count(users.id) DESC')
        @ingredients = Ingredient.by_allergic_users
    end

    def show
        @ingredient = Ingredient.find(params[:id])
    end
end
