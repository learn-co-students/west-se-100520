class Api::V1::SpeciesController < ApplicationController
    def index
        species = Species.all
        render json: species, except: [:created_at, :updated_at],
        include: {animals: {only: [:name, :gender]}}
    end
end