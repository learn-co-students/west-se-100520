class CarsController < ApplicationController
  # GET /cars
  # GET /cars.json
  def index
    @cars = Car.all
  end
end
