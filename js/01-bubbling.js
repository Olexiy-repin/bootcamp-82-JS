/*
 * Спливання подій
 * event.target - цільовий (вихідний) елемент
 * event.currentTarget - поточний елемент, на слухачі якого спіймали подію
 */

const refs = {
  parent: document.querySelector('.js-parent'),
  child: document.querySelector('.js-child'),
  innerChild: document.querySelector('.js-inner-child'),
};

refs.parent.addEventListener('click', event => {
  console.group('Hello from parent click handler!');
  console.log('event.target =', event.target);
  console.log('event.currentTarget =', event.currentTarget);
  console.groupEnd();
});

refs.child.addEventListener('click', event => {
  console.group('Hello from child click handler!');
  console.log('event.target =', event.target);
  console.log('event.currentTarget =', event.currentTarget);
  console.groupEnd();
});

refs.innerChild.addEventListener('click', event => {
  console.group('Hello from inner child click handler!');
  console.log('event.target =', event.target);
  console.log('event.currentTarget =', event.currentTarget);
  console.groupEnd();
});

// console.group('Numbers');
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.groupEnd();

// console.group('Words');
// console.log('Hello');
// console.log('world');
// console.log('!');
// console.groupEnd();
