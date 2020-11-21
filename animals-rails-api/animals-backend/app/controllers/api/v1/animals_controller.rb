class Api::V1::AnimalsController < ApplicationController
    def index
        animals = Animal.all
        render json: animals, only: [:name, :gender, :id],
        include: { species: {only: [:id, :name]}}
    end

    def create
        species = Species.find_or_create_by(name: params[:species])
        animal = Animal.new(name: params[:name], gender: params[:gender].to_i, species: species)
        if animal.save
            render json: animal, include: :species
        else
            render json: { error: 'Animal was not created'}
        end
    end

    def update
        animal = Animal.find(params[:id])
        if animal.update(name: params[:name])
            head :no_content
        else
            render json: { error: 'Animal was not updated'}
        end
    end
end
