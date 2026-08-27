/*
 * Логічні оператори
 *
 * - Перетворення типів: логічне
 * - Оператор &&
 * - Оператор ||
 * - Оператор !
 */

//~ 6 хибних значень: false, NaN, null, undefined, 0, ''.
// console.log(Boolean(NaN));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(0));
// console.log(Boolean(''));

// console.log(Boolean(3.14));
// console.log(Boolean(-10));
// console.log(Boolean('hello'));
// console.log(Boolean('false'));
// console.log(Boolean(' '));

/*
 ~ Оператор &&
 */
// false && true
// console.log('' && 100);

// const rating = 3;

// if (rating >= 0) {
//   if (rating <= 5) {
//     console.log('Ratins is correct!');
//   }
// }

// if (rating >= 0 && rating <= 5) {
//   console.log('Ratins is correct!');
// }

/*
 ~ Оператор ||
 */
// false || false
// console.log('' || 0);

// const userAge = 43;

// if (userAge <= 18 || userAge >= 60) {
//   console.log('Done!');
// }

// let firstName = prompt('Введіть імʼя') || 'Anonym';

// // if (firstName === '' || firstName === null) {
// //   firstName = 'Anonym';
// // }

// console.log(firstName);

/*
 ~ Оператор !
 */
// console.log(!true);
// console.log(!false);
// console.log(!'Hello');
// console.log(!'');

// const isOnline = true;

// if (!isOnline) {
//   console.log('На все добре!');
// }

/*
 TODOD: Що буде виведено до консолі?
 */
// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log((1 && 0 && 2) > 0);

// console.log(0 || (2 && 3) || 4);
