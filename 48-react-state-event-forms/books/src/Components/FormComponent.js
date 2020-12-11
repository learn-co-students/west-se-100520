import React, {Component} from 'react'

class FormComponent extends Component { 
    constructor(props) {
        super(props)
        this.state = {
            fans:[]
        }
      }

      // this event handler connects the form fields to state
      handleChange = (e) => {
          this.setState({...this.state, [e.target.name]: e.target.value})
      }

      // this handler sends state to the callback function passed down from the parent
      handleSubmit = (e) => {
          e.preventDefault()
          this.props.handleAddToBooks(this.state)
      }


    render(){
        // console.log(this.props)
        return(
           <div>
               <form onSubmit={this.handleSubmit}>
                    <label htmlFor='isbn'>ISBN</label>
                    <input onChange={this.handleChange} name='isbn' type='text' />

                    <label htmlFor='title'>title</label>
                    <input onChange={this.handleChange} name='title' type='text' />

                    <label htmlFor='subtitle'>subtitle</label>
                    <input onChange={this.handleChange} name='subtitle' type='text' />

                    <label htmlFor='author'>author</label>
                    <input onChange={this.handleChange} name='author' type='text' />

                    <label htmlFor='published'>published</label>
                    <input onChange={this.handleChange} name='published' type='text' />
                    
                    <label htmlFor='publisher'>publisher</label>
                    <input onChange={this.handleChange} name='publisher' type='text' />

                    <label htmlFor='pages'>pages</label>
                    <input onChange={this.handleChange} name='pages' type='text' />

                    <label htmlFor='description'>description</label>
                    <input onChange={this.handleChange} name='description' type='text' />

                    <label htmlFor='website'>website</label>
                    <input onChange={this.handleChange} name='website' type='text' />

                    <label htmlFor='image'>image</label>
                    <input onChange={this.handleChange} name='image' type='text' />

                    <input name="submit" type="submit" />
               </form>
           </div>
        )
    }

}

export default FormComponent

