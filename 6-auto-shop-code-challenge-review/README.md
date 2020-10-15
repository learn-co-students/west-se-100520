# LOOKIN' FOR ADVENTURE - HEAD OUT ON THE HIGHWAY

Word has just come from the higher-ups, and you're in charge of building out a domain that keeps track of cars, their owners, and the mechanics that service them.  Each car has its own classification, like "antique", "exotic", or "clunker", and each mechanic has a specialization (these are the same as car classifications).  You don't want to take your sweet souped up '94 Camaro to some jerk that specializes in beamers right?

Each CarOwner may have a ton of cars, but these folks are fanatical about their maintenance, and only see one mechanic per car.

The basics have been built out for you, but you'll need to figure out the relationships and create most of the methods.  Hook it up!

## Deliverables

Here's what we need to be able to do.

**CarOwner**

  - `CarOwner.all` Get a list of all owners

  - `CarOwner#cars` Get a list of all the cars that a specific owner has

  - `CarOwner#mechanics` Get a list of all the mechanics that a specific owner goes to

  - `CarOwner.average_number_of_cars` Get the average amount of cars owned for all owners

**Car**

  - `Car.all` Get a list of all cars

  - `Car.classifications` Get a list of all car classifications

  - `Car.find_mechanics(classification)` Get a list of mechanics that have an expertise that matches the passed in car classification

**Mechanic**

  - `Mechanic.all` Get a list of all mechanics

  - `Mechanic#cars` Get a list of all cars that a mechanic services

  - `Mechanic#car_owners` Get a list of all the car owners that go to a specific mechanic

  - `Mechanic#car_owners_names` Get a list of the names of all car owners who go to a specific mechanic



  CarOwner --< Cars >-- Mechanics
  - a CarOwner has many Cars
  - a CarOwner has many Mechanics through cars
  - a Mechanic has many cars
  - a Mechanic has many CarOwners through Cars
  - a Car belongs to a CarOwner
  - a Car belongs to a Mechanic
