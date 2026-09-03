/*
 * Об'єкти
 *
 * - Тип даних за посиланням
 */
const user = {
  firstName: 'Virginia',
  lastName: 'Cortez',
};
const userCopy = user;

console.log('user =', user);
console.log('userCopy =', userCopy);

userCopy.lastName = 'Powers';

console.log('------------------------');

console.log('user =', user);
console.log('userCopy =', userCopy);

console.log(user === userCopy);

console.log({ firstName: 'Oleksii' } === { firstName: 'Oleksii' });
