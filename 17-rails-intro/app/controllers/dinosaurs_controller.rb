class DinosaursController < ApplicationController
  def index
    @dinosaurs = Dinosaur.all
    # render 'about'
  end

  def show
    # byebug
    @dino = Dinosaur.find(params[:id])
  end

  def about

  end

end
