import React from 'react'

export default function Villain(props) {
    
    const handleClick = e => (props.villainCallback(props.v))
    
    return (
        <li>
            {props.v.name}; {props.v.dangerLevel}; {props.v.mo}
            <button onClick={handleClick}>Arrest</button>
        </li>
    )
}
