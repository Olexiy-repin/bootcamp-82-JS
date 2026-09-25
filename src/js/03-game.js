/**
 * Напиши програмне забезпечення для ігрового автомата.
 * Для вирішення завдання використай готову розмітку HTML та базову стилізацію.
 *
 * Після натиснення на кнопку "Start game"
 * в кожному віконці по черзі має з'являтись
 * смайлик з затримкою в 1 секунду ('🤑' або '👿')
 *
 * Під час обробки кожного віконця створи масив з Promis-ами
 * в якому кожен з них буде відповідати за своє віконце,
 * після чого оброби даний масив за допомогою методу Promise.allSettled
 *
 * Після того як всі віконця були заповнені потрібно
 * щоб скріпт автоматично визначав чи гравець переміг, чи ні.
 * Якщо в кожному віконці однаковий смайлик це означає що користувач переміг
 *
 * В поле result виводить повідомлення про статус гри ('Winner' або 'Loser')
 *
 * Після повторного натискання на кнопку "Start game"
 * поле має очищатись, а гра починатись з початку.
 */

const startBtn = document.querySelector('.start-btn');
const container = document.querySelector('.container');
const resultElem = document.querySelector('.result');

//!=========================================

const createPromise = delay => {
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      if (Math.random() >= 0.2) {
        res('🤑');
      } else {
        rej('👿');
      }
    }, delay);
  });

  return promise;
};

//!=========================================

startBtn.addEventListener('click', () => {
  resultElem.textContent = '';
  container.children[0].textContent = '';
  container.children[1].textContent = '';
  container.children[2].textContent = '';
  const promises = [];

  for (let i = 0; i < 3; i++) {
    const promise = createPromise((i + 1) * 300);

    promise
      .then(res => {
        container.children[i].textContent = res;
      })
      .catch(err => {
        container.children[i].textContent = err;
      });

    promises.push(promise);
  }

  Promise.allSettled(promises).then(result => {
    const isLoser = result.some(el => el.status === 'rejected');

    if (isLoser) {
      resultElem.textContent = 'Спробуйте ще раз. Вам обовязково пощастить';
    } else {
      resultElem.textContent = 'Вам щастить, не варто зупинятись.';
    }
  });
});
