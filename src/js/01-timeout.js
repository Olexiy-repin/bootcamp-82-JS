/*
 * Метод window.setTimeout(callback, delay, args)
 */
//!=========================================

// console.log(1);

// setTimeout(function foo() {
//   console.log(2);
// }, 5000);

// setTimeout(function foo() {
//   console.log(3);
// }, 1000);

// console.log(4);

// for (let i = 0; i < 10; i++) {
//   console.log('Hello');
// }

//!=========================================
/*
 * Очищення таймаута за допомогою clearTimeout(timeoutId)
 */
//!=========================================

// const notificationId = setTimeout(() => {
//   console.log('Notification');
// }, 10000); // повертає нам ID (число)

// clearTimeout(notificationId);

//!=========================================
/**
 * Можливість передати параметри для колбеку
 */

// function showX(x1) {
//   console.log(x);
// }

// function foo() {
//   const x = 'hello';
//   setTimeout(() => {
//     showX(x);
//   }, 1000);
// }

// foo();
