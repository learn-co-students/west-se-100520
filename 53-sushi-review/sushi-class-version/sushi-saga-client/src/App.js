import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Form from './components/Form'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  // could take a random sample of all of the sushis
  // have another array of sushi's in the state, which are just the four we want, use an index starting at 0
  // OR, jsut store the index in state and calculate the four of them inline

  state = {
    allSushis: [],
    eatenSooshes: [],
    index: 0,
    money: 150
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(json => {
        this.setState({ allSushis: json })
      })
  }

  getSushis = () => {
    // logic in here to get just four
    return this.state.allSushis.slice(this.state.index, this.state.index + 4)
  }

  nextSushi = () => {
    //index needs to change
    // both of the below are valid
    // eventually we should make it cycle back to the beginning
    // this.setState({ index: this.state.index + 4 })

    // how can we tell if we have reached the end of the sushi array?
    // we have access to the length of the sushis
    this.setState(prevState => {
      let something
      if (prevState.allSushis.length - prevState.index <= 4) {
        something = 0
      } else {
        something = prevState.index + 4
      }
      return {
        index: something
      }
    })
  }

  eatThatSushi = (selectedSushi) => {
    // update state to remove from original array & add it to eaten array
    if (this.state.money >= selectedSushi.price) {
      let newSushis = [...this.state.allSushis].filter(sushi => sushi !== selectedSushi)
      let newEaten = [...this.state.eatenSooshes, selectedSushi]

      this.setState({
        allSushis: newSushis,
        eatenSooshes: newEaten,
        money: this.state.money - selectedSushi.price
      })
    }
    else {
      alert("no :(")
    }
  }

  addMoney = (e) => {
    e.preventDefault()
    e.persist()
    let amnt = parseInt(e.target.lollapolooza.value, 10)
    e.target.reset()
    this.setState(prevState => {
      return {
        money: prevState.money + amnt
      }
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushis={this.getSushis()}
          nextSushi={this.nextSushi}
          eatThatSushi={this.eatThatSushi}
        />
        <Table
          eatenSooshes={this.state.eatenSooshes}
          money={this.state.money}
        />
        <Form addMoney={this.addMoney} />
      </div>
    );
  }
}

export default App;