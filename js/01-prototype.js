/*
 * Прототип об'єкта
 *
 * - Object.create()
 * - Власні і невласні властивості
 * - Перебір власних властивостей з hasOwnProperty()
 * - Ланцюжки прототипів
 */

// const userMethods = {
//   role: 'USER',

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },

//   isAdult() {
//     return this.age >= 18;
//   },
// };

// const user1 = Object.create(userMethods);

// user1.firstName = 'Milton';
// user1.lastName = 'George';
// user1.age = 30;

// console.log('user1 =', user1);
// console.log(user1.age);
// console.log(user1.getFullName());
// console.log(user1.isAdult());

// const user2 = Object.create(userMethods);

// user2.firstName = 'Sara';
// user2.lastName = 'Stanley';
// user2.age = 20;

// console.log('user2 =', user2);
// console.log(user2.age);
// console.log(user2.getFullName());
// console.log(user2.isAdult());

/*
 * Перебір власних властивостей з hasOwnProperty()
 */
// const objC = {
//   propC: 'Object C',
// };

// const objB = Object.create(objC);

// objB.propB = 'Object B';

// const objA = Object.create(objB);

// objA.propA = 'Object A';

// console.log(objA);

// for (const key in objA) {
//   if (objA.hasOwnProperty(key)) {
//     console.log('key =', key);
//   }
// }

// console.log(objA.hasOwnProperty('propA'));
// console.log(objA.hasOwnProperty('propB'));
// console.log(objA.hasOwnProperty('propC'));
