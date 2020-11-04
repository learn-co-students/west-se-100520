class UsersController < ApplicationController

    before_action :get_user

    def show

    end

    def destroy
        @user.destroy
        redirect_to recipes_path
    end

    private

    def get_user
        @user = User.find(params[:id])
    end
end
