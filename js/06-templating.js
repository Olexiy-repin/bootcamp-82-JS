// const refs = {
//   title: document.querySelector('.js-title'),
// };

// console.log(refs);

// refs.title.textContent = '<span>My</span> gallery';
// refs.title.innerHTML = '<span class="accent-color">My</span> gallery';

const pictures = [
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/0/700/460',
    alt: 'laptop',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/1/700/460',
    alt: 'developer',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/10/700/460',
    alt: 'forest',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/100/700/460',
    alt: 'beach',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/1000/700/460',
    alt: 'mountain',
  },
];

/*
<li class="gallery-item">
  <a href="#">
    <img src="" alt="" width="" height="">
  </a>
</li>
*/

//~ Функція для створення карточки createGalleryCard(cardInfo)
const createGalleryCard = pictureInfo => {
  return `
  <li class="gallery-item">
    <a href="#">
      <img src="${pictureInfo.url}" alt="${pictureInfo.alt}" width="${pictureInfo.width}" height="${pictureInfo.height}">
    </a>
  </li>
  `;
};

//~ Створення масиву рядків із елементами
const galleryCardsTemplate = pictures.map(pic => createGalleryCard(pic)).join('');

//~ Вставка елементів на сторінку
const refs = {
  galleryList: document.querySelector('.js-gallery'),
};

// refs.galleryList.innerHTML = galleryCardsTemplate;
refs.galleryList.insertAdjacentHTML('beforeend', galleryCardsTemplate);
