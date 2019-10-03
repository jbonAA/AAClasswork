class ApplicationController < ActionController::Base
helper_method :logged_in?, :current_user

  def login!(user)
    @current_user = user 
    session[:session_token] = @current_user.reset_session_token! 
  end

   def logout!
    current_user.reset_session_token! 
    session[:session_token] = nil 
   end

  def logged_in?
    !!current_user
  end

  def current_user
    return nil unless session[:session_token]
    User.find_by(session_token: session[:session_token])
  end

end
