/*
 * Деструктуризація об'єкта
 */

/*
TODO: Напишіть деструктуруюче присвоєння, яке:
TODO: властивість firstName присвоє до змінної firstName.
TODO: властивість lastName присвоє до змінної lastName.
TODO: властивість age присвоє до змінної userAge.
TODO: властивість isAdmin присвоє до змінної isAdmin (false, якщо немає такої властивості)
*/
// const user = {
//   firstName: 'John',
//   lastName: 'Reese',
//   age: 30,
//   isAdmin: true,
// };

// const { firstName, lastName, age: userAge, isAdmin = false } = user;

// console.log('user =', user);
// console.log('firstName =', firstName);
// console.log('lastName =', lastName);
// console.log('userAge =', userAge);
// console.log('isAdmin =', isAdmin);

/*
 * Глибока деструктуризація об'єкта
 */

//~ Без глибокої деструктуризації
// const user = {
//   username: 'Jacob',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// const { username } = user;
// const { html, css, js } = user.skills;

// console.log('user =', user);
// console.log('username =', username);
// console.log('html =', html);
// console.log('css =', css);
// console.log('js =', js);

//~ З глибокою деструктуризацією
// const user = {
//   username: 'Jacob',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// const {
//   username,
//   skills: { html, css, js },
// } = user;

// console.log('user =', user);
// console.log('username =', username);
// console.log('html =', html);
// console.log('css =', css);
// console.log('js =', js);

/*
 * Деструктуризація масива
 */
// const usernames = ['Trevor', 'Howard', 'Marian', 'Christina'];

// const [username1, , username3] = usernames;

// console.log('usernames =', usernames);
// console.log('username1 =', username1);
// console.log('username3 =', username3);

/*
TODO: Функція getUserCoordinates повертає масив з координатами користувача, деструктуризуйте цей масив.
*/
// const getUserCoordinate = () => {
//   const longitude = 50.426857;
//   const latitude = 30.56368;

//   return [longitude, latitude];
// };

// const [userLongitude, userLatitude] = getUserCoordinate();

// console.log('userLongitude =', userLongitude);
// console.log('userLatitude =', userLatitude);

//* Операція rest при деструктуризації обʼєктів
// const user = {
//   firstName: 'John',
//   lastName: 'Reese',
//   age: 30,
//   isAdmin: true,
// };

// const { lastName, firstName, ...otherProps } = user;

// console.log('user =', user);
// console.log('firstName =', firstName);
// console.log('lastName =', lastName);
// console.log('otherProps =', otherProps);

//* Операція rest при деструктуризації масивів
// const usernames = ['Trevor', 'Howard', 'Marian', 'Christina'];

// const [username1, username2, ...otherNames] = usernames;

// console.log('usernames =', usernames);
// console.log('username1 =', username1);
// console.log('username2 =', username2);
// console.log('otherNames =', otherNames);
