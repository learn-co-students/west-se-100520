import React from 'react'

// {
//     name: 'Babe',
//     specialty: 'Being incredibly cute',
//     greased: false,
//     weight: 2.0,
//     'highest medal achieved': 'bronze'
//   }

export default function HogDetails({ chosenHog, closeHog }) {
    // let chosenHog = props.chosenHog
    const { name, weight, specialty, greased, 'highest medal achieved': medal} = chosenHog
    return (
        <div>
            <h3>{name}</h3>
            <ul>
                <li>{weight}</li>
                <li>{specialty}</li>
                <li>{greased ? 'GREASY PIG' : 'Squeaky clean pig'}</li>
                <li>{medal}</li>
            </ul>
            <button onClick={closeHog}>Close</button>
        </div>
    )
}
