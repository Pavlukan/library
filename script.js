const library = document.querySelector(".library");
const modal = document.querySelector(".modal");
const overlay = document.querySelector("#overlay");
const openFormBtn = document.querySelector(".open-form-button");
const closeFormBtn = document.querySelector(".close-button");
const submitFormBtn = document.querySelector(".submit-button");

let myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary() {
    if (title.value === "" || author.value === "" || pages.value === "") return 
    myLibrary.push(new Book(title.value, author.value, pages.value, isRead.checked));
    createBookCardElement();
    closeForm();
}

function createBookCardElement() {
    const bookCard = document.createElement("div");
    createParagraphElements(bookCard);
    bookCard.classList.add("book-card");
    library.appendChild(bookCard);
}

function createParagraphElements(element) {
    const paragraphTitle = document.createElement("p");
    paragraphTitle.classList.add("book-title");
    paragraphTitle.textContent = title.value;
    const paragraphAuthor = document.createElement("p");
    paragraphAuthor.classList.add("book-author");
    paragraphAuthor.textContent = author.value;
    const paragraphPages = document.createElement("p");
    paragraphPages.classList.add("book-pages");
    paragraphPages.textContent = pages.value;
    element.append(paragraphTitle, paragraphAuthor, paragraphPages);
} 

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
submitFormBtn.addEventListener("click", addBookToLibrary);
