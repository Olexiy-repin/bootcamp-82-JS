import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import {
  createStudent,
  deleteStudent,
  getStudents,
  replaceStudent,
  updateStudent,
} from './api/usersAPI';

//!=========================================
const refs = {
  userListElem: document.querySelector('.js-user-list'),
  createUserForm: document.querySelector('.js-create-form'),
  updateUserForm: document.querySelector('.js-update-form'),
  resetUserForm: document.querySelector('.js-reset-form'),
  deleteUserForm: document.querySelector('.js-delete-form'),
  searchUserForm: document.querySelector('.js-search-form'),
  loader: document.querySelector('.js-loading'),
};

//!=========================================

document.addEventListener('DOMContentLoaded', async e => {
  showLoader();

  try {
    const res = await getStudents();
    const markup = usersTemplate(res.items);
    refs.userListElem.innerHTML = markup;
  } catch (err) {
    showRequestError(err);
  }

  hideLoader();
});

refs.searchUserForm.addEventListener('submit', async e => {
  e.preventDefault();
  showLoader();

  const formData = new FormData(e.target);
  const query = formData.get('query');

  try {
    const res = await getStudents({ lastName: query });
    const markup = usersTemplate(res.items);
    refs.userListElem.innerHTML = markup;
  } catch (err) {
    showRequestError(err);
  }

  hideLoader();
  e.target.reset();
});

refs.createUserForm.addEventListener('submit', async e => {
  e.preventDefault();
  showLoader();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());
  data.enrolled = Boolean(data.enrolled);

  try {
    const res = await createStudent(data);
    const markup = userTemplate(res);
    refs.userListElem.insertAdjacentHTML('afterbegin', markup);
  } catch (err) {
    showRequestError(err);
  }

  hideLoader();
});

refs.resetUserForm.addEventListener('submit', async e => {
  e.preventDefault();
  showLoader();

  const formData = new FormData(e.target);
  const { userId, ...data } = Object.fromEntries(formData.entries());
  data.enrolled = Boolean(data.enrolled);

  try {
    const res = await replaceStudent(userId, data);
    const markup = userTemplate(res);
    const oldElem = document.querySelector(`[data-id="${userId}"]`);
    oldElem.outerHTML = markup;
  } catch (err) {
    showRequestError(err);
  }

  hideLoader();
  e.target.reset();
});

refs.updateUserForm.addEventListener('submit', async e => {
  e.preventDefault();
  showLoader();
  const formData = new FormData(e.target);
  const { userId, ...data } = Object.fromEntries(formData.entries());
  data.enrolled = Boolean(data.enrolled);

  for (const key in data) {
    if (!data[key]) {
      data[key] = undefined;
    }
  }

  try {
    const res = await updateStudent(userId, data);
    const markup = userTemplate(res);
    const oldElem = document.querySelector(`[data-id="${userId}"]`);
    oldElem.outerHTML = markup;
  } catch (err) {
    showRequestError(err);
  }

  hideLoader();
  e.target.reset();
});

refs.userListElem.addEventListener('click', async e => {
  if (!e.target.classList.contains('user-delete-button')) {
    return;
  }

  showLoader();
  try {
    const userId = e.target.dataset.id;
    await deleteStudent(userId);
    const liElem = e.target.closest('li');
    liElem.remove();

    const students = await getStudents();
    const markup = usersTemplate(students.items);
    refs.userListElem.innerHTML = markup;
  } catch (err) {
    showRequestError(err);
  }

  hideLoader();
});

//!=========================================
function userTemplate({
  _id,
  firstName,
  lastName,
  major,
  cohortYear,
  enrolled,
  gpa,
}) {
  return `<li class="card user-item" data-id="${_id}">
        <div class="user-photo-placeholder" aria-label="User photo placeholder">
          <span>FL</span>
        </div>
        <div class="user-card-body">
          <div class="user-card-header">
            <div>
              <h3 class="user-title">${firstName} ${lastName}</h3>
              <p class="user-major">${major}</p>
            </div>
            <span class="user-status">${enrolled}</span>
          </div>

          <div class="user-meta">
            <p>
              <span>Cohort</span>
              <strong>${cohortYear}</strong>
            </p>
            <p>
              <span>GPA</span>
              <strong>${gpa}</strong>
            </p>
          </div>

          <button class="btn button user-delete-button" data-id="${_id}">Delete</button>
        </div>
      </li>`;
}

function usersTemplate(arr) {
  return arr.map(userTemplate).join('\n\n\n\n');
}

//!=========================================

function showLoader() {
  refs.loader.classList.remove('hidden');
  refs.userListElem.classList.add('hidden');
}
function hideLoader() {
  refs.loader.classList.add('hidden');
  refs.userListElem.classList.remove('hidden');
}

function showRequestError(error) {
  const message = error.response.data.message;
  iziToast.error({
    title: 'Request Error',
    message,
  });
}
