require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end

# your seed data goes here
hamilton = Musical.new("Hamilton", "NYC")
phantom = Musical.new("The Phantom of the Opera", "Paris")

fifth_ave = Theater.new("The Fifth Avenue", "Seattle")
the_met = Theater.new("The Met", "NYC")

perf_1 = Performance.new("10/9/20", hamilton, fifth_ave)
perf_2 = Performance.new("5/5/20", phantom, the_met)
perf_3 = Performance.new("7/10/20", hamilton, the_met)

phantom.perform_in_theater(fifth_ave, "9/25/20")

Pry.start
