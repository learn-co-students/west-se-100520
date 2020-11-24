class PokemonsController < ApplicationController

    def create
        # byebug
        trainer = Trainer.find(pokemon_params[:trainer_id])
        if trainer.pokemons.count < 6
            pokemon = Pokemon.create(
                nickname: Faker::Name.first_name,
                species: Faker::Games::Pokemon.name,
                trainer_id: pokemon_params[:trainer_id]
            )
            render json: pokemon, status: 201
        else
            render json: {error: 'Team is full'}, status: 403
        end
    end

    def destroy
        pokemon = Pokemon.find(params[:id])
        pokemon.destroy
        render json: pokemon
    end

    private
    def pokemon_params
        params.require(:pokemon).permit(:trainer_id)
    end
end
