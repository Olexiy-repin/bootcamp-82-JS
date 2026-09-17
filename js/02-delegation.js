/*
 * Додавання прослуховувача подій на кожен елемент
 */

// TODO: Отримай колір квадрата по якому було здійснено клік
// const refs = {
//   boxes: document.querySelectorAll('.js-box'),
// };

// console.log(refs.boxes);

// refs.boxes[0].addEventListener('click', () => {});
// refs.boxes[1].addEventListener('click', () => {});
// refs.boxes[2].addEventListener('clcik', () => {});

/*
  1 Ітерація
  let li = refs.boxes[0];
  li.addEventListener('click', event => {
    console.log(event.currentTarget);
  });

  2 Ітерація
  let li = refs.boxes[1];
  li.addEventListener('click', event => {
    console.log(event.currentTarget);
  });

  3 Ітерація
  let li = refs.boxes[2];
  li.addEventListener('click', event => {
    console.log(event.currentTarget);
  });
*/

// refs.boxes.forEach(li => {
//   li.addEventListener('click', event => {
//     console.log(event.currentTarget.dataset.bgColor);
//   });
// });

/*
 * Дегегування подій
 */

// TODO: Отримай колір квадрата по якому було здійснено клік
const refs = {
  container: document.querySelector('.js-container'),
};

const onBoxCardClick = event => {
  // if (event.target.classList.contains('js-container')) {
  //   return;
  // }

  // if (event.target.nodeName === 'UL') {
  //   return;
  // }

  if (event.target === event.currentTarget) {
    return;
  }

  const boxEl = event.target;

  console.log(boxEl.dataset.bgColor);
};

refs.container.addEventListener('click', onBoxCardClick);
