(function () {
    let interval;
    const pause = document.getElementById("pause")
    const plus = document.getElementById("plus")
    const minus = document.getElementById("minus")
    const heart = document.getElementById("heart")
    const likes = document.getElementsByClassName("likes")[0]
    const buttons = document.getElementsByTagName("button")
    const commentForm = document.getElementById("comment-form")

    pause.addEventListener("click", pauseWorker)
    plus.addEventListener("click", () => manualChange(true))
    minus.addEventListener("click", () => manualChange(false))
    heart.addEventListener("click", likerListener)
    commentForm.addEventListener("submit", submitComment)



    function startTimer() {
        interval = setInterval(function () {
            const counter = document.getElementById('counter')
            const newTime = parseInt(counter.innerText) + 1;
            counter.innerText = newTime
        }, 1000)
    }

    function pauseWorker() {
        if (interval) {
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].id != 'pause' ? buttons[i].disabled = true : buttons[i].innerText = "resume"
            }
            clearInterval(interval)
            interval = false
        }
        else {
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].id != 'pause' ? buttons[i].disabled = false : buttons[i].innerText = "pause"
            }
            startTimer()
        }
    }


    function manualChange(isPlus) {
        const counter = document.getElementById('counter')
        let num;
        if (isPlus) {
            num = parseInt(counter.innerText) + 1;
        }
        else {
            num = parseInt(counter.innerText) - 1;
        }
        counter.innerText = num
    }



    function likerListener() {
        const counter = parseInt(document.getElementById('counter').innerText)
        const likedLi = document.getElementById(counter)
        // if the li with this ID already exists, increase its liked number
        if (likedLi) {
            let newNum = parseInt(likedLi.innerText) + 1
            likedLi.innerText = `${newNum} likes for ${counter}`
        }
        // otherwise, create an li with this number as an ID and give it number 1
        else {
            let newLi = document.createElement('li')
            newLi.id = counter
            newLi.innerText = `1 like for ${counter}`
            likes.appendChild(newLi)
        }
    }

    function submitComment(event){
        // adds a comment to
        event.preventDefault()
        const theComment = document.createElement('p')
        theComment.innerText = event.target.comment.value
        const list = document.getElementById("list")
        commentForm.reset()
        list.appendChild(theComment)
    }
    
    startTimer()
})()
