class RecipesController < ApplicationController
    before_action :get_recipe, only: [:show, :edit, :update, :destroy]
    
    def index
        # raise params.inspect
        if params[:sort]
            @recipes = Recipe.all.sort_by {|r| r.ingredients.count }.reverse
        else
            @recipes = Recipe.all
        end
    end
    
    def new
        @recipe = Recipe.new
    end
    
    def create
        @recipe = Recipe.new(recipe_params)
        if @recipe.save
            redirect_to recipe_path(@recipe)
        else
            render :new
        end
    end
    
    def update
        if @recipe.update(recipe_params)
            redirect_to @recipe
        else
            render :edit
        end
    end
    
    def destroy
        @recipe.destroy
        redirect_to '/recipes'
    end

    private

    def get_recipe
        @recipe = Recipe.find(params[:id])
    end

    def recipe_params
        params.require(:recipe).permit(:name, :meal_type, :user_id)
    end
end
