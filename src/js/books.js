import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import {
  createBook,
  deleteBook,
  getBookList,
  replaceBook,
  updateBook,
} from './api/booksAPI';

//!=========================================

const refs = {
  container: document.querySelector('.js-article-list'),
  createForm: document.querySelector('.js-create-form'),
  resetForm: document.querySelector('.js-reset-form'),
  updateForm: document.querySelector('.js-update-form'),
  loadingElem: document.querySelector('.js-loading'),
};

//!=========================================

document.addEventListener('DOMContentLoaded', handleDOMLoaded);
refs.createForm.addEventListener('submit', handleCreateBook);
refs.resetForm.addEventListener('submit', handleResetBook);
refs.updateForm.addEventListener('submit', handleUpdateBook);
refs.container.addEventListener('click', handleDeleteBook);

//!=========================================

async function handleDOMLoaded() {
  showLoader();

  const data = await getBookList();
  const books = data.items;
  const markup = booksTemplate(books);
  refs.container.innerHTML = markup;
}

async function handleCreateBook(e) {
  e.preventDefault();
  const borys = new FormData(e.target);

  const body = {
    title: borys.get('title'),
    author: borys.get('author'),
    desc: borys.get('desc'),
  };

  showLoader();

  try {
    const data = await createBook(body);
    const markup = bookTemplate(data);
    refs.container.insertAdjacentHTML('afterbegin', markup);
  } catch {
    showError(err);
  }

  hideLoader();
  e.target.reset();
}

async function handleResetBook(e) {
  e.preventDefault();

  const formData = new FormData(e.target);

  const bookId = formData.get('bookId');
  const body = {
    title: formData.get('title'),
    author: formData.get('author'),
    desc: formData.get('desc'),
  };

  showLoader();

  try {
    const data = await replaceBook(bookId, body);
    const markup = bookTemplate(data);
    const oldElem = refs.container.querySelector(`[data-id="${bookId}"]`);
    oldElem.outerHTML = markup;
  } catch {
    showError(err);
  }

  hideLoader();
  e.target.reset();
}

async function handleUpdateBook(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const bookId = formData.get('bookId');

  const body = {
    title: formData.get('title') || undefined,
    author: formData.get('author') || undefined,
    desc: formData.get('desc') || undefined,
  };

  showLoader();

  try {
    const data = await updateBook(bookId, body);
    const markup = bookTemplate(data);
    const oldElem = refs.container.querySelector(`[data-id="${bookId}"]`);
    oldElem.outerHTML = markup;
  } catch {
    showError(err);
  }

  hideLoader();

  e.target.reset();
}

async function handleDeleteBook(e) {
  if (!e.target.classList.contains('book-delete-button')) {
    return;
  }

  const bookId = e.target.dataset.id;
  showLoader();

  try {
    await deleteBook(bookId);
    const oldElem = refs.container.querySelector(`[data-id="${bookId}"]`);
    oldElem.remove();
  } catch {
    showError(err);
  }

  hideLoader();
}
//!=========================================

function bookTemplate(book) {
  return `<li class="card book-item" data-id="${book._id}">
        <div class="book-cover-placeholder" aria-label="Book cover placeholder">
          <span>BK</span>
        </div>
        <div class="book-card-body">
          <div class="book-card-header">
            <span class="book-label">Book</span>
            <span class="book-id">${book._id}</span>
          </div>
          <h3 class="book-title">${book.title}</h3>
          <p class="book-author">by ${book.author}</p>
          <p class="book-desc">${book.desc}</p>
          <button class="btn button book-delete-button" data-id="${book._id}">
            Delete
          </button>
        </div>
      </li>`;
}

function booksTemplate(books) {
  return books.map(bookTemplate).join('\n\n\n');
}
//!=========================================

function showError(message) {
  console.log(message);
  iziToast.error({
    title: 'Request Error',
    message: message,
  });
}

function showLoader() {
  refs.loadingElem.classList.remove('hidden');
}

function hideLoader() {
  refs.loadingElem.classList.add('hidden');
}
