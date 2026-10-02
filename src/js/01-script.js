import { getArticles } from './modules/newsAPI';
import { articlesTemplate } from './templates/render-functions';

//!=========================================
const refs = {
  form: document.querySelector('.js-search-form'),
  container: document.querySelector('.js-article-list'),
  loadMoreBtn: document.querySelector('.js-btn-load'),
};

//!=========================================

const PAGE_SIZE = 10;
let query;
let currentPage;
let totalPages = 0;

//!=========================================

refs.form.addEventListener('submit', async e => {
  e.preventDefault();

  const formData = new FormData(e.target);
  query = formData.get('query');
  currentPage = 1;

  const res = await getArticles(query, currentPage);
  const markup = articlesTemplate(res.articles);
  refs.container.innerHTML = markup;
  totalPages = Math.ceil(res.totalResults / PAGE_SIZE);

  checkBtnStatus();
  e.target.reset();
});

//!=========================================

refs.loadMoreBtn.addEventListener('click', async () => {
  currentPage += 1;
  checkBtnStatus();

  const res = await getArticles(query, currentPage);
  const markup = articlesTemplate(res.articles);
  refs.container.insertAdjacentHTML('beforeend', markup);

  skipOldNews();
});

function skipOldNews() {
  const elem = refs.container.children[0];
  const height = elem.getBoundingClientRect().height;

  scrollBy({
    top: height + 50 * 2,
    behavior: 'smooth',
  });
}

//!=========================================

function showLoadMoreBtn() {
  refs.loadMoreBtn.classList.remove('hidden');
}
function hideLoadMoreBtn() {
  refs.loadMoreBtn.classList.add('hidden');
}

function checkBtnStatus() {
  console.log('CURRENT PAGE:', currentPage);
  console.log('TOTAL PAGES:', totalPages);

  console.log(
    'Перевіряю статус кнопки. Чи треба ховати?',
    currentPage >= totalPages,
  );
  if (currentPage >= totalPages) {
    hideLoadMoreBtn();
  } else {
    showLoadMoreBtn();
  }
}
