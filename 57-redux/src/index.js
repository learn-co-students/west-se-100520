import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import logo from "./logo.svg";
import "./App.css";
import { createStore } from 'redux';


const initialState = { 
  count: 0,
  friends: [],
  liked: true
 };

const reducer = (oldState=initialState, action) => {
  console.log('oldState: ', oldState, 'action: ', action)
  switch (action.type) {
    case 'INCREMENT':
      return {...oldState, count: oldState.count + 1}
    case 'DECREMENT':
      return {...oldState, count: oldState.count - action.payload }
    default:
      return oldState
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


class App extends Component {

  // increment = () => {
  //   this.setState(prevState => ({ count: prevState.count + 1 }));
  // };

  // decrement = () => {
  //   this.setState(prevState => ({ count: prevState.count - 1 }));
  // };
  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Counter />
      </div>
    );
  }
}

class Header extends Component {
  renderDescription = () => {
    const remainder = store.getState().count % 5;
    const upToNext = 5 - remainder;
    return `The current count is less than ${store.getState().count + upToNext}`;
  };

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <h3>{this.renderDescription()}</h3>
      </header>
    );
  }
}

const Counter = () => {
  
    const increment = () => {
      store.dispatch({
        type: "INCREMENT"
      })
    }

    const decrement = () => {
      store.dispatch({
        type: "DECREMENT",
        payload: 1
      })
    }

    return (
      <div className="Counter">
        <h1>{store.getState().count}</h1>
        <button onClick={decrement}> - </button>
        <button onClick={increment}> + </button>
      </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));


// action > POJO
// { 
//   type: 'INCREMENT',
//   payload: 1
// }