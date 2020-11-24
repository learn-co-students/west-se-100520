const baseURL = "http://localhost:3000/api/v1/animals"

const getAnimals = () => get(baseURL)

const createAnimal = (body) => post(baseURL, body)

const updateAnimal = (id, body) => patch(baseURL, id, body)

const get = url => fetch(url).then(res => res.json())

const post = (url, body) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then(res => res.json())
}

const patch = (url, id, body) => {
    return fetch(url + `/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    // .then(res => console.dir(res))
}

// function createAnimal(body) {
//     return post(baseURL, body)
// }

document.addEventListener("DOMContentLoaded", () => {
    const tbody = document.querySelector('tbody')
    const form = document.querySelector('form')
    const errorContainer = document.querySelector('#error-container')
    const errorMsg = document.querySelector('#error-msg')

    const addAnimalToDom = (animalObj) => {
        const animal = new Animal(animalObj)
        tbody.innerHTML += animal.render()
    }

    const addErrorToDom = (aObj) => {
        errorContainer.classList.remove('hidden', 'transition')
        errorMsg.innerHTML = `<div class="header">
                ${aObj.error}
            </div>`
    }

    getAnimals().then(json => {
        json.forEach(aObj => addAnimalToDom(aObj))
    })
    
    const handleSubmission = (e) => {
        e.preventDefault()
        console.dir(e)
        errorContainer.classList.add('hidden')
        const body = {}
        const inputs = form.querySelectorAll("input")
        inputs.forEach(input =>{
            body[input.name] = input.value
        })
        createAnimal(body).then(aObj => {
            if (aObj.error) {
                addErrorToDom(aObj)
            } else {
                addAnimalToDom(aObj)
            }
        })
        form.reset()
    }

    const handleUpdate = (e) => {
        const id = e.target.dataset.id
        console.log("name", e.target.innerText)
        const body = { name: e.target.innerText }
        updateAnimal(id, body)
    }
    
    form.addEventListener('submit', handleSubmission)
    tbody.addEventListener('focusout', handleUpdate)
})