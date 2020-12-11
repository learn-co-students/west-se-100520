import React, {Component} from 'react'
import books from '../data/data'
import BookCard from './BookCard'
import FormComponent from './FormComponent'

class BookContainer extends Component {
    
    state = {
        books: [...books],
        totalRead: 0
    }

    renderBooks = () => {
        return this.state.books.map(book => <BookCard 
            key={book.isbn}
            title={book.title}
            author={book.author}
            img={book.image}
            addToTotal={this.addToTotal}
            />)
    }

    // a callback function to pass to the BookCard component through props
    // will register click events that happen on the child component and update state on this component
    addToTotal = () => {
        console.log("increase total")
        this.setState((prevState)=>{
            return {
                totalRead: prevState.totalRead + 1
            }
        })
    }
    // a callback function to pass to the FormComponent
    // this allows the state of FormComponent to be passed up to BookContainer
    handleAddToBooks = (book) => {
        console.log(book)
        this.setState((oldState) => {
            // oldState.books.push(book)
            return {
                // books: oldState.books
                books: [...oldState.books, book]
            }
        })
    }

    render(){
        return (
            <div>
                <h1> JavaScript Books </h1>
                 <h4>Total Read: {this.state.totalRead}</h4>
                 <FormComponent handleAddToBooks={this.handleAddToBooks}/>
                {this.renderBooks()}
            </div>
        )
    }


}

export default BookContainer