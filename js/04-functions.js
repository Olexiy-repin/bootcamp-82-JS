/*
 * Функції
 *
 * - Оголошення та виклик функції
 * - Параметри та аргументи
 * - Повернення значення
 * - Порядок виконання коду
 * - Області видимості
 */

// function greetUser(firstName, lastName = 'Anonym') {
//   // let firstName = 'Millie';
//   // let lastName = undefined;

//   console.log(`Welcome ${firstName} ${lastName}!`);
// }

// greetUser('Oleksii', 'Repin');

// function sum(numA, numB) {
//   // let numA = 10;
//   // let numB = 20;

//   return numA + numB;
// }

// console.log(sum(10, 20));
// console.log(sum(25, 2));

/*
TODO: Напишіть функцію isAdult(age), яка буде перевіряти вік користувач.
TODO: Якщо користувачу більше 18 років, то функція повертає true інакше false.
*/
// function isAdult(age) {
//   return age >= 18;
// }

// console.log(isAdult(29)); // true
// console.log(isAdult(18)); // true
// console.log(isAdult(7)); // false

/*
TODO: Напишіть функцію isNumberEven(num), яка перевіряє число на парність.
TODO: Якщо число парне, то функція повертає true інакше false.
*/
// function isNumberEven(num) {
//   return num % 2 === 0;
// }

// console.log(isNumberEven(10)); // true
// console.log(isNumberEven(15)); // false
// console.log(isNumberEven(100)); // true

/*
TODO: Напишіть функцію getRectArea(sideA, sideB) для обчислення площі прямокутника.
TODO: Сторони прямокутника будуть переденні до параметрів sideA та sideB.
*/
// function getRectArea(sideA, sideB) {
//   return sideA * sideB;
// }

// console.log(getRectArea(8, 11)); // 88
// console.log(getRectArea(18, 11)); // 198
// console.log(getRectArea(8, 21)); // 168

/*
TODO: Напишіть функцію toCelsius(fahrenheit), яка буде переводити градуси Фаренгейта в градуси Цельсія.
TODO: Заокругліть значення до однієї цифри після коми.
TODO:
TODO: Формула: С = (F - 32) * (5/9);
*/
// function toCelsius(fahrenheit) {
//   const celsius = (fahrenheit - 32) * (5 / 9);

//   return Number(celsius.toFixed(1));
// }

// console.log(toCelsius(10)); // -12.2
// console.log(toCelsius(0)); // -17.8
// console.log(toCelsius(-10)); // -23.3

/*
TODO: Напишіть функцію getDiscountPrice(price, discount),
TODO: яка повертає ціну зі знижкою.
TODO:
TODO: price — початкова ціна
TODO: discount — відсоток знижки (наприклад 0.2 означає 20%)
TODO:
TODO: Результат округлити до 2 знаків після коми.
*/
// function getDiscountPrice(price, discount) {
//   const priceWithDiscount = price * (1 - discount);

//   return priceWithDiscount.toFixed(2);
// }

// console.log(getDiscountPrice(10000, 0.2));
// console.log(getDiscountPrice(5493242, 0.08));

/*
 TODO: Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
 TODO: маси тіла людини. Для цього необхідно розділити вагу на квадрат висоти.
 TODO:
 TODO: Вага та висота будуть спеціально передані як рядки.
 TODO:
 TODO: Індекс маси тіла необхідно округлити до однієї цифри після коми.
 */
// function calcBMI(weight, height) {
//   const numericalWeight = Number(weight);
//   const numericalHeight = Number(height);

//   const resultBMI = numericalWeight / numericalHeight ** 2;

//   return resultBMI.toFixed(1);
// }

// console.log(calcBMI('85.3', '1.74'));
