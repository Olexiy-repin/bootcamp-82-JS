/*
 * - Стек викликів
 * - Порядок виконання
 */

//http://latentflip.com/loupe/
function fn1() {
  console.log('Hello from fn1!');

  console.log('Перед виконанням fn2');
  fn2();
  console.log('Після виконання fn2');
}

function fn2() {
  console.log('Hello from fn2!');

  console.log('Перед виконанням fn3');
  fn3();
  console.log('Після виконання fn3');
}

function fn3() {
  console.log('Hello from fn3!');
}

console.log('Перед виконанням fn1');
fn1();
console.log('Після виконання fn1');
