require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end

rodrigo = CarOwner.new("Rodrigo")
ellaine = CarOwner.new("Ellaine")
hal = Mechanic.new("Hal", "luxury")
steve = Mechanic.new("Steve", "sedan")
r_car = Car.new("Jag", "X3", "luxury", rodrigo, hal)
r_car2 = Car.new("Toyota", "Camry", "sedan", rodrigo, steve)
e_car = Car.new("Rolls", "silver phantom 4", "luxury", ellaine, hal)

binding.pry
