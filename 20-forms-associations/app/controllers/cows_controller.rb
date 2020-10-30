class CowsController < ApplicationController
  before_action :fetch_cow, only: [:show]

  def new
    @cow = Cow.new(spots: rand(0..25))
  end

  def show
    # calls fetch_cow
    render :show
  end

  def create
    @cow = Cow.create(cow_params)
    if @cow.valid?
      # redirect_to cow_path(@cow)
      redirect_to @cow
    else
      render :new
    end
  end

  private
  def cow_params
    params.require(:cow).permit(:name, :spots, :farmer_id)
  end

  def fetch_cow
    @cow = Cow.find(params[:id])
  end
end
