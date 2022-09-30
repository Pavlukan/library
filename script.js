const library = document.querySelector("main");

let myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBookToLibrary(title, author, pages, status) {
    myLibrary.push(new Book(title, author, pages, status));
}

addBookToLibrary("Sapiens: A Brief History of Humankind", "Yuval Noah Harari", 443, "read");
addBookToLibrary("A Short History of Nearly Everything", "Bill Bryson", 544, "read");

function createBookCardElements() {
    myLibrary.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        library.appendChild(bookCard);
    });
}

displayBookObjects();