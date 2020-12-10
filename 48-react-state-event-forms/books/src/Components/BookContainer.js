import React from 'react'
import BookCard from './BookCard'

const BookContainer = (props) => {
    console.log(props)
    return (
        <div>
            <h1> JavaScript Books </h1>
            <BookCard title="Eloquent JavaScript" author="Marijn Haverbeke" img="https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX376_BO1,204,203,200_.jpg" />
            <BookCard title="Learning JavaScript Design Patterns" author="Addy Osmani" img="https://images-na.ssl-images-amazon.com/images/I/917iQZBR91L.jpg" />
            <BookCard title="Speaking JavaScript" author="Axel Rauschmayer" img="http://speakingjs.com/es5/orm_front_cover.jpg" />
            
        </div>
    )


}

export default BookContainer