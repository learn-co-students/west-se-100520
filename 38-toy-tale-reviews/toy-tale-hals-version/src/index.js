(function () {
  let addToy = false;
  const TOYSURL = 'http://localhost:3000/toys'
  const toyCollection = document.getElementById('toy-collection')
  const form = document.querySelector('form')

  form.addEventListener("submit", createNewToy)

  document.addEventListener("DOMContentLoaded", () => {
    // premade from the lab
    const addBtn = document.querySelector("#new-toy-btn");
    const toyFormContainer = document.querySelector(".container");
    addBtn.addEventListener("click", () => {
      // hide & seek with the form
      addToy = !addToy;
      if (addToy) {
        toyFormContainer.style.display = "block";
      } else {
        toyFormContainer.style.display = "none";
      }
    });
  });
  // end premade content

  fetch(TOYSURL)
    .then(res => res.json())
    .then(json => {
      addToysToPage(json)
    })
  function addToysToPage(json) {
    for (toy of json) {
      addSingleToy(toy)
    }
  }
  function addSingleToy(toy) {
    let div = document.createElement('div')
    div.className = "card"
    let h2 = document.createElement('h2')
    h2.innerText = toy.name

    let img = document.createElement('img')
    img.src = toy.image
    img.className = "toy-avatar"

    let p = document.createElement('p')
    p.innerText = `${toy.likes} likes`
    p.id = `${toy.id} likes`

    let button = document.createElement('button')
    button.class = 'like-btn'
    button.innerText = "like <3"
    button.addEventListener('click', ()=>addLike(toy.id))
    
    div.appendChild(h2)
    div.appendChild(img)
    div.appendChild(p)
    div.appendChild(button)
    toyCollection.prepend(div)
  }

  function createNewToy(ev){
    ev.preventDefault()
    // destructuring instead?
    let postData = {"name": ev.target.name.value, "image": ev.target.image.value, "likes": 1}
    ev.target.reset()
    fetch(TOYSURL, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(postData)
    })
    .then(res=>res.json())
    .then(json=> addSingleToy(json))
    .catch(errors=>{
      console.log(errors)
      alert("what? didn't work")
    })
  }

  function addLike(id){
    let likesDiv=document.getElementById(`${id} likes`)

    let newLikes = parseInt(likesDiv.innerText)+1

    fetch(`${TOYSURL}/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({likes: newLikes})
    })
    .then(res=>{
      console.log(res)
      return res.json()
    })
    .then(json=> likesDiv.innerText = `${json.likes} likes`)
    .catch(errors=>{
      console.log(errors)
      alert("oop. couldn't save that like")
    })
  }

})()


