import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    const pokecards = this.props.pokemon.map(poke=>(<PokemonCard pokemon={poke} key={poke.id}/>))
    return (
      <Card.Group itemsPerRow={6}>
      {pokecards}
      </Card.Group>
    )
  }
}

export default PokemonCollection
