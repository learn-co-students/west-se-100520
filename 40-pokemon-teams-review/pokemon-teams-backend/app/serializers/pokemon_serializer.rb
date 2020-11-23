class PokemonSerializer < ActiveModel::Serializer
  attributes :id, :species, :nickname
  has_one :trainer
end
