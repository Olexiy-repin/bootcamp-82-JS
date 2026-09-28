const formElem = document.querySelector('.js-binance-form');
const infoElem = document.querySelector('.js-binance-info');

//!=========================================

formElem.addEventListener('submit', e => {
  e.preventDefault();

  const borys = new FormData(e.target);
  const userValue = borys.get('query'); // 'BTCUSDT'

  fetchPrice(userValue).then(data => {
    const markup = symbolTemplate(data);
    infoElem.innerHTML = markup;
  });
});

//!=========================================

function fetchPrice(userValue) {
  const BASE_URL = 'https://binance43.p.rapidapi.com';
  const END_POINT = '/ticker/price';
  const params = new URLSearchParams({
    symbol: userValue,
  });

  const url = `${BASE_URL}${END_POINT}?${params}`;

  const headers = {
    'x-rapidapi-key': '***',
    'x-rapidapi-host': 'binance43.p.rapidapi.com',
  };

  return fetch(url, { headers }).then(res => res.json());
}

//!=========================================

function symbolTemplate(obj) {
  const icon = obj.symbol.toLowerCase().replace('usdt', '');
  obj.price = Number(obj.price).toFixed(2);
  return `
  <img
      class="coin-logo"
      src="https://assets.coincap.io/assets/icons/${icon}@2x.png"
    />
  <span class="coin-title">${obj.symbol}</span>
  <span class="coin-price">${obj.price}</span>`;
}
