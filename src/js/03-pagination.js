import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { getPokemons } from './modules/pokemonApi';

const refs = {
  formElem: document.querySelector('.js-search-form'),
  pokemonListElem: document.querySelector('.js-pokemon-list'),
  pagination: document.querySelector('.js-pagination'),
};

//!=========================================

document.addEventListener('DOMContentLoaded', async () => {
  const res = await getPokemons(1);
  const markup = pokemonsTemplate(res);
  refs.pokemonListElem.innerHTML = markup;
});

//!=========================================
const pagination = new Pagination(refs.pagination, {
  totalItems: 1351,
  itemsPerPage: 9,
  visiblePages: 3,
  page: 1,
  centerAlign: false,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
});

pagination.on('afterMove', async event => {
  const currentPage = event.page;
  const res = await getPokemons(currentPage);
  const markup = pokemonsTemplate(res);
  refs.pokemonListElem.innerHTML = markup;
});

//!=========================================
function pokemonTemplate({
  sprites,
  name,
  id,
  weight,
  height,
  base_experience,
  order,
}) {
  return `<li class="card pokemon">
  <img
    class="pokemon-img"
    src="${sprites.front_default}"
    alt="#"
  />
  <div class="pokemon-header">
    <h4 class="pokemon-title">${name}</h4>
    <span class="pokemon-id">#${(id + '').padStart(5, '0')}</span>
  </div>

  <div class="pokemon-desc">
    <span>Weight: ${weight}</span>
    <span>Height: ${height}</span>
    <span>Experience: ${base_experience}</span>
    <span>Order: ${order}</span>
  </div>

  <div class="pokemon-footer"></div>
</li>`;
}
function pokemonsTemplate(arr) {
  return arr.map(pokemonTemplate).join('');
}
