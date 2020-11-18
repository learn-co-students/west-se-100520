function addBook(book) {
  const book_list = document.querySelector("#book-list");
  const div = makeBookCard(book);
  book_list.appendChild(div);
}

function makeBookCard(book) {
  const div = document.createElement("div");
  div.className = "card";

  const img = document.createElement("img");
  img.src = book.img;

  const h3 = document.createElement("h3");
  h3.textContent = book.title;

  const p = document.createElement("p");
  p.textContent = book.author;

  //add all elements to div
  div.appendChild(img);
  div.appendChild(h3);
  div.appendChild(p);

  return div;
}

function showBooks(bookArray) {
  bookArray.map(book => {
    addBook(book);
  });
}

// what happens when books isn't defined?
showBooks(books);
