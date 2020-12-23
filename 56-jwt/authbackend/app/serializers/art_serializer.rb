class ArtSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :slug, :date, :votes
  has_one :artist
end
