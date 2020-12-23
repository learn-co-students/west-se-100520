class UserartSerializer < ActiveModel::Serializer
  attributes :id
  has_one :art
  has_one :user
end
