import React from 'react'

class BookCard extends React.Component {

    render(){
        return(
           <div>
               <h2> title: {this.props.title}</h2>
               <h2> author: {this.props.author}</h2>
               <img src={this.props.img} style={{width:"100px"}} alt={this.props.title}></img>
                <br/>
                <button> read 0 </button> 
            </div> 
        )
    }
}

export default BookCard