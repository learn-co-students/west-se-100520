class Car

  @@all = []

  def self.all
    @@all
  end

  def self.classifications
    classifications = @@all.map do |car| 
      car.classification
    end
    classifications.uniq
  end

  def self.find_mechanics(classification)
    Mechanic.all.select {|mech| mech.specialty == classification}
  end

  attr_reader :make, :model, :car_owner, :mechanic, :classification

  def initialize(make, model, classification, car_owner, mechanic)
    @make = make
    @model = model
    @classification = classification
    @car_owner = car_owner
    @mechanic = mechanic
    @@all << self
  end

end
