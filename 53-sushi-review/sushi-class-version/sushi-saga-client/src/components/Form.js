import React from 'react';


export default function Form(props) {
    

    return (
        <form onSubmit={props.addMoney}>
            <label>MORE MONEY (please enter amount) </label>
            <input name='lollapolooza' type='number'></input>
            <button type='submit'>Sumbit</button>
        </form>
    )
}
