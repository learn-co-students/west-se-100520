const baseURL = 'http://localhost:3000/books'
const userID = 1
// userID above can be used to set a mock currentUser; for these specs, defaults to 1

document.addEventListener("DOMContentLoaded", function() {
    
    // set references to DOM Nodes where we'll be injecting our own elements
    const list = document.querySelector("#list")
    const show = document.querySelector('#show-panel')

    // register event listener on above as needed
    show.addEventListener('click', handleLike)
    
    
    // fetches all books
    function getBooks(){
        fetch(baseURL)
            .then(res => res.json())
            .then(books => listBooks(books))
    }
     
    // creates <li></li> for each book and adds to DOM
    function listBooks(books){
        books.forEach(book => {
            const item = document.createElement('li')
            item.dataset.bookId = book.id
            item.textContent = book.title
            item.addEventListener('click', showBook)
            list.appendChild(item)
        });
    }

    // renders book detail in show-panel
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
            // conditional logic checks to see if 'currentUser' is already present in this book's users
            if (book.users.some(user => user.id === userID)){
                button.innerText = 'UNLIKE'
            } else {
                button.innerText = "LIKE"
            }
            button.dataset.bookId = book.id
            show.innerHTML = container
            show.appendChild(button)
        })
    }

    // gets a single book by ID
    function getBook(e){
        return fetch(baseURL + `/${e.target.dataset.bookId}`)
                .then(res => res.json())
    }
    
    // gets a single user by ID
    function getUser(id){
        return fetch(`http://localhost:3000/users/${id}`)
        .then(res => res.json())
    }

    // executes a PATCH fetch to update likes on a book
    function changeLikes(e, id, body){
        fetch(baseURL + `/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(body)
        })
            // using pessimistic rendering so that list of likers is always derived from the db
            .then(() => showBook(e))
    }

    function handleLike(e){
        // uses event delegation to detect the origin of a 'click'
        if(e.target.tagName=="BUTTON"){
            const id = e.target.dataset.bookId
            // conditional to perform different updates dependent on the button text
            if(e.target.innerText == 'LIKE'){
                // get the "current" user
                getUser(userID).then(user => {
                    // get the book to update
                    getBook(e).then(book => {
                        const users = book.users
                        // using the spread operator, append the 'current' user to the list of existing users
                        const body = { users: [...users, user]}
                        changeLikes(e, id, body)
                    })
                })
                
            } else {
                getUser(userID).then(user => {
                    
                    getBook(e).then(book => {
                        // similar to above but uses filter to remove 'current' user from the array
                        const users = book.users.filter(user => user.id != userID)
                        const body = { users: [...users]}
                        changeLikes(e, id, body)
                    })
                })
            }
            
        }
    }

    getBooks()

});
