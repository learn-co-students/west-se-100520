import React, { Component } from 'react'
import { CATEGORIES } from '../data'

export default class Form extends Component {

    state = {
        text: "",
        category: "Code"
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addTask(this.state)
        e.target.reset()
    }

    render() {
        return (
            <form className='new-task-form' onSubmit={this.handleSubmit}>
                <input type='text' name='text' placeholder='New task details' onChange={this.handleChange}></input>
                <select name='category' onChange={this.handleChange}>
                    {CATEGORIES.map(cat => {
                        if (cat !== 'All') {
                            return <option key={cat} value={cat}>{cat}</option>
                        }
                        return null
                    })}
                </select>
                <input type="submit" value="Add task"></input>
            </form>
        )
    }
}
