/*
 * Передача за посиланням і за значенням
 *
 * Примітиви і складні типи
 * Посилальна рівність (referential equality)
 */

/*
TODO: Створіть змінну num = 10.
TODO: Створіть та привласніть змінній numCopy, значення змінної num.
TODO: Виведіть до консолі обидві ці змінні.
TODO: Змініть значення змінної numCopy і ще раз виведіть у консоль.
*/
// const num = 10;
// let numCopy = num;

// console.log('num =', num);
// console.log('numCopy =', numCopy);

// numCopy = 20;

// console.log('num =', num);
// console.log('numCopy =', numCopy);

/*
TODO: Створіть масив numbers = [1, 2, 3].
TODO: Створіть та привласніть змінній numbersCopy, значення змінної numbers.
TODO: Виведіть до консолі обидва цих масива.
TODO: Перезапишіть перший елемент в масиві numbersCopy і ще раз виведіть обидва масива до консолі.
*/
const numbers = [1, 2, 3];
const numbersCopy = numbers;

console.log('numbers =', numbers);
console.log('numbersCopy =', numbersCopy);

numbersCopy[0] = 100;

console.log('numbers =', numbers);
console.log('numbersCopy =', numbersCopy);

console.log(numbers === numbersCopy);
console.log([100, 200, 300] === [100, 200, 300]);
