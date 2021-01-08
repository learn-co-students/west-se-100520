import React from 'react'
import Form from './Form'
import { connect } from 'react-redux'
import {addMoriartyLocation} from '../actions/moriartyLocation'
import {addVillain} from '../actions/villains'

function Sherlock(props) {

    const handleAddVillain = ([name, dangerLevel, mo]) => {
        // props.addNewVillain({name, dangerLevel, mo})
        props.addVillain({name, dangerLevel, mo})
    }
    const handleAddMoriarty = ([location, time]) => {
        // props.addNewMoriartyLocation({location, time})
        props.addMoriartyLocation({location, time})
    }
    return (
        <div>
            <h1>Sherlock</h1>
            <h3>Villains</h3>
            <Form
                inputs={['Name', 'Danger Level', 'M.O']}
                submitCallback={handleAddVillain}
                submitValue={'Add Villain'}
            />
            <h3>Moriarty Spottings</h3>
                <Form 
                    inputs={['Location', 'Time']}
                    submitCallback={handleAddMoriarty}
                    submitValue={'Add Spotting'}
                />
        </div>
    )
}

// 2 ways of using mapDispatchToProps: pass an object directly to dispatch, as in addNewVillain,
// or using an action creator function to return the properly formatted action object, as in addNewMoriartyLocation

// const mapDispatchToProps = (dispatch) => ({
//     addNewVillain: info => dispatch({type: 'ADD_VILLAIN', payload: info}),
//     addNewMoriartyLocation: info => dispatch(addMoriartyLocation(info))
// })

// when using the syntax below, the connect() function automatically binds dispatch() to the action creators
const mapDispatchToProps = {
    addVillain,
    addMoriartyLocation
}

// export default connect(null, mapDispatchToProps)(Sherlock)
export default connect(null, {addMoriartyLocation, addVillain})(Sherlock)
