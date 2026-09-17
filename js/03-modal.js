const refs = {
  modalOpenBtn: document.querySelector('.js-modal-open'),
  backdrop: document.querySelector('.js-backdrop'),
  modalCloseBtn: document.querySelector('.js-modal-close'),
};

const closeModal = () => {
  refs.backdrop.classList.remove('is-open');

  refs.modalCloseBtn.removeEventListener('click', onModalCloseBtnClick);
  refs.backdrop.removeEventListener('click', onBackdropClick);
  document.removeEventListener('keydown', onEscKeyPressed);
};

const onModalCloseBtnClick = event => {
  closeModal();
};

const onBackdropClick = event => {
  if (event.target === event.currentTarget) {
    closeModal();
  }
};

const onEscKeyPressed = event => {
  if (event.code === 'Escape') {
    closeModal();
  }
};

const onModalOpenBtnClick = event => {
  refs.backdrop.classList.add('is-open');

  refs.modalCloseBtn.addEventListener('click', onModalCloseBtnClick);
  refs.backdrop.addEventListener('click', onBackdropClick);
  document.addEventListener('keydown', onEscKeyPressed);
};

refs.modalOpenBtn.addEventListener('click', onModalOpenBtnClick);
