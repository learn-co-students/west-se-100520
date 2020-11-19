const url = "http://localhost:3000/pokemon"

document.addEventListener('DOMContentLoaded', () => {
  const addForm = document.querySelector("#pokemon-post-form")
  addForm.addEventListener('submit', addPokemon)
  fetchAllPokemon()
})

function fetchAllPokemon() {
  fetch(url)
    .then((response) => response.json())
    .then((jsonData) => {
      console.log(jsonData)
      const container = document.querySelector('#pokemon-container')
      container.innerHTML = renderAllPokemon(jsonData)
      addPokemonListener()
    })
}

function addPokemonListener(){
  const pokemons = document.querySelectorAll('.pokemon-card')
  pokemons.forEach((pokemon) => {
    pokemon.querySelector(".pokemon-delete-button").addEventListener('click', () => {
      removePokemon(pokemon)
    })
    pokemon.querySelector(".pokemon-update").addEventListener('submit', (event) => updatePokemon(event, pokemon))
  })
}