import React, { Component } from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import { createStore } from 'redux';

const initialState = { 
    count: 0
};

const reducer = (oldState=initialState, action) => {
    console.log('oldState: ', oldState, 'action: ', action)
    switch (action.type) {
        case 'INCREMENT':
            return {...oldState, count: oldState.count + 1}
        case 'DECREMENT':
            return {...oldState, count: oldState.count - action.payload}
        case 'DECREMENT_BY_5':
            return {...oldState, count: oldState.count - action.payload}
        case 'INCREMENT_BY_3':
            return {...oldState, count: oldState.count + action.payload}
        default:
            return oldState
    }
}

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

class App extends Component {
    
    componentDidMount() {
        store.subscribe(() => this.forceUpdate())
    }
    // increment = () => {
    //   this.setState(prevState => ({ count: prevState.count + 1 }));
    // };
  
    // decrement = () => {
    //   this.setState(prevState => ({ count: prevState.count - 1 }));
    // };
  
    render() {
      return (
        <div className="App">
          <Header />
          <Counter />
        </div>
      );
    }
  }

  export default App