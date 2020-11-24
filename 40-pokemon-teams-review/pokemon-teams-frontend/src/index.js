const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

const appContainer = document.querySelector('main')

function getTrainers(){
    fetch(TRAINERS_URL)
        .then((res) => res.json())
        .then(trainers => showTrainers(trainers))
}

function showTrainers(trainers){
    trainers.forEach((trainer) => {
        const trainerCard = document.createElement('div')
        trainerCard.setAttribute('class', 'card')
        trainerCard.dataset.id = trainer.id
        trainerCard.innerHTML = renderCard(trainer)
        trainerCard.addEventListener('click', (e)=> {handleButton(e, trainer)})
        appContainer.append(trainerCard)
    })
}

function renderCard(trainer) {
    return `<p>${trainer.name}</p>
    <button data-trainer-id="${trainer.id}">Add Pokemon</button>
    <ul>
        ${trainer.pokemons.map(pokemon => {
            return `<li>${pokemon.nickname} (${pokemon.species}) <button class="release" data-pokemon-id="${pokemon.id}">Release</button></li>`
        }).join('')}
    </ul>
    `
}

getTrainers()

function createPokemon(trainerId){
    console.log("trainerID", trainerId)
    fetch(POKEMONS_URL, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({'trainer_id': trainerId})
    })
        .then(res => res.json())
        .then(pokemon => {
            if(!pokemon.error){
                const trainerCard = document.querySelector(`div[data-id="${pokemon.trainer_id}"]`)
                const list = trainerCard.querySelector('ul')
                list.innerHTML += `<li>${pokemon.nickname} (${pokemon.species}) <button class="release" data-pokemon-id="${pokemon.id}">Release</button></li>`
            }
        })
}

function releasePokemon(pokemonId) {
    fetch(POKEMONS_URL + `/${pokemonId}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
}


function handleButton(event, trainer){
    console.dir(trainer)
    if (event.target.tagName === "BUTTON") {
        console.log("a button was clicked")
        switch(event.target.innerText){
            case 'Add Pokemon':
                console.log("add a pokemon")
                createPokemon(event.target.dataset.trainerId)
                break;
            case 'Release':
                console.log('relase a pokemon')
                event.target.parentNode.remove()
                releasePokemon(event.target.dataset.pokemonId)
                break;
            default:
                console.log("a non-button was clicked")
        }
    }
}