/*
 * Функція зворотнього виклика (callback)
 *
 * - Функція як значення
 * - Колбек-функції
 * - Інлайн-колбеки
 */
// const fn1 = function (callback) {
//   console.log('Hello from fn1!');

//   console.log('callback =', callback);

//   callback();
// };

// function fn2() {
//   console.log('Hello from fn2');
// }

// const fn3 = function () {
//   console.log('Hello from fn3');
// };

// fn1(fn2);
// console.log('=================================');
// fn1(function () {
//   console.log('Hello from inline callback!');
// });

/*
TODO: Напишіть функцію each(array, callback), яка першим параметром очікує масив,
TODO: а другим - функцію, яка застосовується до кожного елемента масиву. Функція
TODO: each повинна повернути новий масив, елементами якого будуть
TODO: результати виклику коллбека.
 */
// const each = function (array, callback) {
//   console.log('array =', array);

//   const newArray = [];

//   for (const item of array) {
//     newArray.push(callback(item));
//   }

//   return newArray;
// };

// console.log(
//   each([64, 49, 36, 25, 16], function (el) {
//     return el * 2;
//   })
// );

// console.log('===================================');

// console.log(
//   each([64, 49, 36, 25, 16], function (el) {
//     return el - 10;
//   })
// );

// console.log('===================================');

// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (el) {
//     return Math.ceil(el);
//   })
// );

// console.log('===================================');

// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (el) {
//     return Math.floor(el);
//   })
// );

/*
TODO: Напишіть функцію filterArray(array, callback), яка першим параметром очікує масив,
TODO: а другим - функцію, яка застосовується до кожного елемента масиву. Функція
TODO: filterArray повинна повернути відфільтрований новий масив.
*/
// const filterArray = function (array, callback) {
//   console.log('array =', array);

//   const newArray = [];

//   for (const item of array) {
//     if (callback(item)) {
//       newArray.push(item);
//     }
//   }

//   return newArray;
// };

// console.log(
//   filterArray([64, 49, 76, 25, 16], function (el) {
//     return el >= 60;
//   })
// );
