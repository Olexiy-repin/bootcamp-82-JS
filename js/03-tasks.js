/*
TODO: Створи функцію getEvenNumbers, яка приймає масив чисел
TODO: та повертає новий масив, що містить лише парні числа.
*/
// const getEvenNumbers = function (numbers) {
//   console.log('numbers =', numbers);

//   const evenNumbers = [];

//   for (const num of numbers) {
//     if (num % 2 === 0) {
//       evenNumbers.push(num);
//     }
//   }

//   return evenNumbers;
// };

// console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));
// console.log(getEvenNumbers([11, 22, 35, 46, 51, 60]));

/*
TODO: Створи функцію findLongestWord, яка приймає масив слів і повертає найдовше слово.
*/
// const findLongestWord = function (words) {
//   let longestWord = words[0];

//   for (let i = 1; i < words.length; i++) {
//     if (words[i].length > longestWord.length) {
//       longestWord = words[i];
//     }
//   }

//   return longestWord;
// };

// console.log(findLongestWord(['cat', 'elephant', 'dog', 'lion']));

/*
TODO: Є масив оцінок grades. Напиши функції для роботи з цим масивом.
TODO: getAverageGrade(studentGrades) - поверта середнє значення.
TODO: getMaxGrade(studentGrades) - повертає найвищу оцінку.
TODO: getMinGrade(studentGrades) - повертає найнижчу оцінку.
*/
// const grades = [85, 92, 67, 45, 78, 90, 55];

// const getAverageGrade = function (studentGrades) {
//   console.log('studentGrades =', studentGrades);

//   let totalGrade = 0;

//   for (const gradeValue of studentGrades) {
//     totalGrade += gradeValue;
//   }

//   const averageGrade = totalGrade / studentGrades.length;

//   return Math.round(averageGrade);
// };

// const getMaxGrade = function (studentGrades) {
//   console.log('studentGrades =', studentGrades);

//   let maxGrade = studentGrades[0];

//   for (let i = 1; i < studentGrades.length; i++) {
//     if (studentGrades[i] > maxGrade) {
//       maxGrade = studentGrades[i];
//     }
//   }

//   return maxGrade;
// };

// const getMinGrade = function (studentGrades) {
//   console.log('studentGrades =', studentGrades);

//   let minGrade = studentGrades[0];

//   for (let i = 1; i < studentGrades.length; i++) {
//     if (studentGrades[i] < minGrade) {
//       minGrade = studentGrades[i];
//     }
//   }

//   return minGrade;
// };

// console.log(getAverageGrade(grades));
// console.log(getMaxGrade(grades));
// console.log(getMinGrade(grades));

/*
TODO: Напиши функцію formatTime(totalMinutes) яка переведе значення
TODO: totalMinutes (кількість хвилин) у рядок у форматі годин та хвилин HH:MM.
*/
// const pad = function (value) {
//   return String(value).padStart(2, '0');
// };

// const formatTime = function (totalMinutes) {
//   console.log('totalMinutes =', totalMinutes);

//   const hours = pad(Math.floor(totalMinutes / 60));
//   const minutes = pad(totalMinutes % 60);

//   return `${hours}:${minutes}`;
// };

// console.log(formatTime(121)); // "01:10"
// console.log(formatTime(450)); // "07:30"

/*
TODO: Напиши функції для роботи з колекцією навчальних курсів courses:
TODO: addCourse(allCourses, courseName) - додає курс в кінець колекції
TODO: removeCourse(allCourses, courseName) - видаляє курс з колекції
TODO: updateCourse(allCourses, courseOldName, courseNewName) - змінює назву курса
*/
// let courses = ['HTML', 'CSS', 'JavaScript', 'React'];

// console.log('courses =', courses);

// const addCourse = function (allCourses, courseName) {
//   if (!allCourses.includes(courseName)) {
//     allCourses.push(courseName);
//   }
// };

//~ removeCourse, яка фільтрує
// const removeCourse = function (allCourses, courseName) {
//   const filteredCourses = [];

//   for (const course of allCourses) {
//     if (course !== courseName) {
//       filteredCourses.push(course);
//     }
//   }

//   return filteredCourses;
// };

//~ removeCourse, яка працює через splice
// const removeCourse = function (allCourses, courseName) {
//   const idxOfCourse = allCourses.indexOf(courseName);

//   allCourses.splice(idxOfCourse, 1);
// };

// const updateCourse = function (allCourses, oldCourseName, newCourseName) {
//   const idxOfCourse = allCourses.indexOf(oldCourseName);

//   allCourses.splice(idxOfCourse, 1, newCourseName);
// };
// addCourse(courses, 'Express');
// console.log('courses =', courses);

// courses = removeCourse(courses, 'React');
// console.log('courses =', courses);

// removeCourse(courses, 'JavaScript');
// console.log('courses =', courses);

// updateCourse(courses, 'HTML', 'HTML Fundamentals');
// console.log('courses =', courses);

// TODO: Напишіть функцію countVowels(str), яка рахує кількість голосних літер (a, e, i, o, u) у рядку.
// const countVowels = function (str) {
//   console.log(str);

//   const vowels = 'aeiouAEIOU';
//   let counter = 0;

//   for (const char of str) {
//     if (vowels.includes(char)) {
//       counter++;
//     }
//   }

//   return counter;
// };

// console.log(countVowels('Hello World!')); // 3
// console.log(countVowels('I love JavaScript!')); // 6
// console.log(countVowels('JavaScript is a lightweight interpreted programming language.')); // 19

/*
TODO: Напиши функцію checkCaseOfLetter(letter), яка буде перевіряти регістр літери.
TODO: В параметр letter будуть передавати рядок із однією літерою.
TODO: Якщо літера знаходиться у верхньому регістрі, то буде повертатися 'upper case' інакше 'lower case'.
*/
// const checkCaseOfLetter = function (letter) {
//   if (letter === letter.toLowerCase()) {
//     return 'lower case';
//   }

//   return 'upper case';
// };

// console.log(checkCaseOfLetter('a')); // 'lower case'
// console.log(checkCaseOfLetter('A')); // 'upper case'

/*
TODO: Напиши функцію changeCaseOfLetters(str), яка буде повертати рядок із зміненим регістром літер.
TODO: В параметр str будуть передавати рядок.
*/
// const changeCaseOfLetters = function (str) {
//   let resultedStr = '';

//   for (const char of str) {
//     if (char === char.toLowerCase()) {
//       resultedStr += char.toUpperCase();
//     } else {
//       resultedStr += char.toLowerCase();
//     }
//   }

//   return resultedStr;
// };

// console.log(changeCaseOfLetters('AbCdE')); // aBcDe
// console.log(changeCaseOfLetters('abc')); // ABC
// console.log(changeCaseOfLetters('CBA')); // cba
