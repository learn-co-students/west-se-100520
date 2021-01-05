import React from 'react';
import {store} from '../App';

const Counter = () => {
    
    const increment = () => {
        store.dispatch({type: 'INCREMENT'})
    }

    const decrement = () => {
        store.dispatch({
            type: 'DECREMENT',
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

  export default Counter