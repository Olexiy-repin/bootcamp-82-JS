const refs = {
  formEl: document.querySelector('.js-hero-form'),
  heroEl: document.querySelector('.js-hero-container'),
};

//!=========================================

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();

  const borys = new FormData(e.target);
  const query = borys.get('query');

  fetchHero(query)
    .then(data => {
      const markup = heroTemplate(data);
      refs.heroEl.insertAdjacentHTML('afterbegin', markup);
    })
    .catch(err => {
      console.log(err);
    });

  e.target.reset();
});

//!=========================================

function fetchHero(query) {
  const BASE_URL = 'https://superhero-search.p.rapidapi.com';
  const END_POINT = '/api/';

  const params = new URLSearchParams({
    hero: query,
  });

  const url = BASE_URL + END_POINT + '?' + params;

  const options = {
    headers: {
      'x-rapidapi-key': '***',
      'x-rapidapi-host': 'superhero-search.p.rapidapi.com',
    },
  };

  return fetch(url, options).then(res => res.json());
}

//!=========================================
function heroTemplate(hero) {
  const { appearance, biography, images, name, powerstats } = hero;
  return `<div class="hero-card card">
  <div class="image-container">
    <img
      src="${images.lg}"
      alt="#"
      class="hero-image"
    />
  </div>
  <div class="hero-body">
    <h4 class="hero-name">${name}</h4>

    <div class="hero-powerstats">
      <p class="hero-bio">FullName - ${biography.fullName}</p>
      <p class="hero-bio">Publisher - ${biography.publisher}</p>
      <p class="hero-bio">Alignment - ${biography.alignment}</p>
      <p class="hero-bio">Gender - ${appearance.gender}</p>
      <p class="hero-bio">Race - ${appearance.race}</p>
    </div>

    <div class="hero-powerstats">
      <span>Power: ${powerstats.power}</span>
      <span>Strength: ${powerstats.strength}</span>
      <span>Speed: ${powerstats.speed}</span>
      <span>Combat: ${powerstats.combat}</span>
    </div>
  </div>
</div>`;
}
//!=========================================
