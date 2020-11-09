class CommentsController < ApplicationController
  before_action :if_not_logged_in

  def new
    @comment = current_user.comments.build
  end

  def create
    @comment = current_user.comments.build(comment_params)
    if @comment.save
      redirect_to visit_path(@comment.visit)
    else
      render 'comments/new'
    end
  end

  def index
    @comments = Comment.all
  end

  def show
    @comment = Comment.find_by_id(params[:id])
  end

  private
  def comment_params
    params.require(:comment).permit(:visit_id, :text)
  end
end