# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

shelters = Shelter.create([{name: 'Humane Society'}, {name: 'Puppy Rescue'}, {name: 'Second Chance'}])


dogs = Dog.create([
  { name: 'Toby', breed: 'Lab', age: 8, sex: 'M', shelter_id: 1 },{ name: 'Lucky', breed: 'Husky', age: 10, sex: 'M', shelter_id: 3 }, { name: 'Pluto', breed: 'Border Collie', age: 1, sex: 'M', shelter_id: 1 }, { name: 'Chance', breed: 'Mutt', age: 2, sex: 'M', shelter_id: 3 }, { name: 'Buster', breed: 'Golden', age: 4, sex: 'M', shelter_id: 1 }, { name: 'Bella', breed: 'German Shepard', age: 5, sex: 'F', shelter_id: 3 }, { name: 'Spot', breed: 'Mutt', age: 0, sex: 'M', shelter_id: 2 }, { name: 'Brad', breed: 'Pit Bull', age: 0, sex: 'M', shelter_id: 2 }, { name: 'Wanda', breed: 'Mutt', age: 3, sex: 'F', shelter_id: 2 }, { name: 'Peaches', breed: 'Lab', age: 10, sex: 'F', shelter_id: 3 }, { name: 'Honey', breed: 'Golden', age: 0, sex: 'F', shelter_id: 1 }, { name: 'Trixie', breed: 'Poodle', age: 2, sex: 'F', shelter_id: 2 }, { name: 'Foxy', breed: 'Husky', age: 4, sex: 'F', shelter_id: 1 }, { name: 'Jazz', breed: 'German Shepard', age: 0, sex: 'F', shelter_id: 2 }])

owners = Owner.create([{ name: 'Jennifer' }, { name: 'Kevin' }, {name: 'Erin'}])


