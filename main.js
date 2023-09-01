const myLibrary = [];

function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
    this.info = function() {
        if(pages == this.pages) {
            return 'read'
        } else return 'not read'
    }
}

const book1 = new Book('Grapes of Wrath', 'John Steinbeck', 314)
const book2 = new Book('The Order of Time', 'Carlo Rovelli', 245)

// Prototype
Object.getPrototypeOf(book1) === Book.prototype // returns true
Object.getPrototypeOf(book2) === Book.prototype // returns true

function addBookToLibrary() {

}
