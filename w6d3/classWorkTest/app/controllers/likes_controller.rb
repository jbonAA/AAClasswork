class LikesController < ApplicationController

  def index
    if like_params.has_key?(:artwork_id)
      artwork = Artwork.where(id:   )
    artwork_likers = Artwork.likers
    render json: artwork_likers

  end



  def create
    like = Like.new(like_params)
    if like.save!
      render json: like
    else
      render json: "sorry your like didn't work", status: 422
    end
  end

  def show
    like = Like.find(params[:id])
    render json: like
  end

  def destroy
    like = Like.find(params[:id])
    like.destroy
    render json: like
  end


  private
  def like_params
    params.require(:like).permit(:likeable_id, :likeable_type, :user_id)
  end


end