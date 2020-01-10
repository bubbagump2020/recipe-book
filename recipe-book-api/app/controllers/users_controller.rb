class UsersController < ApplicationController

    def index
        users = User.all
        render json: users
    end

    def create
        user = User.new(user_params)
        if user.save
            render json: "User saved"
        else
            render json: "user not created"
        end
    end

    def show

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