class UsersController < ApplicationController


  def create
    # byebug
    user = User.new(user_params)
    if user.save
      token = encode_token({user_id: user.id})
      render json: {user: user, token: token}
    else
      render json: user.errors
    end
  end 

  def login
    # byebug
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      token = encode_token({user_id: user.id})
      render json: {user: user, token: token}
    else
      render json: {error: "Incorrect Username or Password"}
    end
  end 

  private

    def user_params
      params.permit(:username, :password)
    end
end
