
document.addEventListener("DOMContentLoaded", () => {
  let addToy = false;
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  const toyDiv = document.getElementById("toy-collection")
  const form = document.getElementsByClassName('add-toy-form')[0]
  // alternatively, we can grab it with query selector like below
  // const form = document.querySelector('add-toy-form')
  const URL = 'http://localhost:3000/toys'

  toyDiv.addEventListener('click', addLike)
  form.addEventListener('submit', addNewToy)

  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

  fetch(URL)
    .then(response => {
      return response.json()
    })
    .then(jsonStuff => populatePage(jsonStuff))

  function populatePage(toys) {
    toys.forEach(toy => {
      createSingleToyElement(toy)
    })
  }

  function createSingleToyElement(toy) {
    let newDiv = document.createElement('div')
    newDiv.className = 'card'

    let h2 = document.createElement('h2')
    h2.innerText = toy.name

    let img = document.createElement('img')
    img.src = toy.image
    img.className = 'toy-avatar'

    let p = document.createElement('p')
    p.dataset.likes = toy.likes
    p.innerText = `${toy.likes} dislikes`

    let button = document.createElement('button')
    button.className = 'like-btn'
    button.innerText = 'elimiate'
    button.id = toy.id

    // the function below adds a new event listener to each toy's button to 
    // update the likes individually. we have replaced this functionality 
    // wth "Event Delegation", by adding one big event listener on line 12.
    // button.addEventListener('click', (e)=> {
    //   let newLikes = toy.likes + 1
    //   const configObject = {
    //     method: "PATCH",
    //     headers: {
    //       "Content-Type": 'application/json',
    //       "Accept": 'application/json'
    //     },
    //     body: JSON.stringify({
    //       "likes": newLikes
    //     })
    //   }

    //   fetch(URL+'/'+toy.id, configObject)
    //   .then(response => response.json())
    //   .then(jsonStuff=> p.innerText = `${++toy.likes} LOVES`)
    // })

    newDiv.append(h2, img, p, button)
    toyDiv.prepend(newDiv)
  }

  function addNewToy(ev) {
    ev.preventDefault()
    // the object below is what the data looks like in our database
    // {
    //   "id": 1,
    //   "name": "Woody",
    //   "image": "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png",
    //   "likes": 5
    // }
    // we could put the post data in its own object 
    // let postData = JSON.stringify({ name: ev.target.name.value, image: ev.target.image.value, likes: 0 })

    const configObject = {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      },
      body: JSON.stringify({
        name: ev.target.name.value,
        image: ev.target.image.value,
        likes: 0
      })
    }

    fetch(URL, configObject)
      .then(response => response.json())
      .then(jsonStuff => createSingleToyElement(jsonStuff))
  }

  function addLike(ev) {
    if (ev.target.className != 'like-btn') { return }

    let pTag = ev.target.previousElementSibling
    let newLikes = parseInt(pTag.dataset.likes) + 1

    const configObject = {
      method: "PATCH",
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      },
      body: JSON.stringify({
        "likes": newLikes
      })
    }
    // where to get the toy id? It's on the button ID!

    fetch(URL + '/' + ev.target.id, configObject)
      .then(response => response.json())
      .then(jsonStuff => {
        pTag.textContent = `${newLikes} dislikes`
        ++pTag.dataset.likes
      })

  }

});
