/*
 * Масиви
 *
 * - Створення масиву
 * - Доступ до елементів
 * - Перевизначення значення елемента
 * - Довжина масиву
 * - Індекс останнього елемента
 */
function getIndex() {
  return 0;
}

const courses = ['HTML', 'CSS', 'JS', 'React', 'NodeJS'];

console.log('courses =', courses);

console.log(courses[0]);
console.log(courses[1]);
console.log(courses[2]);

console.log(courses.length);

courses[0] = 'HTML Fundametals';

console.log('courses =', courses);

console.log(courses[courses.length - 1]);
