# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Doctor.destroy_all
Patient.destroy_all

10.times { Doctor.create(name: "Dr. #{Faker::FunnyName.name}", specialty: Faker::Educator.subject) }
10.times { Patient.create(name: Faker::FunnyName.name, condition: Faker::Hipster.word) }