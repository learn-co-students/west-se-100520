class UserartsController < ApplicationController

 
  def create
   byebug
  end



  private


    def userart_params
      params.require(:userart).permit(:art_id, :user_id)
    end
end
