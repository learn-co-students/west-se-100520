document.addEventListener("DOMContentLoaded", function(){

    const textElements = document.querySelectorAll("text")

    for(let ele of textElements){
        // console.log(ele)
        ele.addEventListener("click", (event) => alert(event.target.innerText)
        )}

    const buttons = document.querySelectorAll("button")

    for(let btn of buttons){
        btn.addEventListener("click", (event) => event.target.parentNode.remove())
    }

    const form = document.querySelector("form")

    form.addEventListener('submit', function(event) {
        event.preventDefault()
       const input = document.querySelector('#noise-input')
       const ul = document.querySelector('ul')
       const text = document.createElement("text")
       text.textContent = input.value + " "
       text.addEventListener("click", (event) => alert(event.target.innerText)
       )
       const button = document.createElement('button')
       button.textContent = "Delete"
       button.addEventListener("click", (event) => event.target.parentNode.remove())
       const li = document.createElement('li')
       li.appendChild(text)
       li.appendChild(button)
       ul.appendChild(li)

       input.value = ""
    })

})
