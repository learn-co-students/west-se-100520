class TigersController < ApplicationController
  before_action :set_tiger, only: [:show, :edit, :update, :destroy]

  # GET /tigers
  # GET /tigers.json
  def index
    @tigers = Tiger.all
  end

end
