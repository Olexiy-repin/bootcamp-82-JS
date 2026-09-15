/*
 * Типи подій: keypress, keydown, keyup
 * - Обмеження keypress
 * - Властивості key та code
 */

// document.addEventListener('keypress', event => {
//   console.log(`event.code:`, event.code, '/', 'event.key:', event.key);
// });

// document.addEventListener('keydown', event => {
//   console.log(`event.code:`, event.code, '/', 'event.key:', event.key);
// });

// document.addEventListener('keyup', event => {
//   console.log(`event.code:`, event.code, '/', 'event.key:', event.key);
// });

/*
 * Обробка комбінацій клавіш
 */
document.addEventListener('keydown', event => {
  if (event.altKey && event.code === 'KeyD') {
    console.log(event);
  }

  if (event.code === 'KeyF' && (event.metaKey || event.ctrlKey)) {
    event.preventDefault();

    console.log(event);
  }
});
