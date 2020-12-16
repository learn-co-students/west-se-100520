import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    front: true
  }

  handleClick = () => {
    this.setState((prevState)=>{
      return {front: !prevState.front}
    })
  }

  render() {
    const { id, name, hp, sprites } = this.props.pokemon
    return (
      <Card id={id}>
        <div>
          <div className="image" onClick={this.handleClick}>
            <img alt={name} src={this.state.front ? sprites.front : sprites.back} />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
