{/* 
<td>
    <td>Dog *Name*</td> 
    <td>*Dog Breed*</td> 
    <td>*Dog Sex*</td> 
    <td><button>Edit</button></td>
</tr> */}


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('dog-form')
    form.addEventListener('submit', (e) => handleSubmitForm(e))


    function getDogs() {
        fetch('http://localhost:3000/dogs')
            .then(res => res.json())
            .then(dogs => dogs.forEach(dog => buildDogList(dog)))
    }

    getDogs()

    function buildDogList(dog) {
        // add a row to the table, which holds this particular dog's info
        const table = document.getElementById('table-body')

        const tr = document.createElement('tr')

        const name = document.createElement('td')
        name.innerText = dog.name

        const breed = document.createElement('td')
        breed.innerText = dog.breed

        const sex = document.createElement('td')
        sex.innerText = dog.sex

        const buttonWrapper = document.createElement('td')
        const button = document.createElement('button')
        button.innerText = "Steve"
        // event listners require a REFERENCE TO A FUNCTION, not a function call. populateForm()
        button.addEventListener("click", () => populateForm(dog))
        buttonWrapper.appendChild(button)

        tr.append(name, breed, sex, buttonWrapper)
        table.appendChild(tr)
    }

    function populateForm(dog) {
        // populate form
        form.name.value = dog.name
        form.breed.value = dog.breed
        form.sex.value = dog.sex
        form.dataset.id = dog.id
    }

    function handleSubmitForm(e) {
        // On submit of the form, a PATCH request should be made to http://localhost:3000/dogs/:id to update the dog information (including name, breed and sex attributes).
        e.preventDefault()
        const dogId = e.target.dataset.id

        // optimistic: rendering to the page with the assumption that your request WILL work.


        fetch(`http://localhost:3000/dogs/${dogId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                "name":e.target.name.value,
                "breed": e.target.breed.value,
                "sex": e.target.sex.value,
            })
        })
        .then(res=>res.json())
        .then(data=>{
            // pessimistic: render feedback to user AFTER your server has confirmed the request worked.
            // 1. delete old row, create new row
                // => give each row an ID as we build it, so we can grab it
            
        })
        .catch(errors=>{
            alert("nope")
        })

    }
})
