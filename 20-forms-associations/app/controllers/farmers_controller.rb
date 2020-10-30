class FarmersController < ApplicationController
  def index
    @farmers = Farmer.all
  end
end
