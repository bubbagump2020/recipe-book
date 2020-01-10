class UsersController < ApplicationController

    # skip_before_action :requre_login, only: [:new, :create]

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

    # Do I even need the show method with the React frontend?

    def show
        user = User.find_by(user_params[:username])
        puts user
        render json: :user
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