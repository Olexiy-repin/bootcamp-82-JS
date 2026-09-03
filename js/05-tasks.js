/*
TODO: Напиши скрипт, який для об'єкта user, послідовно:
TODO: - додає поле mood зі значенням 'happy'
TODO: - замінює значення hobby на 'skydiving'
TODO: - замінює значення premium на false
TODO: - виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
*/
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = !user.premium;

// console.log('user =', user);

//~ Через Object.keys() та for...of
// const userKeys = Object.keys(user);

// console.log('userKeys =', userKeys);

// for (const key of userKeys) {
//   console.log(`${key}: ${user[key]}`);
// }

//~ Через Object.entries() та for...of
// const userProperties = Object.entries(user);

// console.log('userProperties =', userProperties);

// for (const prop of userProperties) {
//   console.log(`${prop[0]}: ${prop[1]}`);
// }

//TODO: Зведіть у квадрат кожен елемент цього об'єкта.
// const coordinates = {
//   x: 2,
//   y: 3,
//   z: 4,
// };

// console.log('coordinates =', coordinates);

// const coordinatesKeys = Object.keys(coordinates);

// console.log('coordinatesKeys =', coordinatesKeys);

// for (const key of coordinatesKeys) {
//   // coordinates[key] = coordinates[key] ** 2;
//   coordinates[key] **= 2;
// }

// console.log('coordinates =', coordinates);

/*
TODO: Є об'єкт student, Знайди середню оцінку студента.
TODO: Після цього:
TODO: якщо середня оцінка >= 90 — виведи "Відмінно";
TODO: якщо >= 75 — "Добре";
TODO: якщо >= 60 — "Задовільно";
TODO: інакше — "Незадовільно".
*/
// const student = {
//   name: 'John',
//   age: 20,
//   grades: [90, 75, 88, 95, 82],
// };

// console.log('student =', student);

// let totalGrade = 0;

// for (const grade of student.grades) {
//   totalGrade += grade;
// }

// console.log('totalGrade =', totalGrade);

// const averageGrade = Math.round(totalGrade / student.grades.length);

// console.log('averageGrade =', averageGrade);

// if (averageGrade >= 90 && averageGrade <= 100) {
//   alert('Відмінно');
// } else if (averageGrade >= 75 && averageGrade < 90) {
//   alert('Добре');
// } else if (averageGrade >= 60 && averageGrade < 75) {
//   alert('Задовільно');
// } else {
//   alert('Незадовільно');
// }

/*
TODO: Є об'єкт user.
TODO: Користувач може отримати доступ до системи, якщо:
TODO: - йому є 18 років або більше;
TODO: - він не заблокований;
TODO: - він підтверджений.
TODO: Виведи відповідне повідомлення.
*/
// const user = {
//   name: 'Alex',
//   age: 22,
//   isBlocked: false,
//   isVerified: true,
// };

// const canAccess = user.age >= 18 && user.isVerified && !user.isBlocked;

// console.log('Доступ -', canAccess);

/*
TODO: Напиши функцію isObjectEmpty(obj), яка перевіряє, чи містить обʼєкт властивості.
*/
// const isObjectEmpty = function (obj) {
//   console.log('obj =', obj);

//   const objKeys = Object.keys(obj);

//   console.log('objKeys =', objKeys);

//   return objKeys.length === 0;
// };

// console.log(isObjectEmpty({})); // true
// console.log(isObjectEmpty({ firstName: 'Dollie', lastName: 'Wright' })); // false

/*
TODO: У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
TODO: підсумовування всіх зарплат і збережіть результат у змінній totalSalary.
TODO: Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
*/
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// console.log('salaries =', salaries);

// let totalSalary = 0;

//~ Object.keys та for...of
// const salariesKeys = Object.keys(salaries);

// console.log('salariesKeys =', salariesKeys);

// for (const key of salariesKeys) {
//   totalSalary += salaries[key];
// }

// console.log('totalSalary =', totalSalary);

//~ Object.values та for...of
// const salariesValues = Object.values(salaries);

// console.log('salariesValues =', salariesValues);

// for (const salaryValue of salariesValues) {
//   totalSalary += salaryValue;
// }

// console.log('totalSalary =', totalSalary);

//~ Object.entries та for...of
// const salariesProperties = Object.entries(salaries);

// console.log('salariesProperties =', salariesProperties);

// for (const prop of salariesProperties) {
//   totalSalary += prop[1];
// }

// console.log('totalSalary =', totalSalary);
