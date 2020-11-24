(function () {
    // Submitting the form creates a new quote and adds it to the list of quotes without having to refresh the page. Pessimistic rendering is reccommended.
    const quoteList = document.getElementById("quote-list")
    const quoteForm = document.getElementById("new-quote-form")

    quoteForm.addEventListener('submit', submitNewQuote)


    function getQuotes() {
        quoteList.innerHTML = ''
        fetch("http://localhost:3000/quotes?_embed=likes")
            .then(res => res.json())
            .then(data => buildAllQuotes(data))
    }

    function buildAllQuotes(data) {
        for (quote of data) {
            buildSingleQuote(quote)
        }
    }

    function buildSingleQuote(data) {
        // build all elements with createElement
        // OR build it like Lantz with a big string

        const li = document.createElement('li')
        li.className = 'quote-card'

        li.innerHTML =
            `<blockquote class="blockquote">
                <p class="mb-0">${data.quote}</p>
                <footer class="blockquote-footer">${data.author}</footer>
                <br>
                <button class='btn-success'>Likes: <span>${data.likes.length}</span></button>
                <button class='btn-danger'>Delete</button>
            </blockquote>
            `
        quoteList.prepend(li)

        const deleteButton = li.querySelector('.btn-danger')
        deleteButton.addEventListener('click', () => deleteQuote(data.id))
    }

    function submitNewQuote(ev) {
        ev.preventDefault()
        // need to make a POST
        const quote = document.getElementById('new-quote').value
        const author = document.getElementById('new-author').value

        const body = { author, quote }

        // const quote = ev.target.quote.value
        // const author = ev.target.aardvark.value

        fetch("http://localhost:3000/quotes", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(getQuotes)
    }

    function deleteQuote(quoteId) {
        console.log(quoteId)
        fetch("http://localhost:3000/quotes" + '/' + quoteId, { 
            method: "DELETE" 
        }).then(res=>res.json())
        .catch(errors=>alert('error'))
        .then(getQuotes)
    }


    getQuotes()
})()
