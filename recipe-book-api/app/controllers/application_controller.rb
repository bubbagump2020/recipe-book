class ApplicationController < ActionController::API
    # before_action :set_csrf_cookie
    # protect_from_forgery with: :exception

    private

    def set_csrf_cookie
        cookies["CSRF-TOKEN"] = form_authenticity_token
    end

    # def current_user
    #     @_current_user ||= session[:current_user_id] && User.find(session[:current_user_id])
    # end

end
