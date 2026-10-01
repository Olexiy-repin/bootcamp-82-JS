import axios from 'axios';

axios.defaults.baseURL =
  'https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com';

//!=========================================

export const getBookList = async () => {
  const res = await axios.get('/public/books');
  return res.data;
};

export const getBookById = async bookId => {
  const res = await axios.get(`/public/books/${bookId}`);
  return res.data;
};

export const createBook = async newBookBody => {
  const res = await axios.post('/public/book', newBookBody);
  return res.data;
};

export const replaceBook = async (bookId, body) => {
  const res = await axios.put(`/public/books/${bookId}`, body);
  return res.data;
};

export const updateBook = async (bookId, body) => {
  const res = await axios.patch(`/public/books/${bookId}`, body);
  return res.data;
};

export const deleteBook = async bookId => {
  const res = await axios.delete(`/public/books/${bookId}`);
  return res.data;
};

//!=========================================
