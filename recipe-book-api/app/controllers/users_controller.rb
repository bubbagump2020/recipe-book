class UsersController < ApplicationController

    # skip_before_action :requre_login, only: [:new, :create]

    def index
        users = User.all
        render json: users
    end

    def create
        user = User.new(user_params)
        if user.save
            render json: { user: user, success: true }
        else
            render json: { success: true false, errors: user.errors.full_messages }
        end
    end

    # Do I even need the show method with the React frontend?

    # def show
    #     user = User.find_by(user_params[:username])
    #     print user
    #     render json: "Hello!"
    # end

    def update

    end

    def delete

    end

    private

    def user_params
        params.permit(:username, :email, :password)
    end

end