import React, { Component } from "react";
import hogs from "../porkers_data";
import FilterSort from './FilterSort'
import HogsMenu from './HogsMenu'
import HogDetails from './HogDetails'


class HogsContainer extends Component {

  constructor() {
    super()

    this.state = {
      greaseFilter: 'all',
      sortType: 'none',
      chosenHog: null,
    }
  }

  chooseHog = (name) => {
    this.setState({ chosenHog: hogs.find(hog => hog.name === name)})
  }

  closeHog = () => {
    this.setState({ chosenHog: null })
  }
  
  selectFilter = (greaseFilter) => {
    this.setState({ greaseFilter})
  }

  selectSort = (sortType) => {
    this.setState({ sortType })
  }

  render() {
    return (
      <div>
        <FilterSort selectFilter={this.selectFilter} selectSort={this.selectSort}/>
        
        {this.state.chosenHog ? <HogDetails chosenHog={this.state.chosenHog} closeHog={this.closeHog} /> : 
        <HogsMenu 
          hogs={hogs} 
          chooseHog={this.chooseHog} 
          greaseFilter={this.state.greaseFilter}
          sortType={this.state.sortType}
           />}
       
      </div>
    );
  }
}

export default HogsContainer;
