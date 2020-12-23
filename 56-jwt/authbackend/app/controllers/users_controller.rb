class UsersController < ApplicationController


  def create
    byebug
  end 

  def login
  
  end 

  private

    def user_params
      params.permit(:username, :password)
    end
end
