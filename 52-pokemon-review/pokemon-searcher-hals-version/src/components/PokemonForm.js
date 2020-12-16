import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  state = {
    name: '',
    hp: '',
    frontUrl: '',
    backUrl: ''
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  renderInputs = () => {
    return ["name", "hp", "frontUrl", "backUrl"].map(title => {
      return (
        <Form.Input
          fluid label={title}
          placeholder={title}
          name={title}
          value={this.state[`${title}`]}
          onChange={this.handleChange}
        />
      )
    })
  }
  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={(e) => this.props.submitNew(e, this.state)}>
          <Form.Group widths="equal">
            {this.renderInputs()}
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
