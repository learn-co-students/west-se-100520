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
function addPokemon(e){
  e.preventDefault()
  console.dir(e.target)
  const newName = document.querySelector("#name-input").value
  const sprite = document.querySelector("#sprite-input").value
  console.log(sprite)
  const newPoke = {
    name: newName, 
    sprites: {front: sprite}
  }
  fetch(url, {
    method: "POST",
    headers: {
      'Content-Type': "application/json",
      'Accept': 'application/json'
    },
    body: JSON.stringify(newPoke)
  })
  .then(res => res.json())
  .then((newObj) => {
    console.log(newObj)
    document.querySelector("#pokemon-container").innerHTML += renderSinglePokemon(newObj)
  })
}

function removePokemon(pokemon){
  const id = pokemon.querySelector("img").dataset.id
  console.log(pokemon)
  fetch(url + `/${id}`, {method: "DELETE"})
  .then(res => res.json())
  // pessimistic rendering
  //.then(() => fetchAllPokemon())
  // optimistic rendering
  .then(() => {
    // document.querySelector("#pokemon-container").removeChild(pokemon)
    // pokemon.parentNode.removeChild(pokemon)
    pokemon.remove()
  })
}

function updatePokemon(e, pokemon){
  e.preventDefault()
  const id = pokemon.querySelector("img").dataset.id
  console.log("id", id)
  const newName = pokemon.querySelector("input[type='text']").value
  console.log(newName)
  fetch(url + `/${id}`, {
    method: "PATCH",
    headers: {
      'Content-Type': "application/json",
      'Accept': 'application/json'
    },
    body: JSON.stringify({ name: newName})
  })
  .then(fetchAllPokemon)
}

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
