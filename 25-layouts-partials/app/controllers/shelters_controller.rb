class SheltersController < ApplicationController
  layout 'sad_puppy'
  def show
    @shelter = Shelter.find(params[:id])
  end



end