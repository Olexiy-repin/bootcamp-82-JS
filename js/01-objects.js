/*
 * Об'єкти
 *
 * - Створення об'єкта
 * - Доступ до властивостей через крапку
 * - Доступ до властивостей через квадратні дужки
 * - Вкладені властивості
 * - Доступ до вкладених властивостей
 * - Зміна значення властивостей
 * - Додавання властивостей
 */

// const courseHTML = [
//   'HTML',
//   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, voluptatibus.',
//   8,
//   10000,
//   ['Della Zimmerman', 'Barry Hayes'],
// ];

// console.log('courseHTML = ', courseHTML);

const courseHTML = {
  title: 'HTML',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, voluptatibus.',
  rating: 8,
  price: 10000,
  teachers: ['Della Zimmerman', 'Barry Hayes'],
  images: {
    small: 'https://my-site.com/html-small.jpg',
    medium: 'https://my-site.com/html-medium.jpg',
    large: 'https://my-site.com/html-lasrge.jpg',
  },
};

console.log('courseHTML =', courseHTML);

console.log(courseHTML.title);
console.log(courseHTML.rating);

console.log(courseHTML['price']);
console.log(courseHTML['description']);

const getKey = function () {
  return 'teachers';
};

const key = 'teachers';

console.log(courseHTML.key);
console.log(courseHTML[getKey()]);

courseHTML.rating = 9;
courseHTML.test = 'Hello world!';

console.log('courseHTML =', courseHTML);

console.log(courseHTML.images.medium);
console.log(courseHTML['images']['large']);
