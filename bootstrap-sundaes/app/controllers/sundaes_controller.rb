class SundaesController < ApplicationController

    def index
        @sundaes = Sundae.all
    end

    def new
        @sundae = Sundae.new
    end

    def create
        @sundae = Sundae.create(sundae_params)
        redirect_to sundaes_path
    end

    private

    def sundae_params
        params.require(:sundae).permit(:flavor, :topping, :scoops)
    end
    
end
