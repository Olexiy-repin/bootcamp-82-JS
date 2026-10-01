// async function foo() {}

import axios from 'axios';
import { getBookList } from './api/booksAPI';
import { getStudents } from './api/usersAPI';

// const foo2 = async () => {};

// const obj = {
//   name: 'Vasya',
//   async getInfo() {},
// };

// document.addEventListener('DOMContentLoaded', async () => {});

// setTimeout(async () => {}, 1000);

// class User {
//   constructor() {}
//   async getInfo() {}
// }

//!=========================================

// async function renderBooks() {
//   const books = await getBookList();
//   console.log(books);
// }

// async function renderStudents() {
//   const students = await getStudents();
//   console.log(students);
// }

// document.addEventListener('DOMContentLoaded', async () => {
//   renderBooks();
//   renderStudents();
// });

//!=========================================

// const getPokemon = async pokemonId => {
//   const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
//   return res.data;
// };

// document.addEventListener('DOMContentLoaded', async () => {
//   const promises = [];

//   for (let i = 1; i < 10; i++) {
//     const pokemonPromise = getPokemon(i);
//     promises.push(pokemonPromise);
//   }

//   const res = await Promise.all(promises);
//   console.log(res);
// });
