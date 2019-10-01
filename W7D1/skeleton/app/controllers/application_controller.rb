class ApplicationController < ActionController::Base
  helper_method :current_user, :logged_in?, :log_in

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def log_in!(user)
    session[:session_token] = user.reset_session_token!
  end

  def logged_in_cant_access

    if logged_in? && ((params[:action] == "new" && params[:controller] == "sessions") || (params[:action] == "new" && params[:controller] == "users"))
      redirect_to cats_url
    end
  end

end
