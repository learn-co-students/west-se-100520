import React, { Component } from 'react'

export default class Form extends Component {

    constructor(props){
        super(props)
        this.state = {
            inputs: this.props.inputs.map(i => "")
        }
    }

    handleTextChange = (e, idx) => {
        const newInputs = [...this.state.inputs]
        newInputs[idx] = e.target.value
        this.setState({inputs: newInputs})
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.submitCallback(this.state.inputs)
        this.setState({inputs: this.props.inputs.map(i => "")})
    }

    renderInputs = () => {
        return this.props.inputs.map((inputName, index) => (
            <input 
                type="text"
                onChange={e => this.handleTextChange(e, index)}
                value={this.state.inputs[index]}
                placeholder={inputName}
                key={inputName}
            />
        ))
    }
    render() {
        return (
            <form>
                {this.renderInputs()}
                <button type='submit' onClick={this.handleSubmit} >
                    {this.props.submitValue}
                </button>

            </form>
        )
    }
}
