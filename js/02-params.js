/*
 * Деструктуризація об'єкта в параметрах функції
 */
// const jacob = {
//   username: 'Jacob',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

//~ Без деструктуризації
// const showUserInfo = user => {
//   console.log(
//     `Hello my name is ${user.username}, I know html - ${user.skills.html}, css - ${user.skills.css} and js -${user.skills.js}`
//   );
// };

// showUserInfo(jacob);

//~ З деструктуризацією
// const showUserInfo = user => {
//   const {
//     username,
//     skills: { html, css, js },
//   } = user;

//   console.log(`Hello my name is ${username}, I know html - ${html}, css - ${css} and js -${js}`);
// };

// showUserInfo(jacob);

//~ Деструктуризація параметрів функції
// const showUserInfo = ({ username, skills: { html, css, js } }) => {
//   // let user = jacob;
//   // let { username, skills: { html, css, js } } = jacob;

//   console.log(`Hello my name is ${username}, I know html - ${html}, css - ${css} and js -${js}`);
// };

// showUserInfo(jacob);
