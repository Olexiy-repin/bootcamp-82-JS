/*
TODO: Реалізуй пошук автомобілів по сайту
TODO: Користувач потрапляє на сайт і одразу бачить форму для пошуку і картки всіх автомобілів (масив allCars)
TODO: Користувач може ввести в форму назву Марки або Моделі авто і в тегу селект обрати що він ввів Марку або Модель (https://prnt.sc/PkkZZRy_ggtT)
TODO: Після натискання кнопки пошуку (сабміт форми) відмалюй авто які збігаються з критеріями пошуку
 */

const allCars = [
  {
    id: 1,
    brand: 'Audi',
    model: 'A6',
    price: 59000,
    img: 'https://static.wixstatic.com/media/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg/v1/fill/w_520,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg',
  },
  {
    id: 2,
    brand: 'Honda',
    model: 'Civic',
    price: 37000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU',
  },
  {
    id: 3,
    brand: 'Audi',
    model: 'Q7',
    price: 73700,
    img: 'https://cdn.nwi-ms.com/media/ua/A/mc/G8BANAA4/model/front.webp?F=0Q0Q&P=JV&M=&size=L&background=full',
  },
  {
    id: 4,
    brand: 'BMW',
    model: '5 siries',
    price: 37000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU',
  },
  {
    id: 5,
    brand: 'Honda',
    model: 'Accord',
    price: 32000,
    number: '+380000000000',
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg',
  },
  {
    id: 6,
    brand: 'Volvo',
    model: 'XC60',
    price: 85000,
    img: 'https://www.volvocars.com/images/cs/v3/assets/blt0feaa88e629251fc/blt0ae65f577fec4cfb/679260240622b4fee15eea19/Vapour_Grey_Night-16x9.jpg?branch=prod_alias&quality=85&format=auto&iar=0',
  },
];

/*
<li class="car-list-item">
  <img src="" alt="" class="car-list-img" />
  <div class="car-list-text-content">
    <h3 class="car-list-title"></h3>
    <p class="car-list-price"></p>
  </div>
</li>
*/

const refs = {
  carList: document.querySelector('.js-car-list'),
  searchForm: document.querySelector('.js-form'),
};

console.log(refs);

const createCarCardTemplate = carInfo => {
  return `
  <li class="car-list-item">
    <img src="${carInfo.img}" alt="${carInfo.brand}" class="car-list-img" />
    <div class="car-list-text-content">
      <h3 class="car-list-title">${carInfo.brand} ${carInfo.model}</h3>
      <p class="car-list-price">${carInfo.price}$</p>
    </div>
  </li>
  `;
};

const carCardsTemplate = allCars.map(car => createCarCardTemplate(car)).join('');

refs.carList.innerHTML = carCardsTemplate;

const onSearchFormSubmit = event => {
  event.preventDefault();

  const formData = {
    query: refs.searchForm.elements.query.value.trim(),
    option: refs.searchForm.elements.options.value,
  };

  if (formData.query.length === 0) {
    alert('Поле для пошуку має бути заповнене!');

    return;
  }

  if (formData.query.length === 1) {
    alert('Поле для пошуку має складатися мінімум з 2 символів!');

    return;
  }

  // const filteredCars = allCars.filter(car => {
  //   if (formData.option === 'brand') {
  //     return formData.query === car.brand;
  //   } else if (formData.option === 'model') {
  //     return formData.query === car.model;
  //   }
  // });

  const filteredCars = allCars.filter(car => formData.query === car[formData.option]);

  if (filteredCars.length === 0) {
    alert(`${formData.query} не знайдено!`);

    return;
  }

  const carCardsTemplate = filteredCars.map(car => createCarCardTemplate(car)).join('');

  refs.carList.innerHTML = carCardsTemplate;
};

refs.searchForm.addEventListener('submit', onSearchFormSubmit);
