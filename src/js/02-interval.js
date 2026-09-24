/*
 * Метод setInterval(callback, delay, args)
 */

//!=========================================

// setInterval(() => {
//   console.log('Hello');
// }, 1000);

//!=========================================
/*
 * Очищення інтервалу за допомогою clearInterval(intervalId)
 */

const intervalId = setInterval(() => {
  console.log('TEST');
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
}, 5000);
