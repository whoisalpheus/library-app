const myLibrary = [];

const addBtn = document.querySelector('.add-btn');
const addBookDiv = document.querySelector('.add-book');
const bookTable = document.querySelector('.book-list');
const inputText = document.querySelectorAll('.input-text');
const modalForm = document.querySelector('.modal');

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
addBtn.addEventListener('click', () => {
    modalForm.showModal();
})

    // Form
    // Put form inside modalForm(<dialog>)
    const addForm = document.createElement('form');
    addForm.classList.add('add-form');
    addForm.setAttribute('action', '');
    addForm.setAttribute('method', 'get');
    modalForm.appendChild(addForm);
    
    // Title input
    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title';
    addForm.appendChild(titleLabel);

    const titleInput = document.createElement('input');
    titleInput.classList.add('input-text');
    addForm.appendChild(titleInput);

    // Author input
    const authorLabel = document.createElement('label');
    authorLabel.textContent = 'Author';
    addForm.appendChild(authorLabel);

    const authorInput = document.createElement('input');
    authorInput.classList.add('input-text');
    addForm.appendChild(authorInput);

    // Pages input
    const pagesLabel = document.createElement('label');
    pagesLabel.textContent = '# of Pages';
    addForm.appendChild(pagesLabel);
    
    const pagesInput = document.createElement('input');
    pagesInput.classList.add('input-text');
    addForm.appendChild(pagesInput);

    // Read checkbox
    const readLabel = document.createElement('label');
    readLabel.textContent = 'Check if read';
    addForm.appendChild(readLabel);

    const readInput = document.createElement('input');
    readInput.setAttribute('type', 'checkbox');
    addForm.appendChild(readInput);

    // Submit button
    const submitBtn = document.createElement('button');
    submitBtn.textContent = 'Submit';
    addForm.appendChild(submitBtn);

// Add books to table when submitBtn is clicked
inputText.addEventListener('change', (e) => {
    submitBtn.value = inputText.value;
});

    // if clicked, send value to table...
    // titleInput.value, authorInput.value, pagesInput.value, readInput.value
    // each into <td> element inside a <tr>, inside <table>
    // <table class='book-list'>

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
})

// const book1 = new Book('Grapes of Wrath', 'John Steinbeck', 314)
// const book2 = new Book('The Order of Time', 'Carlo Rovelli', 245)

// Log new books, but where??
// book1.info();

// Prototype
// Object.getPrototypeOf(book1) === Book.prototype // returns true
// Object.getPrototypeOf(book2) === Book.prototype // returns true

function addBookToLibrary() {

}
