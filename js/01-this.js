/*
 * Контекст виконання функції
 *
 * - Ключове слово this
 * - Глобальний контекст
 * - Контекст методу об'єкта
 */

//* Розглянемо як this поводиться в методах
// const user = {
//   firstName: 'James',
//   lastName: 'Wheeler',

//   showThis: function () {
//     console.log('this =', this);
//   },

//   showFullName: function () {
//     console.log(`${this.firstName} ${this.lastName}`);
//   },
// };

// user.showThis();
// user.showFullName();

//* Розглянемо як this поводиться у звичайних функціях.
//~ Function expression
// const showThis = function () {
//   console.log('this =', this);
// };

// showThis();

//~ Function declaration
// function showThis() {
//   console.log('this =', this);
// }

// showThis();

//* Присвоєння функції, як методу об'єкта
// const showThis = function () {
//   console.log('this =', this);
// };

// const showFullName = function () {
//   console.log(`${this.firstName} ${this.lastName}`);
// };

// showThis();
// showFullName();

// const user = {
//   firstName: 'Ella',
//   lastName: 'Park',

//   showUserThis: showThis,
//   showUserFullName: showFullName,
// };

// user.showUserThis();
// user.showUserFullName();

// const jacob = {
//   firstName: 'Jacob',
//   lastName: 'Park',

//   showUserFullName: showFullName,
// };

// jacob.showUserFullName();

//* Виклик методу об'єкта без контексту
// const user = {
//   firstName: 'Charlotte',
//   lastName: 'Ingram',

//   showUserThis: function () {
//     console.log('this =', this);
//   },

//   showUserFullName: function () {
//     console.log(`${this.firstName} ${this.lastName}`);
//   },
// };

// user.showUserThis();
// user.showUserFullName();

// const showThis = user.showUserThis;
// const showFullName = user.showUserFullName;

// showThis();
// showFullName();

//* This в callback функціях
// const user = {
//   firstName: 'Charlotte',
//   lastName: 'Ingram',
//   age: 30,

//   showThis: function () {
//     console.log('this =', this);
//   },

//   showFullName: function () {
//     console.log(`${this.firstName} ${this.lastName}`);
//   },
// };

// const someFunction = callback => {
//   callback();
// };

// someFunction(user.showFullName);

//* This у стрілочних функціях.
//* Стрілочні функції не мають свого this, this в стрілках завжди посилається на батьківський this.
// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis: () => {
//     console.log('this =', this);
//   },
// };

// user.showThis();
