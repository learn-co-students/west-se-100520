import React from 'react'

// class components inherit functions that aren't available on a functional component

class BookCard extends React.Component {
    render(){
        // console.log(this)
        return (
            <div>
                <h2> title: {this.props.title} </h2>
                <h3> author: </h3>

            </div>
        )
    }
}

export default BookCard