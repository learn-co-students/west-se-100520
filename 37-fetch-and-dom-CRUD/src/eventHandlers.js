// function handleSearchInput(event, allPokemonData, pokemonContainer) {
//   const filteredPokes = allPokemonData.filter(pokeObj => {
//     return pokeObj.name.includes(event.target.value.toLowerCase())
//   })
//   const filteredPokeHTML = renderAllPokemon(filteredPokes)
//   pokemonContainer.innerHTML = filteredPokeHTML ? filteredPokeHTML : `<p><center>There are no Pokémon here</center></p>`
// }


// function handleImgClick(event, allPokemonData) {
//   if (event.target.dataset.action === 'flip') {
//     const clickedPokemon = allPokemonData.find((pokemonObject) => pokemonObject.id == event.target.dataset.id)
//     event.target.src = (event.target.src === clickedPokemon.sprites.front ? clickedPokemon.sprites.back : clickedPokemon.sprites.front)
//   }
// }

/************************* Helper Fns for Producing HTML **********************/
function renderAllPokemon(pokemonArray) {
  return pokemonArray.map(renderSinglePokemon).join('')
}

function renderSinglePokemon(pokemon) {
  return (`
  <div class="pokemon-card">
    <div class="pokemon-frame">
      <h1 class="center-text">${pokemon.name}</h1>
      <div class="pokemon-image">
        <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
      </div>
      <button data-action="delete" class="pokemon-delete-button">Delete</button><br>
      <form class="pokemon-update"><input type="text"><input type="submit"></form>
    </div>
  </div>`)
}
