/*
 * - Подія input
 * - Подія blur
 * - Подія change
 */

// const refs = {
//   textField: document.querySelector('.js-user-name'),
//   policyCheckbox: document.querySelector('.js-policy-checkbox'),
// };

/*
TODO: Виводь в консоль все що користувач вводить в input
*/
// refs.textField.addEventListener('input', () => {
//   console.log(refs.textField.value);
// });

/*
TODO: Користувач вводить в input своє ім'я після втрати
TODO: фокусу отримує alert з повідомленням-привітанням
 */
// refs.textField.addEventListener('blur', () => {
//   const textFieldValue = refs.textField.value;

//   if (textFieldValue.length < 2) {
//     alert('Імʼя має складатися мінімум з 2 символів!');

//     return;
//   }

//   alert(`Вітаю ${textFieldValue}!`);
// });

// refs.textField.addEventListener('change', () => {
//   const textFieldValue = refs.textField.value;

//   if (textFieldValue.length < 2) {
//     alert('Імʼя має складатися мінімум з 2 символів!');

//     return;
//   }

//   alert(`Вітаю ${textFieldValue}!`);
// });

/*
TODO: Після того, як користувач активує чекбокс, виводиться alert
*/
// refs.policyCheckbox.addEventListener('change', () => {
//   if (refs.policyCheckbox.checked) {
//     alert('Done!');
//   }
// });
