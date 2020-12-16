import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    input: "",
    displayableOnes: []
  }

  componentDidMount() {
    console.log("MOUNTINGINGINGINGIN")
    fetch('http://localhost:3000/pokemon')
      .then(res => res.json())
      .then(data => {
        this.setState({ pokemon: data, displayableOnes: data })
      })
  }

  handleSearch = (ev) => {
    // with the user's seach term (ev.target.value), we need to iterate through all pokemon, and filter out just the ones whose names include the search term

    let newPokes = this.filterThruPokemon(ev.target.value)
    // get a list of just the pokemon that match our search term and set it to displayableOnes
    this.setState({ input: ev.target.value, displayableOnes: newPokes })
  }

  filterThruPokemon = (term) => {
    return this.state.pokemon.filter((poke) => {
      return poke.name.includes(term)
    })
  }

  handleFormSubmisson = (target) => {
    const { name, hp, frontUrl, backUrl } = target

    let newPokemon = {
      name: name.value,
      hp: hp.value,
      sprites: {
        front: frontUrl.value,
        back: backUrl.value
      }
    }

    fetch('http://localhost:3000/pokemon', {
      method: "POST",
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      },
      body: JSON.stringify(newPokemon)
    })
      .then(res => res.json())
      .then(data => {
        // response should be an instance of a pokemon, which needs to be added to our frontend data (in state)
        this.setState((prevState)=>{
          return {displayableOnes: [data, ...prevState.displayableOnes], pokemon: [data, ...prevState.pokemon]}
        })
      // this.setState({displayableOnes: [data, ...this.state.displayableOnes]})
      // spread it in both states, says inee
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm hanukkah={this.handleFormSubmisson} />
        <br />
        <Search christmas={this.handleSearch} />
        <br />
        <PokemonCollection pokemon={this.state.displayableOnes} />
      </Container>
    )
  }
}

export default PokemonPage
