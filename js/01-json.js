/*
 * Формат JSON
 *
 * - Метод JSON.strigify(value)
 * - Метод JSON.parse(value)
 */
// const user = {
//   firstName: 'Irene',
//   lastName: 'Gutierrez',
//   age: 30,

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// const userJSON = JSON.stringify(user);

// console.log(user);
// console.log(userJSON);

// const users = [
//   { firstName: 'Wayne', lastName: 'Riley', age: 30 },
//   { firstName: 'Frank', lastName: 'Patterson', age: 20 },
//   { firstName: 'Ophelia', lastName: 'Lowe', age: 40 },
// ];

// const usersJSON = JSON.stringify(users);

// console.log(users);
// console.log(usersJSON);

/*
 * Конструкція try...catch для обробки помилок
 */
console.log('Start');

try {
  const user = JSON.parse('{"firstName":"Oleksii","lastName":"Repin",}');

  console.log(user);
} catch (err) {
  console.log(err);
}

console.log('End');

// const user = { firstName: 'Oleksii', lastName: 'Repin' };
