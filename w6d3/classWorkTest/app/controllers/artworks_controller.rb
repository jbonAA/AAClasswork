class ArtworksController < ApplicationController
  def index
    
    if params.has_key?(:user_id)
      artworks =  Artwork.where(artist_id: params[:user_id])
      shares = ArtworkShare.where(viewer_id: params[:user_id])
      artworks += shares
    end

    if artworks.empty?
      render json: "Artist doesn't have any artworks"
    else
      render json: artworks
    end
  end

  def create
    artwork = Artwork.new(artwork_params)
    if artwork.save!
      render json: artwork
    else
      render json: artwork.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    artwork = Artwork.find(params[:id])
    render json: artwork
  end

  def destroy
    artwork = Artwork.find(params[:id])
    artwork.destroy
    render json: artwork
  end

  def update
    artwork = Artwork.find(params[:id])
    if artwork.update
      render json: artwork
    else
      render json: "cannot update your artwork", status: :unprocessable_entity
    end
  end

  private

  def artwork_params
    params.require(:artwork).permit(:title, :image_url, :artist_id)
  end
end