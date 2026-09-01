/*
 * - Function expression
 * - Псевдомасив arguments и Array.from
 */

//~ Function declaration (Можна викликати до оголошення в коді)
// greetUser('Essie', 'Coleman');

// function greetUser(firstName, lastName) {
//   // let firstName = 'Essie';
//   // let lastName = 'Coleman';

//   console.log(`Welcome ${firstName} ${lastName}`);
// }

// function sum(numA, numB) {
//   return numA + numB;
// }

// console.log(sum(10, 20));

//~ Function expression (Викликати тільки після оголошення в коді)
// const greetUser = function (firstName, lastName) {
//   console.log(`Welcome ${firstName} ${lastName}`);
// };

// greetUser('Janie', 'Holmes');

// const sum = function (numA, numB) {
//   return numA + numB;
// };

// console.log(sum(100, 200));

//~ Псевдомасив arguments
// const fn = function () {
//   console.log('arguments =', arguments);

//   console.log(arguments[0]);
//   console.log(arguments[1]);

//   for (const arg of arguments) {
//     console.log('arg =', arg);
//   }
// };

// fn('Hello', 'world');

/*
TODO: Напиши функцію add для складання довільної кількості аргументів (чисел)
*/
// const add = function () {
//   console.log('arguments =', arguments);

//   let total = 0;

//   for (const arg of arguments) {
//     total += arg;
//   }

//   return total;
// };

// console.log(add(10, 200, 32));
// console.log(add(112, 22, 49, 51, 67));

/*
TODO: Створіть функцію calculateAverage(), яка приймає довільну кількість числових аргументів
TODO: та розраховує середнє арефметичне.
*/
// const calculateAverage = function () {
//   console.log('arguments =', arguments);

//   let total = 0;

//   for (const arg of arguments) {
//     total += arg;
//   }

//   const average = total / arguments.length;

//   return average.toFixed(1);
// };

// console.log(calculateAverage(11, 20, 33, 47)); // 27.75
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2
