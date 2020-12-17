import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    allSushi: [],
    pointer: 0,
    numEaten: 0,
    money: 150
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        let sushes = data.map(x => { x.eaten = false; return x })
        this.setState({ allSushi: sushes })
      })
  }

  showFourMore = (ev) => {
    this.setState(prevState => {
      let tempPointer;
      if (prevState.pointer >= prevState.allSushi.length - 4) {
        // if we've reached the end of the sushi array, cycle back to the beginning
        tempPointer = 0
      } else {
        // otherwise, keep increasing the starting point of the slice
        tempPointer = prevState.pointer + 4
      }
      return {
        pointer: tempPointer
      }
    })
  }

  eatOne = (sushi) => {
    if (sushi.eaten === true) {
      alert("Already ate that one, monster")
    }
    else if (this.state.money < sushi.price) {
      alert("Too poor to eat this sushi :(")
    }
    else {
      sushi.eaten = true

      this.setState(prevState => {
        // make a new array, replacing the sushi that we ate with one whose eaten property is true
        let newSushiSet = prevState.allSushi.map(x => x.id === sushi.id ? sushi : x)
        return {
          allSushi: newSushiSet,
          numEaten: prevState.numEaten + 1,
          money: prevState.money - sushi.price
        }
      })
    }
  }

  addMoney = () => {
    let amnt = prompt("How much you adding?")
    // do some regex to see if there's actually any numbers
    if(!amnt.match(/[0-9]/)){
      alert("I said money, idk what you entered")
    }
    else {
      this.setState(prevState=>{
        let newMoney = parseInt(amnt) + prevState.money
        return {
          money: newMoney
        }
      })
    }
  }

  render() {
    const { allSushi, pointer, money, numEaten } = this.state
    return (
      <div className="app">
        <SushiContainer sushi={allSushi.slice(pointer, pointer + 4)} showFourMore={this.showFourMore} eatOne={this.eatOne} addMoney={this.addMoney}/>
        <Table numEaten={numEaten} money={money} />
      </div>
    );
  }
}

export default App;