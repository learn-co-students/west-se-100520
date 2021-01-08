import React from 'react'
import {connect} from 'react-redux'
import Villain from './Villain'
import { arrestVillain } from '../actions/villains'

function Mycroft(props) {

    const renderVillains = () => {
        return props.villains.map(v => (
            <Villain v={v} key={v.name} villainCallback={handleArrestVillain}/>
        ))
    }

    const renderMoriartyLocations = () => {
        // console.log(props.moriartyLocations)
        return props.moriartyLocations.map(v => (
            <li>
                {v.location}; {v.time}
            </li>
        ))
    }

    const handleArrestVillain = villain => {
        props.arrestVillain(villain)
    }

    return (
        <>
            <h1>Mycroft</h1>
            <div>
                <h3>Villains List</h3>
                <ul>
                    {renderVillains()}
                </ul>
            </div>
            <div>
            <h3>Moriarty Locations</h3>
            <ul>
                {renderMoriartyLocations()}
            </ul>
        </div>
        </>
    )
}

const mapStateToProps = ({villains, moriartyLocations}) => ({
    villains,
    moriartyLocations
})

export default connect(mapStateToProps, {arrestVillain})(Mycroft)