const library = document.querySelector(".library");
const modal = document.querySelector(".modal");
const overlay = document.querySelector("#overlay");
const openFormBtn = document.querySelector(".open-form-button");
const closeFormBtn = document.querySelector(".close-button");
const submitFormBtn = document.querySelector(".submit-button");
const form = document.querySelector("form");

let myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary() {
    if ((title.value).trim() === "" || (author.value).trim() === "" || pages.value === "" || parseInt(pages.value) > 17868) return 
    myLibrary.push(new Book(title.value, author.value, pages.value, isRead.checked));

    createBookCardElement();
    closeForm();
    form.reset();
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

    isReadBtn.addEventListener("click", changeBookStatus)

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


// Function which changes the status of a particular book object.
function changeBookStatus(event) {
    const currentBookCard = event.target.parentElement;
    const index = currentBookCard.getAttribute("data-index");

    myLibrary[+index].changeStatus();

    const currentStatusParagraphElement = event.target.parentElement.childNodes[3];
    currentStatusParagraphElement.textContent = `Book status: ${renameBookStatusValue(myLibrary[+index])}`;
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

// Functions responsible for renaming values of false and true into Not Read and Read
function renameValuesOfBookStatus() {
    if (isRead.checked) return "Read";
    return "Not read";
}

function renameBookStatusValue(bookObject) {
    if (bookObject.isRead === true) return "Read"
    return "Not read"
}

// Function on the prototype of every book object which changes the status of any book object
Book.prototype.changeStatus = function() {
    if (this.isRead === true) {
        this.isRead = false;
    }
    else {
        this.isRead = true;
    }
}

// Add event listeners for buttons
openFormBtn.addEventListener("click", openForm);
closeFormBtn.addEventListener("click", closeForm);
overlay.addEventListener("click", closeForm);
submitFormBtn.addEventListener("click", addBookToLibrary);

// Keyboard support
document.addEventListener("keydown", event => {
    if (event.key === "Escape" && modal.classList.contains("active") && overlay.classList.contains("active")) {
        closeForm();
    }
});