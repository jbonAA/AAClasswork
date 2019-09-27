class CommentsController < ApplicationController
  def index
    if params.has_key?(:user_id)
      comments = Comment.where(artist_id: params[:user_id])
    elsif params.has_key?(:artwork_id)
      comments = Comment.where(artwork_id: params[:artwork_id])
    end
    if comments.empty?
      render json: "no comments", status: 422
    else
      render json: comments
    end
  end

  def create
    new_comment = Comment.new(comment_params)
    if new_comment.save!
      render json: new_comment
    else
      render json: "Sorry LAWL", status: 422
    end
  end

  def destroy
    comment = Comment.find(params[:id])
    comment.destroy
    render json: comment
  end

  private
  def comment_params
    params.require(:comment).permit(:artwork_id, :artist_id, :body)
  end
end