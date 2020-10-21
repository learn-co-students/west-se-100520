class CarOwner

  @@all = []

  def self.all
    @@all
  end

  def self.average_number_of_cars
    cars_per_owner = @@all.map do |owner|
      owner.cars.count.to_f
    end
    number_of_owners = @@all.count.to_f
  
    (cars_per_owner.sum / number_of_owners).to_f
  end

  attr_reader :name

  def initialize(name)
    @name = name
    @@all << self
  end

  def cars
    Car.all.select do |car|
      car.car_owner == self
    end
  end

  def mechanics
    cars.map do |car|
      car.mechanic
    end
  end

  


end
