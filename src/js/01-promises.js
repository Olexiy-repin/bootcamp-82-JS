/**
 * Створення та обробка промісу
 * - Клас Promise
 * - resolve ✅
 * - reject ❌
 * - then, catch, finally
 */
//!=========================================

// const promise = new Promise((res, rej) => {
//   console.log('Прийняли ваше замовлення');
//   console.log('Тримайте проміс');

//   setTimeout(() => {
//     if (Math.random() > 0.5) {
//       res('Ваше замовлення готове, до сплати 250грн');
//     } else {
//       rej('Ваше замовлення скасоване через повітряну тривогу');
//     }
//   }, 1000);
// });

// const x = 10;
// x = 25;

// setInterval(() => {
//   console.log(promise);
// }, 300);

//!=========================================

// function onFulfilled() {
//   console.log('Ням ням');
// }

// function onRejected() {
//   console.log('Поверніть мені гроші');
// }

// promise.then(onFulfilled, onRejected);

//!=========================================

// promise
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log('Ходімо дивитись фільм');
//   });

//!=========================================
/**
 * Ланцюги промісів
 * - декілька послідовних then
 * - then повертає проміс
 */

// const promise = new Promise((res, rej) => {
//   console.log('Прийняли ваше замовлення');
//   console.log('Тримайте проміс');

//   setTimeout(() => {
//     rej(100);
//   }, 300);
// });

// promise
//   .then(data => {
//     console.log('1', data);
//     return data * 2;
//   })
//   .catch(data => {
//     console.log(data);
//     return data * 2;
//   })
//   .then(data => {
//     console.log('2', data);
//   })
//   .catch(data => {
//     console.log(data);
//     return data * 2;
//   })
//   .then(res => {
//     console.log('res', res);
//   })
//   .catch(data => {
//     console.log(data);
//     return data * 2;
//   });
