document.addEventListener("DOMContentLoaded", function(){

    // const firstButton = document.querySelector("button")

    // firstButton.addEventListener("click", log_text)

    // function log_text(event){
    //      console.log(event.target.innerText)
    // }

    const textElements = document.querySelectorAll("text")

    for(let ele of textElements){
        console.log(ele)
        ele.addEventListener("click", (event) => alert(event.target.innerText)
        )}

    const buttons = document.querySelectorAll("button")

    for(let btn of buttons){
        btn.addEventListener("click", (event) => event.target.parentNode.remove())
    }
})


