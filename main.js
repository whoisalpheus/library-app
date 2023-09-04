const myLibrary = [];

const addBtn = document.querySelector('.add-btn');
const addBookDiv = document.querySelector('.add-book');
const newEntry = document.querySelector('.book-list');

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return (title + author + ', ' + pages + read);
    }
}

// Click Add Button
// EventListener to add <form> when +addbtn clicked
addBtn.addEventListener('click', function() {
    // Form
    const addForm = document.createElement('form');
    addForm.classList.add('add-form');
    addForm.setAttribute('action', '');
    addForm.setAttribute('method', 'get');
    addBookDiv.appendChild(addForm);
    
    // Title input
    const titleLabel = document.createElement('label');
    addForm.appendChild(titleLabel);

    const titleInput = document.createElement('input');
    addForm.appendChild(titleInput);

    // Author input
    const authorLabel = document.createElement('label');
    addForm.appendChild(authorLabel);

    const authorInput = document.createElement('input');
    addForm.appendChild(authorInput);

    // Pages input
    const pagesLabel = document.createElement('label');
    addForm.appendChild(pagesLabel);
    
    const pagesInput = document.createElement('input');
    addForm.appendChild(pagesInput);

    // Read checkbox
    const readLabel = document.createElement('label');
    addForm.appendChild(readLabel);

    const readInput = document.createElement('input');
    addForm.appendChild(readInput);
});

// Form
// Calculate if read or not
// Checkbox

// const book1 = new Book('Grapes of Wrath', 'John Steinbeck', 314)
// const book2 = new Book('The Order of Time', 'Carlo Rovelli', 245)

// Log new books, but where??
// book1.info();

// Prototype
// Object.getPrototypeOf(book1) === Book.prototype // returns true
// Object.getPrototypeOf(book2) === Book.prototype // returns true

function addBookToLibrary() {

}
