import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
import Cage from './Cage';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }, 
      filteredPets: [], /* ADD STATE FOR CHOSEN PETS */
      isCaged: false /* FOR CAGED COMPONENT */
    }
  }

  // TODO: SET STATE WITH ONE FETCH
  

  onChangeType = (e) => {
    this.setState({ filters: { type: e.target.value } });
  };

  // TODO: MODIFY TO CHOOSE THE PET TYPE FROM PETS AND UPDATE FILTERED PETS
  onFindPetsClick = () => {
    const domain = '/api/pets';
    const filterType = this.state.filters.type;
    const endpoint = filterType === 'all' ? domain : `${domain}?type=${filterType}`;

    fetch(endpoint)
    .then(res => res.json())
    .then(pets => this.setState({ pets }));
    
  };

  // TODO: MODIFY TO UPDATE THE FILTERED PET
  onAdoptPet = (id) => {
    // update pet in state to isAdopted: true
    this.setState({ filteredPets: this.state.filteredPets.map(pet => pet.id === id ? {...pet, isAdopted: true} : pet) });
  };

  setCaged = () => {
    this.setState({ isCaged: !this.state.isCaged });
  };

  render() {
    return <>
      {/* CONDITIONALLY SHOW CAGED COMPONENT */}
      {this.state.isCaged ? <Cage /> : null}

      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
              <button onClick={this.setCaged} className="ui secondary button cage-btn" >
                  Toggle Cage
              </button>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}  />
            </div>
          </div>
        </div>
      </div>
    </>
  }
}

export default App
