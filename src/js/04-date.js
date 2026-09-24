/*
 - Створення
 - Unix-час
 - Різниця часу
 - Методи
 - Date.now()
*/
//!=========================================
// const date1 = new Date('10/10/2002');
// const date2 = new Date('1995-05-08');
// const date3 = new Date('03.01.20');
// const date4 = new Date();

// console.log(date1);
// console.log(date1);
// console.log(date2);
// console.log(date3);
// console.log(date4);

//!=========================================
// const date0 = new Date(10000);
// console.log(date0);

// const date1 = new Date('09/24/2026 10:00:00');
// const date2 = new Date('09/24/2026 10:00:05');

// console.log(date2 - date1);
//!=========================================

const date1 = new Date('09/24/2026 10:00:00');

// date1.setFullYear(2030);
// date1.setMonth(28);
// date1.setDate(10000);

// date1.setHours(5);
// date1.setMinutes(12);
// date1.setSeconds(35);

// date1.setTime(0);

// console.log(date1);

// console.log(date1.getFullYear());
// console.log(date1.getMonth());
// console.log(date1.getDate());
// console.log(date1.getDay());

// const date2 = new Date('01/01/2026 00:01:15');

// console.log(date2.getFullYear());
// console.log(date2.getUTCFullYear());

// console.log(date2.getHours());
// console.log(date2.getUTCHours());
//!=========================================

// const initTime = Date.now(); // 11:30:05

// setInterval(() => {
//   const currentTime = Date.now(); // 11:30:08
//   const diff = currentTime - initTime; // 5000
//   console.log(diff);
// }, 1000);

//!=========================================
const date = new Date();

console.log(date.toString());
console.log(date.toLocaleString());
console.log(date.toISOString());
