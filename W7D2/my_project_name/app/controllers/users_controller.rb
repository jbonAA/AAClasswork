class UsersController < ApplicationController

  def index 
    @users = User.all 
    render :index
  end

  def new 
  end 

  def create
    @user = User.new(user_params)
    login!(@user)
    if @user.save
      #session[:session_token] = @user.session_token
      flash[:success] = 'Welcome back'
      redirect_to users_url
    else 
      flash[:errors] = "lol"
      render :new 
    end

  end

  def destroy 
    logout!
    
    redirect_to new_user_url
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
