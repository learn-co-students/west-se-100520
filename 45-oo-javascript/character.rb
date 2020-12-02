class Character
  attr_reader :name, :ability

  def initialize(name, ability)
    @name = name
    @ability = ability
  end

  def refill_health
    puts "#{self.name} restored health!"
  end

end
