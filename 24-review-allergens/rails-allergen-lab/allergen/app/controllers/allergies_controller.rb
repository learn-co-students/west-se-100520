class AllergiesController < ApplicationController

    def new
        @allergy = Allergy.new
    end

    def create
        @allergy = Allergy.new(params.require(:allergy).permit(:user_id, :ingredient_id))
        if @allergy.save
            redirect_to @allergy.user
        else
            render :new
        end
    end

    def destroy
        @allergy = Allergy.find(params[:id])
        @allergy.destroy
        redirect_to @allergy.user
    end
end
