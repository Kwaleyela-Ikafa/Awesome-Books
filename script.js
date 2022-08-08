const BookData = document.querySelector('#books');
const button = document.querySelector('#add-button');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');

class Storage {
  constructor() {
    this.Books = [];
  }

  static addBook(newBook) {
    this.Books.push(newBook);
    localStorage.setItem('Books', JSON.stringify(this.Books));
  }

  static removeFromBooks(target) {
    const removeBook = target.previousElementSibling.firstElementChild.textContent;

    this.Books.filter((book, index) => {
      if (book.title === removeBook) {
        this.Books.splice(index, 1);
      }
      return this.Books;
    });
    localStorage.setItem('Books', JSON.stringify(this.Books));
  }

  static getBooksFromStorage() {
    if (localStorage.getItem('Books') === null) {
      this.Books = [];
    } else {
      this.Books = JSON.parse(localStorage.getItem('Books'));
    }
    return this.Books;
  }
}

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function UI() {}

UI.prototype.addBookToUI = function (newBook) {
  BookData.innerHTML += `
    <li class='book book-item'>
    <div class ='info'>
      <p class='book-title'>${newBook.title}</p>
      <p class='book-author'>&nbsp by ${newBook.author}</p>
    </div>
      <button class='remove remove-btn btn' type='button'>Remove</button>
    </li>
  `;
};

UI.prototype.clearInputs = function (element1, element2) {
  element1.value = '';
  element2.value = '';
};

UI.prototype.removeBookFromUI = function (target) {
  target.parentElement.remove();
};

const ui = new UI();

function addBook(e) {
  const title = titleInput.value;
  const author = authorInput.value;

  const newBook = new Book(title, author);

  Storage.addBook(newBook);

  ui.addBookToUI(newBook);
  ui.clearInputs(titleInput, authorInput);

  e.preventDefault();
}

function removeBook(e) {
  if (e.target.className === 'remove remove-btn btn') {
    ui.removeBookFromUI(e.target);
    Storage.removeFromBooks(e.target);
  }
}

button.addEventListener('click', addBook);
BookData.addEventListener('click', removeBook);
document.addEventListener('DOMContentLoaded', () => {
  const allBooks = Storage.getBooksFromStorage();
  allBooks.forEach((book) => ui.addBookToUI(book));
});

const addNew = document.querySelector('.add-new');
const form = document.querySelector('.form');

const list = document.querySelector('.list');
const listDiv = document.querySelector('.list-div');

const contact = document.querySelector('.contact');
const contactDiv = document.querySelector('.contact-info-div');

addNew.addEventListener('click', () => {
  form.style.display = 'unset';
  listDiv.style.display = 'none';
  contactDiv.style.display = 'none';
});

list.addEventListener('click', () => {
  form.style.display = 'none';
  listDiv.style.display = 'unset';
  contactDiv.style.display = 'none';
});

contact.addEventListener('click', () => {
  form.style.display = 'none';
  listDiv.style.display = 'none';
  contactDiv.style.display = 'unset';
});

// eslint-disable-next-line no-unused-expressions
window.onload;
listDiv.style.display = 'unset';
