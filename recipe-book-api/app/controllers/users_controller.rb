class UsersController < ApplicationController

    # skip_before_action :requre_login, only: [:new, :create]

    def create
        user = User.new(user_params)
        if user.save
            render json: { user: user, success: true }
        else
            render json: { success: true, errors: user.errors.full_messages }
        end
    end

    def update

    end

    def delete

    end

    private

    def user_params
        params.permit(:username, :email, :password)
    end

end