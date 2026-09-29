import axios from 'axios';

axios.defaults.baseURL =
  'https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com';

//!=========================================

export const getBookList = () => {
  return axios.get('/public/books');
};

export const getBookById = bookId => {
  return axios.get(`/public/books/${bookId}`);
};

export const createBook = newBookBody => {
  return axios.post('/public/book', newBookBody);
};

export const replaceBook = (bookId, body) => {
  return axios.put(`/public/books/${bookId}`, body);
};

export const updateBook = (bookId, body) => {
  return axios.patch(`/public/books/${bookId}`, body);
};

export const deleteBook = bookId => {
  return axios.delete(`/public/books/${bookId}`);
};

//!=========================================
