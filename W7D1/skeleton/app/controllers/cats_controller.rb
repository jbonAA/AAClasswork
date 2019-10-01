class CatsController < ApplicationController

  before_action :belong_to_owner?, only: %I(edit update)

  def index
    @cats = Cat.all
    render :index
  end

  def show
    @cat = Cat.find(params[:id])
    render :show
  end

  def new
    @cat = Cat.new
    render :new
  end

  def create
    @cat = Cat.new(cat_params)
    if @cat.save
      redirect_to cat_url(@cat)
    else
      flash.now[:errors] = @cat.errors.full_messages
      render :new
    end
  end

  def edit
    @cat = Cat.find(params[:id])
    if @cat[:user_id] == current_user.id
      render :edit
    else
      render json: "You can't edit cats that you don't own!"
    end
  end

  def update
    @cat = Cat.find(params[:id])
      if @cat.update_attributes(cat_params)
        redirect_to cat_url(@cat)
      else
        flash.now[:errors] = @cat.errors.full_messages
        render :edit
      end    
  end

  def belong_to_owner?
    return false if !current_user
      cat.user_id == current_user.id
  end

  private

  def cat_params
    params.require(:cat).permit(:age, :birth_date, :color, :description, :name, :sex)
  end
end
