class SessionsController < ApplicationController

    # skip_before_action :require_login, only [:new, :create]

    def login
        user = User.find_by(username: login_params[:username])
        if(user && user.authenticate(login_params[:password]))
            render json: { user_id: user.id, user: user.username, success: true, token: session }
        else
            render json: { success: false }
        end
    end

    private

    def login_params
        params.permit(:username, :password)
    end

end
