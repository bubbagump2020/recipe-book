class SessionsController < ApplicationController

    # skip_before_action :require_login, only [:new, :create]

    def login
        user = User.find_by(username: login_params[:username])
        if(user && user.authenticate(login_params[:password]))
            session[:username] = user.username
            render json: {user: user, success: true }
        else
            render json: { success: false }
        end
    end

    def logout
        
    end

    private

    def login_params
        params.permit(:username, :password)
    end

end
