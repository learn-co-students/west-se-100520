
const url = 'http://localhost:3000/pokemon'

const pokemonHTML = (pObj) => {
    return (`
    <div class="pokemon-card">
        <div class="pokemon-frame">
            <h1 class="center-text">${pObj.name}</h1>
            <div class="pokemon-image">
                <img data-id="${pObj.id}" data-action="flip" class="toggle-sprite" src="${pObj.sprites.front}">
            </div>
            <button data-action="delete" class="pokemon-button">Delete</button>
        </div>
    </div>`
)}


const pokemonArrHTML = (pArr) => {
    return pArr.map(p => pokemonHTML(p)).join('')
}

const handleSearch = (e, pokemon, container) => {
    const query = e.target.value
    const pokeArr = pokemon.filter( p => p.name.toLowerCase().includes(query) )
    container.innerHTML = pokemonArrHTML(pokeArr)
}

const handleClick = (e, pokemon, container) => {
    switch( e.target.dataset.action ){
        case "flip":
            const id = parseInt(e.target.dataset.id)
            const poke = pokemon.find(p => p.id === id )
            e.target.src = (e.target.src === poke.sprites.front) ? poke.sprites.back : poke.sprites.front
            break
        default:
            
    }
    if (e.target.dataset.action == 'delete') {
        console.log(e.target.parentNode.querySelector(".pokemon-image img").dataset.id)
        const pId = e.target.parentNode.querySelector(".pokemon-image img").dataset.id
        fetch(url + `/${pId}`, {method: "DELETE"})
            .then(() => {
                console.log(`deleted ${pId}`)
                pokemon = pokemon.filter(poke => poke.id != pId)
                container.innerHTML = pokemonArrHTML(pokemon)
            })
    }
}


const handleSubmit = (e, pokemon, container) => {
    e.preventDefault()
    e.stopImmediatePropagation()
    const nameInput = e.target.querySelector('#name-input')
    const urlInput = e.target.querySelector('#sprite-input')
    const name = nameInput.value
    const sprite = urlInput.value
    const id = pokemon[pokemon.length - 1].id + 1
    const method = 'POST'
    const headers = {
        'Content-Type': 'application/json'
    }
    const data = {
        name,
        id, 
        sprites: {
            front: sprite,
            back: sprite
        }
    }

    const body = JSON.stringify(data)
    
    const opt = { method, headers, body }
    
    fetch(url, opt)
        .then(res => {
            if(res.status >= 400){
                throw new TypeError('BAD STATUS CODE!')
            }
            const contentType = res.headers.get('content-type')
            if (!contentType || !contentType.includes('application/json')){
                throw new TypeError("NOT JSON!!!")
            }
            
            return res.json()
        })
        .then(json => {
            pokemon.push(json)
            container.innerHTML = pokemonArrHTML(pokemon)

        })
        .catch(err => { 
            console.log(err)
            container.innerHTML = pokemonArrHTML(pokemon)
        })

    const optimisticHTML = pokemonHTML(data)
    container.innerHTML += optimisticHTML

}