const DOGSURL = 'http://localhost:3000/dogs'

document.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('table-body')
    const form = document.getElementById('dog-form')

    form.addEventListener('submit', editDog)

    const fetchingAllDogs = () => {
        fetch(DOGSURL)
            .then(res => res.json())
            .then(json => renderDogsToPage(json))

    }

    const renderDogsToPage = (json) => {
        for (dog of json) {
            renderSingleDog(dog)
        }
    }

    function renderSingleDog(dog) {
        let newRow = document.createElement('tr')
        newRow.id = dog.id
        let name = document.createElement('td')
        name.innerText = dog.name
        let breed = document.createElement('td')
        breed.innerText = dog.breed
        let sex = document.createElement('td')
        sex.innerText = dog.sex
        let editArea = document.createElement('td')
        let edit = document.createElement('button')
        edit.innerText = "Edit"
        edit.addEventListener('click', () => editHelper(dog))
        editArea.appendChild(edit)
        newRow.append(name, breed, sex, editArea)
        table.prepend(newRow)
    }

    function editHelper(dog) {
        // populate the form
        form.name.value = dog.name
        form.breed.value = dog.breed
        form.sex.value = dog.sex
        form.dataset.id = dog.id
    }

    function editDog(ev) {
        ev.preventDefault()
        // we need the ID in here. Options: 
        // 1. set a global var for which dog has been selected. Would work, bad practice tho.
        // 2. add an event listener to the form inside of edit helper, passing the proper dog ID to the function therin. We would also need to remove the event listener at the beginning of the editHelper (in case this is the second or more time edit was clicked). A lot of work...
        // 3. add the dog's ID to the form's dataset inside of the edit helper. This one seems easiest!

        let postData = { name: form.name.value, breed: form.breed.value, sex: form.sex.value }

        // clear the form
        ev.target.reset()

        const configObject = {
            method: "PATCH",
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify(postData)
        }

        fetch(`${DOGSURL}/${form.dataset.id}`, configObject)
            .then(res => res.json())
            .then(json => {
                // remove old row
                let oldRow = document.getElementById(json.id)
                oldRow.parentElement.removeChild(oldRow)
                // add new row
                renderSingleDog(json)
            })
            .catch(errors => {
                console.log(errors)
                alert("That didn't work.")
            })

        // The lab itself suggests making a new fetch for all the dogs after a successful patch has come through. Personally, I think that's super cost expensive when we already have the one updated dog's information. But, because the lab recommended it, below you will find what that would look like:

        // fetch(`${DOGSURL}/${form.dataset.id}`, configObject)
        //     .then(res => res.json())
        //     .then(json => {
        //         // clear out the table
        //         table.innerText = ''
        //         // re-fetch all dogs
        //         fetchingAllDogs()
        //     })
        //     .catch(errors => {
        //         console.log(errors)
        //         alert("That didn't work.")
        //     })

    }

    fetchingAllDogs()

})