/*
 * Перебір об'єкта
 *
 * - Цикл for...in
 * - Метод Object.keys
 * - Метод Object.values
 */

// TODO: Порахуйте загальну кількість відгуків.
//~ Через цикл for...in
// const feedbacks = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// console.log('feedbacks =', feedbacks);

// let totalFeedback = 0;

// for (const key in feedbacks) {
//   totalFeedback += feedbacks[key];
// }

// console.log('totalFeedback =', totalFeedback);

//~ Через метод Object.keys()
// const feedbacks = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// console.log('feedbacks =', feedbacks);

// const feedbacksKeys = Object.keys(feedbacks);

// console.log('feedbacksKeys =', feedbacksKeys);

// let totalFeedback = 0;

// for (const key of feedbacksKeys) {
//   totalFeedback += feedbacks[key];
// }

// console.log('totalFeedback =', totalFeedback);

//~ Через метод Object.values()
// const feedbacks = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// console.log('feedbacks =', feedbacks);

// const feedbacksValues = Object.values(feedbacks);

// console.log('feedbacksValues =', feedbacksValues);

// let totalFeedback = 0;

// for (const feedbackValue of feedbacksValues) {
//   totalFeedback += feedbackValue;
// }

// console.log('totalFeedback =', totalFeedback);

//~ Через метод Object.entries()
// const feedbacks = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// console.log('feedbacks =', feedbacks);

// const feedbacksProperties = Object.entries(feedbacks);

// console.log('feedbacksProperties =', feedbacksProperties);

// let totalFeedback = 0;

// for (const prop of feedbacksProperties) {
//   totalFeedback += prop[1];
// }

// console.log('totalFeedback =', totalFeedback);
