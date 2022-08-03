class NewAwesomeBook{
  constructor(title, author, id){
    this.title = title;
    this.author = author;
    this.id = id;
  }
}

class UserExperience{
  static displayBook(){
    const bookList = [{
      title: 'The Hobbit',
      author: 'Jk.R.R. Tolkien',
      id: 0
    }];
    const book = bookList;
    book.forEach((book) => {
    const parent = document.getElementById('books');
    const child = document.createElement('article');
    child.classList.add('kitab');
    child.innerHTML = `
    <h3 class = "title">${book.title}</h3>
    <p class="description">${book.author}</p>
    <button class="btn ">Delete</button>
    `;
    parent.appendChild(child);
    });
  }
  // static AddMyBook(){
    const form = document.getElementById('btn');
    form.addEventListener('click', (e) => {
      e.preventDefault();
      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      const id = Date.now();
      
      
    });
  }

}
  document.addEventListener('DOMContentLoaded', UserExperience.displayBook());

