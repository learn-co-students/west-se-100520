

function listener(event){
    switch(event.target.tagName){
        case "TEXT":
            alert(event.target.innerText)
            break
        case "BUTTON":
            event.target.parentNode.remove()
            break
        default:
            console.log("something else was pressed")
    }
}

document.addEventListener("DOMContentLoaded", function(){
    const noiseContainer = document.querySelector('div#noise-container')
    noiseContainer.addEventListener('click', listener)
})

