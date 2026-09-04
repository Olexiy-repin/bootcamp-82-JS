/*
 * Масив об'єктів
 *
 * - Перебір масива
 * - Пошук об'єкта за значенням властивості
 * - Колекція значень властивості
 */
// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: true },
//   { name: 'Ajax', online: false },
// ];

// console.table(friends);

// for (const friend of friends) {
//   console.log('friend =', friend);
//   console.log(friend.name);
// }

/*
TODO: Пошук друга за іменем
TODO:
TODO: Напишіть функцію findFriendByName(allFriends, friendName),
TODO: якій будуть передавати масив з друзями (параметр allFriends),
TODO: та імʼя одного друга (параметр friendName).
TODO: Функція має перевірити чи є цей друг у масиві.
TODO: Якщо є, то функція має повернути інформацію по цьому другу.
TODO: Якщо немає, тоді функція має повернути повідомлення про це.
*/
// const findFriendByName = function (allFriends, friendName) {
//   for (const friend of allFriends) {
//     if (friend.name.toLowerCase() === friendName.toLowerCase()) {
//       return friend;
//     }
//   }

//   return `${friendName} не знайдено!`;
// };

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

/*
TODO: Отримуємо імена всіх друзів
TODO:
TODO: Напишіть функцію getAllNames(allFriends),
TODO: якій будуть передавати масив з друзями (параметр allFriends).
TODO: Функція на основі отриманого масиву має створити новий масив
TODO: тільки з іменами друзів і повернути його.
*/
// const getAllNames = function (allFriends) {
//   const allNames = [];

//   for (const friend of allFriends) {
//     allNames.push(friend.name);
//   }

//   return allNames;
// };

// console.log(getAllNames(friends));

/*
TODO: Отримуємо імена тільки тих друзів, які зараз онлайн
TODO: 
TODO: Напишіть функцію getOnlineFriends (allFriends),
TODO: Функція на основі отриманого масиву має створити новий масив
TODO: але тільки з іменами друзів, які зараз онлайн.
*/
// const getOnlineFriends = function (allFriends) {
//   const onlineFriends = [];

//   for (const friend of allFriends) {
//     if (friend.online) {
//       onlineFriends.push(friend.name);
//     }
//   }

//   return onlineFriends;
// };

// console.log(getOnlineFriends(friends));

/*
TODO: Напишіть функцію calcTotalPrice(allStones, stoneName),
TODO: яка приймає масив об'єктів та рядок з назвою каменю.
TODO: Функція рахує і повертає загальну вартість каміння з
TODO: таким ім'ям, ціною та кількістю з об'єкта.
*/
// const stones = [
//   { name: 'Смарагд', price: 1300, quantity: 4 },
//   { name: 'Діамант', price: 2700, quantity: 3 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
//   { name: 'Аконіт', price: 200, quantity: 2 },
// ];

// const calcTotalPrice = function (allStones, stoneName) {
//   console.table(allStones);

//   for (const stone of allStones) {
//     if (stone.name.toLowerCase() === stoneName.toLowerCase()) {
//       return stone.price * stone.quantity;
//     }
//   }

//   return `${stoneName} не знайдено!`;
// };

// console.log(calcTotalPrice(stones, 'Діамант'));
// console.log(calcTotalPrice(stones, 'Смарагд'));
// console.log(calcTotalPrice(stones, 'Аконіт'));
// console.log(calcTotalPrice(stones, 'Аметист'));
