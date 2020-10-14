class Owner

  ALL = []

  extend Persistable::ClassMethods # import all class methods from the Persistable module
  include Persistable::InstanceMethods # include imports all instance level methods
  
  # the methods below have been abstracted into the Peristable module
  
  # def self.all
  #   ALL
  # end
  
  # def self.reset_all
  #   self.all.clear
  # end
  
  # def self.count
  #   self.all.length
  # end
  
  attr_accessor :name, :pets
  attr_reader :species
  
  def initialize(name)
    @name = name
    @species = 'human'
    @pets = {:fishes => [], :dogs => [], :cats => []}
    super
    # ALL << self
  end

  def say_species
    "I am a #{species}."
  end

  def buy_fish(name)
   pets[:fishes] << Fish.new(name)
 end

 def buy_dog(name)
   pets[:dogs] << Dog.new(name)
 end

 def buy_cat(name)
   pets[:cats] << Cat.new(name)
 end

 def walk_dogs
   pets[:dogs].each do |dog|
     dog.mood = "happy"
   end
 end

 def play_with_cats
   pets[:cats].each do |cat|
     cat.mood = "happy"
   end
 end

 def feed_fish
   pets[:fishes].each do |fish|
     fish.mood = "happy"
   end
 end

 def sell_pets
   pets.each do |species, animals|
     animals.each do |animal|
       animal.mood = "nervous"
     end
     animals.clear
   end
 end

 def list_pets
   "I have #{pets[:fishes].count} fish, #{pets[:dogs].count} dog(s), and #{pets[:cats].count} cat(s)."
 end

end
