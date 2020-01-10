class SessionsController < ApplicationController

    def login
        
    end

    def logout
        
    end

    private

    def login_params
        params.require(:user).permit(:username, :password)
    end

end
