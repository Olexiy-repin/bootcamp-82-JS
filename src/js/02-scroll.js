import { getArticles } from './modules/newsAPI';
import { articlesTemplate } from './templates/render-functions';

const refs = {
  form: document.querySelector('.js-search-form'),
  container: document.querySelector('.js-article-list'),
  target: document.querySelector('.js-target'),
};

//!=========================================

const PAGE_SIZE = 10;
let query;
let currentPage = 1;
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

  checkObserverStatus();
  e.target.reset();
});

//!=========================================

async function handleLoadMore() {
  currentPage += 1;
  checkObserverStatus();

  const res = await getArticles(query, currentPage);
  const markup = articlesTemplate(res.articles);
  refs.container.insertAdjacentHTML('beforeend', markup);
}

const observer = new IntersectionObserver(
  arr => {
    const entry = arr[0];
    if (entry.isIntersecting) {
      handleLoadMore();
    }
  },
  {
    rootMargin: '5000px',
  },
);

function checkObserverStatus() {
  if (currentPage >= totalPages) {
    observer.unobserve(refs.target);
  } else {
    observer.observe(refs.target);
  }
}

//!=========================================
