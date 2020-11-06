# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Post.destroy_all

u = User.create(username: "Tony", password: "password") 
u2 =User.create(username: "Alex", password: "password1") 

p1 = Post.create(title: "Hello world", content: "helooooo", user: u)
p2 = Post.create(title: "my first post", content: "so excited", user: u2)


