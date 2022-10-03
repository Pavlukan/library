const library = document.querySelector(".library");
const modal = document.querySelector(".modal");
const overlay = document.querySelector("#overlay");
const openFormBtn = document.querySelector(".open-form-button");
const closeFormBtn = document.querySelector(".close-button");

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

createBookCardElements();

function openForm() {
    modal.classList.add("active");
    overlay.classList.add("active");
}

function closeForm() {
    modal.classList.remove("active");
    overlay.classList.remove("active");
}

openFormBtn.addEventListener("click", openForm);
closeFormBtn.addEventListener("click", closeForm);
overlay.addEventListener("click", closeForm);
