/*
 * Промісифікація:
 * - Проблема доступу до результату проміса з колбеком
 * - Функція, яка повертає проміс
 */
//!=========================================

// function createPromise(message, delay, isFulfilled) {
//   const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//       if (isFulfilled) {
//         res(message);
//       } else {
//         rej(message);
//       }
//     }, delay);
//   });

//   return promise;
// }

// const p1 = createPromise('P1 (7000)', 7000, false);
// const p2 = createPromise('P2 (1000)', 1000, false);
// const p3 = createPromise('P3 (5000)', 5000, true);
// const p4 = createPromise('P4 (2000)', 2000, false);

// p1.then(data => {
//   console.log('✅', data);
// }).catch(error => {
//   console.log('❌', error);
// });

// p2.then(data => {
//   console.log('✅', data);
// }).catch(error => {
//   console.log('❌', error);
// });

// p3.then(data => {
//   console.log('✅', data);
// }).catch(error => {
//   console.log('❌', error);
// });

// p4.then(data => {
//   console.log('✅', data);
// }).catch(error => {
//   console.log('❌', error);
// });

//!=========================================
/*
 * Промісифікація «синхронних» функцій
 * - Promise.resolve()
 * - Promise.reject()
 */

// function getArr() {
// const arr = [1, 2, 3];

// const promise = new Promise((res)=>{
//   res(arr)
// })

// return Promise.resolve(arr);
// }

// function getStr() {
//   return Promise.resolve('Hello world');
// }

// const p = getStr();

// p.then(data => {
//   console.log(data);
// }).catch(error => {
//   console.log(error);
// });

//!=========================================

// function getFilteredArr(arr) {
//   const copy = arr.filter(el => el > 10);
//   return copy; // [15,12,74]
// }

// getFilteredArr([15, 2, 12, 6, 74, 3]).forEach(el => {
//   console.log(el);
// });

//!=========================================

function createPromise(message, delay, isFulfilled) {
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      if (isFulfilled) {
        res(message);
      } else {
        rej(message);
      }
    }, delay);
  });

  return promise;
}

// createPromise('Hello', 2000, true)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

const p1 = createPromise('P1 (7000)', 4000, false);
const p2 = createPromise('P2 (1000)', 1000, true);
const p3 = createPromise('P3 (5000)', 1000, false);
const p4 = createPromise('P4 (2000)', 2000, true);

const promises = [p1, p2, p3, p4];

//!=========================================

// Promise.all(promises)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

//!=========================================

// Promise.race(promises)
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//!=========================================

// Promise.allSettled(promises).then(res => {
//   console.log(res);
// });
