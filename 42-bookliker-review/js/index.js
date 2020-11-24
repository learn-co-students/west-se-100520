const baseURL = 'http://localhost:3000/books'
const userID = 1
// userID above can be used to set a mock currentUser; for these specs, defaults to 1

document.addEventListener("DOMContentLoaded", function() {

    const list = document.querySelector("#list")
    const show = document.querySelector('#show-panel')

    function showBook(e){
        getBook(e).then(book => {
            const container = `<div>
                <img src="${book.img_url}" alt="cover of ${book.title}">
                <h1>${book.title}</h1>
                <h2>${book.author}</h2>
                <p>${book.description}</p>
                <ul>
                ${book.users.map(user => `<li>${user.username}</li>`).join('')}   
                </ul>
            </div>`
            const button = document.createElement('button')
            if (book.users.some(user => user.id === userID)){
                button.innerText = 'UNLIKE'
            } else {
                button.innerText = "LIKE"
            }
            button.dataset.bookId = book.id
            // button.setAttribute('name', 'aardvark')
            show.innerHTML = container
            show.appendChild(button)
        })
    }

    function getBook(e){
        return fetch(baseURL + `/${e.target.dataset.bookId}`)
                .then(res => res.json())
    }

    function listBooks(books){
        books.forEach(book => {
            const item = document.createElement('li')
            item.dataset.bookId = book.id
            item.textContent = book.title
            item.addEventListener('click', showBook)
            list.appendChild(item)
        });
    }

    function getBooks(){
        fetch(baseURL)
            .then(res => res.json())
            .then(books => listBooks(books))
    }

    function changeLikes(e, id, body){
        fetch(baseURL + `/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(() => showBook(e))
    }

    function getUser(id){
        return fetch(`http://localhost:3000/users/${id}`)
        .then(res => res.json())
    }

    getBooks()

    function handleClick(e){
        console.dir(e)
        if(e.target.tagName=="BUTTON"){
            const id = e.target.dataset.bookId
            if(e.target.innerText == 'LIKE'){
                getUser(userID).then(user => {

                    getBook(e).then(book => {
                        const users = book.users
                        // refactor to fetch user from db
                        const body = { users: [...users, user]}
                        changeLikes(e, id, body)
                    })
                })
                
            } else {
                getUser(userID).then(user => {

                    getBook(e).then(book => {
                        const users = book.users.filter(user => user.id != userID)
                        // refactor to fetch user from db
                        const body = { users: [...users]}
                        changeLikes(e, id, body)
                    })
                })
            }

        }
    }

    show.addEventListener('click', handleClick)

});
