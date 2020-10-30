class CowsController < ApplicationController

    before_action :get_farmers, only: [:new, :create]

    def show
        @cow = Cow.find(params[:id])
    end

    def new
        @cow = Cow.new
        # @farmers = Farmer.all
    end

    def create
        @cow = Cow.new(cow_params)
        if @cow.save
            redirect_to cow_path(@cow)
        else
            render :new
        end
    end
    
    private
    
    def cow_params
        params.require(:cow).permit(:name, :spots, :farmer_id)
    end 
    
    def get_farmers
        @farmers = Farmer.all
    end
end
