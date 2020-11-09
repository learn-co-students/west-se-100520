class SessionsController < ApplicationController

  def destroy
    session.delete :user_id
    @current_user = nil
    redirect_to root_path
  end

  def new
  end


  def create
    @user = User.find_by(username: params[:user][:username])
    if @user && @user.authenticate(params[:user][:password])
      session[:user_id] = @user.id
      redirect_to user_path(@user)
    else
      @error = 'Log in failed. Please try again.'
      render 'sessions/new'
    end
  end
end