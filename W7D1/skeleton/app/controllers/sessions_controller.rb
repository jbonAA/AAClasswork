class SessionsController < ApplicationController

  before_action :logged_in_cant_access

  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      log_in!(@user)
      redirect_to root_url
    else
      render json: "You're not signed up!", status: 401
    end
  end

  def destroy
    if current_user
      @current_user.reset_session_token!
      session[:session_token] = nil
    end

    redirect_to new_session_url
  end
end
