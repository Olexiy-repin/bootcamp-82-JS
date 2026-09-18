/*
TODO: Деструктуризуй об'єкт таким чином щоб отримати значення username, firstName, lastName
 */
// const user = {
//   id: 1,
//   username: 'harry_potter',
//   profile: {
//     firstName: 'Harry',
//     lastName: 'Potter',
//     age: 25,
//   },
// };

// const {
//   username,
//   profile: { firstName, lastName },
// } = user;

// console.log('user =', user);

// console.log(`Ім'я користувача (за нікнеймом): ${username}`);
// console.log(`Ім'я користувача: ${firstName}`);
// console.log(`Прізвище користувача: ${lastName}`);

/*
TODO: За допомогою глибокої деструктуризації отримай:
TODO:   - statusCode;
TODO:   - id та firstName користувача;
TODO:   - перший пост;
TODO:   - решту постів у масив otherPosts.
*/
// const response = {
//   statusCode: 200,
//   data: {
//     user: {
//       id: 1,
//       firstName: 'Alex',
//     },
//     posts: ['Post 1', 'Post 2', 'Post 3'],
//   },
// };

// const {
//   statusCode,
//   data: {
//     user: { id, firstName },
//     posts: [firstPost, ...otherPosts],
//   },
// } = response;

// console.log('response =', response);
// console.log('statusCode =', statusCode);
// console.log('id =', id);
// console.log('firstName =', firstName);
// console.log('firstPost =', firstPost);
// console.log('otherPosts =', otherPosts);
