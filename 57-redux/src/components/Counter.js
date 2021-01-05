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
    
    const minusFive = () => {
        store.dispatch({
            type: 'DECREMENT_BY_5',
            payload: 5
        })
    }
    
    const plusThree = () => {
        store.dispatch({
            type: 'INCREMENT_BY_3',
            payload: 3
        })
    }

    return (
    <div className="Counter">
        <h1>{store.getState().count}</h1>
        <button onClick={decrement}> - </button>
        <button onClick={increment}> + </button>
        <br />
        <button onClick={minusFive}> -5 </button>
        <button onClick={plusThree}> +3 </button>

    </div>
    );
  }

  export default Counter