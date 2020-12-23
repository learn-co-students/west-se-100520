import React from 'react';
class Form extends React.Component {
    state = {
        username: "",
        password: ""
      }
    
      handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleSubmit(this.state)
      }
    
      handleChange = (e) => {
        let {name, value} = e.target
        this.setState({
          [name]: value
        })
      }

render(){
  return (
 
        <form onSubmit={this.handleSubmit}>
        <h1>{this.props.name}</h1>
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
        <input type="submit" value="Submit"/>
         </form>
        )
    }
}

export default Form;
