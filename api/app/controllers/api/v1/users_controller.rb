module Api
  module V1
    class UsersController < ApplicationController
      before_action :authenticate_user, only: %i[index current]

      def index
        render json: { status: 200, msg: 'User logged in'}
      end

      def create
        @user = User.new(user_params)
        if @user.save
          render json: { status: 200, msg: 'User was created'}
        end
      end

      def current
        current_user.update!(last_login: Time.now)
        render json: current_user
      end

      private
        def user_params
          params.require(:user).permit(:name, :email, :password, :password_confirmation)
        end
    end
  end
end