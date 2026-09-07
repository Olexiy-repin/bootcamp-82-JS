/*
 * Стрілочні функції
 * - Оголошення
 * - Явне і неявне поверненя
 * - Псевдомасив arguments (...args)
 * - Інлайн стрілочні функції
 */

//~ Два і більше параметрів
// const greetUserByFullName = (firstName, lastName) => {
//   console.log(`Welcome ${firstName} ${lastName}!`);
// };

// greetUserByFullName('Oleksii', 'Repin');

//~ Один параметр
// const greetUserByName = firstName => {
//   console.log(`Welcome ${firstName}!`);
// };

// greetUserByName('Oleksii');

//~ Без параметрів
// const greetUser = () => {
//   console.log('Welcome User!');
// };

// greetUser();

//~ arguments
// const sum = (...args) => {
//   console.log(args);

//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// };

// console.log(sum(10, 20, 3, 4, 5));

//~ Неявне повернення
// const add = (numA, numB) => numA + numB;

// console.log(add(10, 20));

//~ Неявне повернення обʼєкта
// const addId = user => ({ id: Date.now(), ...user });

// console.log(addId({ firstName: 'Fannie', lastName: 'Campbell' }));

/*
TODO: Виконайте рефакторинг коду за допомогою стрілочних функцій.
*/
// const createProduct = (partialProduct, callback) => {
//   const product = {
//     id: Date.now(),
//     ...partialProduct,
//   };

//   callback(product);
// };

// const logProduct = product => console.log(product);

// const logTotalPrice = product => console.log(product.price * product.quantity);

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

/*
TODO: Виконайте рефакторинг коду за допомогою стрілочних функцій.
*/
// const each = (array, callback) => {
//   console.log(array);

//   const newArr = [];

//   for (const el of array) {
//     newArr.push(callback(el));
//   }

//   return newArr;
// };

//~ Повна версія
// console.log(
//   each([64, 49, 36, 25, 16], value => {
//     return value * 2;
//   })
// );
//~ Скорочена версія
// console.log(each([64, 49, 36, 25, 16], value => value * 2));

//~ Повна версія
// console.log(
//   each([64, 49, 36, 25, 16], value => {
//     return value - 10;
//   })
// );
//~ Скорочена версія
// console.log(each([64, 49, 36, 25, 16], value => value - 10));

//~ Повна версія
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], value => {
//     return Math.ceil(value);
//   })
// );
//~ Скорочена версія
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value)));

//~ Повна версія
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], value => {
//     return Math.floor(value);
//   })
// );
//~ Скорочена версія
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.floor(value)));
