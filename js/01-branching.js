/*
 * Розгалуження
 *
 * - Інструкція if
 * - Інструкція if...else
 * - Блок else...if
 * - Тернарний оператор
 */

// if (5 < 1) {
//   console.log('Done!');
// } else {
//   console.log('Hello from else!');
// }

/*
TODO: Запитайте у користувача "Яка столиця України?", якщо він введе Київ
TODO: то виведіть 'Вірно', інакше виведіть 'Невірно'.
*/
// const capitalOfUkraine = prompt('Яка столиця України?');

// if (capitalOfUkraine === 'Київ') {
//   console.log('Вірно');
// } else {
//   console.log('Невірно');
// }

/*
TODO: Перевірте чи є гроші на балансі, якщо є то виведіть до консолі 'Positive', інакше 'Negative'.
*/
// const balance = 10;

// if (balance > 0) {
//   console.log('Positive');
// } else {
//   console.log('Negative');
// }

/*
TODO: В залежності від значення в змінній login, потрібно формувати відповідне повідомлення.
TODO: Співробітник - Привіт
TODO: Директор - Вітаю
TODO: '' - Немає логіну
TODO: В інших випадках повідомлення має бути порожнім.
*/
// const login = 'Співробітник';
// let message;

// if (login === 'Співробітник') {
//   message = 'Привіт';
// } else if (login === 'Директор') {
//   message = 'Вітаю';
// } else if (login === '') {
//   message = 'Немає логіну';
// } else {
//   message = '';
// }

// console.log('message =', message);

// if () {}

// if () {} else {}

// if () {} else if () {} else {}

/*
TODO: Перепишіть конструкцію if з використанням тернарного оператора.
*/
// const numA = 1;
// const numB = 1;

// const result = numA + numB < 4 ? 'Мало' : 'Багато';

// // numA + numB < 4 ? (result = 'Мало') : (result = 'Багато');

// // if (numA + numB < 4) {
// //   result = 'Мало';
// // } else {
// //   result = 'Багато';
// // }

// console.log('result =', result);

/*
TODO: Перепишіть if..else за допомогою декількох тернарних операторів.
*/
// const login = 'Співробітник';
// const message =
//   login === 'Співробітник'
//     ? 'Привіт'
//     : login === 'Директор'
//       ? 'Вітаю'
//       : login === ''
//         ? 'Немає логіну'
//         : '';

// if (login === 'Співробітник') {
//   message = 'Привіт';
// } else if (login === 'Директор') {
//   message = 'Вітаю';
// } else if (login === '') {
//   message = 'Немає логіну';
// } else {
//   message = '';
// }

// console.log(message);
