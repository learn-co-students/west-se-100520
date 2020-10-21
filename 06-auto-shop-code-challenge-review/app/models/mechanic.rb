class Mechanic

  @@all = []

  def self.all
    @@all
  end

  attr_reader :name, :specialty

def initialize(name, specialty)
  @name = name
  @specialty = specialty
  @@all << self
end

def cars
  Car.all.select do |car|
    car.mechanic == self
  end
end

def car_owners
  cars.map {|car| car.car_owner}
end

def car_owners_names
  car_owners.map {|co| co.name}
end


end
