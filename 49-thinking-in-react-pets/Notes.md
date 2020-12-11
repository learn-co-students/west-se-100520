## Features

1. Filter animals using the Animal type dropdown, e.g. show only cats (should update the API endpoint query params)

2. Click Adopt to adopt a pet, no undo

No persistence

## Structure

<App /> (has state: pets (from fetch, []), filters ({ type }))
  - <Filters />
    - Receives onChangeType(), updates state.filters.type
      - Called on select change
    - Receives onFindPetsClick(), fetches list of pets
      - Called when Find Pets button clicked
  - <PetBrowser />
    - Receives pets [] (the filtered pets)
    - Receives onAdoptPet(id), updates isAdopted to true
    - <Pet />
      - Receives pet { name, type, age, weight, gender, isAdopted }
        - For gender, displays male (`♂`) or female (`♀`) symbol 
        - For isAdopted: true => disabled button, false => primary button
      - Receives onAdoptPet(id), updates isAdopted to true
        - Does not get called if pet already adopted

## Endpoints

'/api/pets'

'/api/pets?type=cat' (dog, micropig)

## Example Response

[
  { 
    age: 4,
    gender: "male",
    id: "5c142d9e-ea45-4231-8146-cccf71c704c0",
    isAdopted: false,
    name: "Trident",
    type: "dog",
    weight: 1,
  },
  { 
    age: 40,
    gender: "none",
    id: "5c142d9e-eb45-4231-8146-cccf71c704c0",
    isAdopted: true,
    name: "Bloop",
    type: "dog",
    weight: 1,
  },
  { 
    age: 44,
    gender: "female",
    id: "5c143d9e-ea45-4231-8146-cccf71c704c0",
    isAdopted: false,
    name: "Jam Baby",
    type: "cat",
    weight: 2,
  }
]
