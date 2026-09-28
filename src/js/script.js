import './modules/binance';
import './modules/hero';
import './modules/quotes';
import './modules/ipfinder';
import './modules/pokemon';
import './modules/instagram';
import './modules/user';

//!=========================================

// function fetchUser(userId) {
//   const BASE_URL = 'https://jsonplaceholder.typicode.com';
//   const END_POINT = `/users/${userId}`;
//   const url = BASE_URL + END_POINT;
//   fetch(url);
// }

// fetchUser(1);
// fetchUser(3);
// fetchUser(5);
// fetchUser(7);
// fetchUser(9);

//!=========================================

function fetchHero(hero) {
  const BASE_URL = 'https://superhero-search.p.rapidapi.com';
  const END_POINT = '/api/';

  const params = new URLSearchParams({
    hero: hero,
  });

  const headers = {
    'x-rapidapi-key': '***',
    'x-rapidapi-host': 'superhero-search.p.rapidapi.com',
    test: 'Hello world',
  };

  const url = `${BASE_URL}${END_POINT}?${params}`;

  const res = fetch(url, { headers });
}

//!=========================================

/* function getPostsByUser(userId) {
  const BASE_URL = 'https://jsonplaceholder.typicode.com';
  const END_POINT = '/posts';
  const PARAMS = `?userId=${userId}`;
  const url = BASE_URL + END_POINT + PARAMS;

  const options = {
    headers: {
      test_header: 'Volodka',
    },
  };

  return fetch(url, options).then(res => res.json());
} */
