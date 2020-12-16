import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    renderable: 0
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(res => res.json())
      .then(json => this.setState({ pokemon: json }))
  }

  search = (e) => {
    let newList
    e.target.value.length ?
      newList = this.state.pokemon.filter(x => x.name.includes(e.target.value))
      :
      newList = 0

    this.setState({ renderable: newList })
  }

  submitNew = (e, pokeData) => {
    e.preventDefault()
    const { name, hp, frontUrl, backUrl } = pokeData
    const newMon = {
      name,
      hp,
      sprites: {
        front: frontUrl,
        back: backUrl
      }
    }
    e.target.reset()
    fetch('http://localhost:3000/pokemon', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newMon)
    })
      .then(res => res.json())
      .then(poke => {
        // needs to be added to the list
        this.setState({ pokemon: [poke, ...this.state.pokemon] })
      })
  }

  render() {
    const { pokemon, renderable } = this.state
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm submitNew={this.submitNew} />
        <br />
        <Search search={this.search} />
        <br />
        <PokemonCollection pokemon={renderable ? renderable : pokemon} />
      </Container>
    )
  }
}

export default PokemonPage
