import React from 'react'
import BookCard from './BookCard'

// functional syntax for a component
const BookContainer = (props) => {
    return (
        <div>
            <h2>Book Container</h2>
            <h3>{props.arr}</h3>
            <p>{props.num}</p>
            <BookCard title="Eloquent JS"/>
            <BookCard title="You Don't Know JS"/>
            <BookCard title="My JS Book"/>
            <BookCard title="Eloquent JS"/>
        </div>
    )
}

// the same component as a class:

// class BookContainer extends React.Component {
//     render(){
//         return (
//             <div>
//                 <h2>Book Container</h2>
//                 <h3>{this.props.arr}</h3>
//                 <p>{this.props.num}</p>
//                 <BookCard properties={props} title="Eloquent JS"/>
//                 <BookCard title="You Don't Know JS"/>
//                 <BookCard title="My JS Book"/>
//                 <BookCard title="Eloquent JS"/>
//             </div>
//         )
//     }
// }

export default BookContainer
