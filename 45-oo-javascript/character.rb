class Character

  @@all = []

  attr_reader :name, :ability

  def initialize(name, ability)
    @name = name
    @ability = ability
    @@all << self
  end

  def refill_health
    puts "#{self.name} restored health!"
  end

end
