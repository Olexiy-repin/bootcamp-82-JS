/*
 * Перетворення типів: рядки
 *
 * - Явне перетворення типів
 * - Неявне перетворення типів
 */

// const num = 10;
// const str = String(num);

// console.log('num =', num);
// console.log('str =', str);

// console.log(String(5));
// console.log(String(true));
// console.log(String(false));
// console.log(String(null));
// console.log(String(undefined));

// console.log('5' + 3);
// console.log(3 + '5');
// console.log('5' + true);
// console.log('5' + false);
// console.log('5' + null);
// console.log('5' + undefined);

const companyName = 'Cyberdyne Systems';
const repairBots = 150;
const defenceBots = 50;

const msg = companyName + ' has ' + (repairBots + defenceBots) + ' bots in stock.';

console.log(msg); // "Cyberdyne Systems has 200 bots in stock"
