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
    if (title.value === "" || author.value === "" || pages.value === "" || parseInt(pages.value) > 17868) return 
    myLibrary.push(new Book(title.value, author.value, pages.value, isRead.checked));

    createBookCardElement();
    closeForm();
}

// Functions responsible for creation of certain elements
function createBookCardElement() {
    const bookCard = document.createElement("div");

    createParagraphElements(bookCard);
    createChangeStatusButtonElement(bookCard);
    createRemoveButtonElement(bookCard);

    bookCard.classList.add("book-card");
    bookCard.setAttribute("data-index", `${myLibrary.length - 1}`);
    
    library.appendChild(bookCard);
}

function createParagraphElements(element) {
    const paragraphTitle = document.createElement("p");
    paragraphTitle.classList.add("book-title");
    paragraphTitle.textContent = title.value;

    const paragraphAuthor = document.createElement("p");
    paragraphAuthor.classList.add("book-author");
    paragraphAuthor.textContent = `Written by ${author.value}`;

    const paragraphPages = document.createElement("p");
    paragraphPages.classList.add("book-pages");
    paragraphPages.textContent = `Page count: ${pages.value}`;

    const paragraphStatus = document.createElement("p");
    paragraphStatus.classList.add("book-status");
    paragraphStatus.textContent = `Book status: ${renameValuesOfBookStatus()}`

    element.append(paragraphTitle, paragraphAuthor, paragraphPages, paragraphStatus);
} 

function createRemoveButtonElement(element) {
    const removeBtn = document.createElement("button");

    removeBtn.setAttribute("type", "button");
    removeBtn.classList.add("remove-button");

    removeBtn.addEventListener("click", removeBookCard)

    removeBtn.textContent = "Remove";
    element.appendChild(removeBtn);
}

function createChangeStatusButtonElement(element) {
    const isReadBtn = document.createElement("button");

    isReadBtn.setAttribute("type", "button");
    isReadBtn.classList.add("status-button");

    isReadBtn.textContent = "Change status";
    element.append(isReadBtn);
}

// The function which removes a particular object from myLibrary array and removes 
// a particular book card visually
function removeBookCard(event) {
    const currentBookCard = event.target.parentElement;
    const index = currentBookCard.getAttribute("data-index");

    myLibrary.splice(+index, 1);
    currentBookCard.remove();
}

// Functions responsible for opening and closing of the modal / form
function openForm() {
    modal.classList.add("active");
    overlay.classList.add("active");
}

function closeForm() {
    modal.classList.remove("active");
    overlay.classList.remove("active");
}

function renameValuesOfBookStatus() {
    if (isRead.checked) return "Read";
    return "Not read";
}

// Add event listeners for buttons
openFormBtn.addEventListener("click", openForm);
closeFormBtn.addEventListener("click", closeForm);
overlay.addEventListener("click", closeForm);
submitFormBtn.addEventListener("click", addBookToLibrary);