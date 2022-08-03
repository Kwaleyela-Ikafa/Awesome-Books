const BookData = document.querySelector('#books');
const button = document.querySelector('#btn');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');


// Fire event when the initial HTML document has been completely loaded
document.addEventListener('DOMContentLoaded', () => {
  let str = '';
  let booksArray = [];

  const showData = () => {
    if (localStorage.getItem('book') === null) {
      // let booksArray = [];
      localStorage.setItem('book', JSON.stringify(booksArray));
    } else {
      let booksArrayStr = localStorage.getItem('book');
      booksArray = JSON.parse(booksArrayStr);
    }
    booksArray.map((data, index) => {
      str += `
            <div class="book">
              <p>${data[0]}</p>
              <p>${data[1]}</p>
              <button onclick='remove(${index})'>Remove</button>
            </div>
            <hr>
          `;
        return(data);
    });
    BookData.innerHTML = str;
  };

  button.addEventListener('click', function() {
    if(titleInput.value == '' && authorInput.value == '') {
    alert('Please enter a title and author')
  }else {
      let bookTitle = titleInput.value;
      let bookAuthor = authorInput.value;
      if (localStorage.getItem('book') === null) {
        let booksArray = [];
        booksArray.push({ title: bookTitle, author: bookAuthor });
        localStorage.setItem('book', JSON.stringify(booksArray));
      } else {
        let booksArrayStr = localStorage.getItem('book');
        booksArray = JSON.parse(booksArrayStr);
        booksArray.push([bookTitle, bookAuthor]);
        localStorage.setItem('book', JSON.stringify(booksArray));
      }
      titleInput.value = '';
      authorInput.value = '';
      str = '';
      BookData.innerHTML = str;
      showData();
    }
    });

    remove = (id) => {
      let booksArrayStr = localStorage.getItem('book');
      booksArray = JSON.parse(booksArrayStr);
      booksArray.splice(id, 1);
      localStorage.setItem('book', JSON.stringify(booksArray));
      str = '';
      BookData.innerHTML = str;
      showData();
    };
  
    showData();
  });

// button.addEventListener('click', (e) => {
//   e.preventDefault();
//   if(titleInput.value == '' && authorInput.value == '') {
//     alert('Please enter a title and author')
//   }else {
//     const bookList = document.createElement('ul');

//     const newTitle = document.createElement('li');
//     newTitle.innerHTML = titleInput.value;
//     bookList.appendChild(newTitle);

//     const newAuthor = document.createElement('li');
//     newAuthor.innerHTML = authorInput.value;
//     bookList.appendChild(newAuthor);

//     BookData.appendChild(bookList);
//   }
// })