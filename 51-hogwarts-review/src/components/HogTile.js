// import React from 'react'

// {
//     name: 'Babe',
//     specialty: 'Being incredibly cute',
//     greased: false,
//     weight: 2.0,
//     'highest medal achieved': 'bronze'
//   }
// ./hog-imgs/galaxy_note.jpg (Image example)
// 'Truffle Shuffle'

// let pigImage = require('../hog-imgs/piggy_smalls.jpg')

// export default function HogTile({ hog, chooseHog }) {
//     const { name } = hog
//     // const name = props.hog.name
//     const filename = name.toLowerCase().split(' ').join('_')
//     const pigImage = require(`../hog-imgs/${filename}.jpg`)

//     return (
//         <div className="ui eight wide column pigTile" onClick={() => chooseHog(name)}>
//             <img src={pigImage} alt="cute pig" />
//             <h3>{name}</h3>
//         </div>
//     )
// }

import React, { Component } from 'react'

export default class HogTile extends Component {

    constructor(props){
        super(props)
        this.state = {
            show: true
        }
    }

    handleClick = () => {
        this.props.selectHog(this.props.hog.name)
    }
    handleHide = () => {
        this.setState({show: false})
    }

    render() {
        const { name } = this.props.hog
        const filename = name.toLowerCase().split(' ').join('_');
        const pigImage = require(`../hog-imgs/${filename}.jpg`);


        return (
            <div className='ui eight wide column pigTile' style={this.state.show ? {}: {display: 'none'}} >
                      <img src={pigImage} alt="Pig" onClick={this.handleClick}/>
                        <h3>{name}</h3>
                        <button onClick={this.handleHide}>X</button>
            </div>
        )
    }
}
