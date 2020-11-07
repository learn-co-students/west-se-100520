class PostsController < ApplicationController
    before_action :get_post, only: [:edit, :update, :destroy]
    before_action :authorized

    def index
        @posts = Post.all
    end

    def new
        @post = Post.new
    end

    def create
        @post = current_user.posts.build(post_params)
        if @post.save
            redirect_to posts_path
        else
            render :new
        end
    end

    def edit
        if !is_authorized?
            flash[:danger] = "You don't own this post!"
            redirect_to posts_path
        end
    end

    def update
        if is_authorized?
            if @post.update(post_params)
                redirect_to posts_path
            else
                render :edit
            end
        end
    end
    

    def destroy
        if is_authorized?
            @post.destroy
        else
            flash[:danger] = "You don't own this post!"
        end
        redirect_to posts_path
    end

    private

    def get_post
        @post = Post.find(params[:id])
    end

    def post_params
        params.require(:post).permit(:title, :content, :user_id)
    end

    def is_authorized?
        @post.user == current_user
    end

end
