/* eslint-disable max-len */
import onChange from 'on-change';

// const form = document.querySelector('.rss-form');
// const submit = document.querySelector('.div_btn-submit');
const formContainer = document.querySelector('[data-purpose="container"]');
const inputUrl = document.querySelector('.form_input');

export const getWatchedState = (state, render) => onChange(state, render);

export const renderValidateErrors = (path, value) => {
  if (path === 'errors.validateErrors') {
    if (value !== '') {
      // если туда попала ошибка
      inputUrl.classList.add('is-invalid'); // красная рамка вокруг инпута

      const pExample = document.querySelector('.div_p-example');
      if (pExample.nextElementSibling) {
        pExample.nextElementSibling.remove();
      }

      const pInvalid = document.createElement('p'); // вывод ошибки из watchedState.errors.validateErrors
      pInvalid.classList.add(
        'feedback',
        'm-0',
        'position-absolute',
        'small',
        'text-danger',
        'div_p_invalid',
      ); // <p class="feedback m-0 position-absolute small text-danger">Ссылка должна быть валидным URL</p>
      pInvalid.textContent = value;
      formContainer.append(pInvalid);
    }
  }

  if (path === 'rssLinks') {
    inputUrl.value = ''; // очищаем инпут
    inputUrl.focus();
    inputUrl.classList.remove('is-invalid'); // убираем красную рамку вокруг инпута

    const pExample = document.querySelector('.div_p-example');
    if (pExample.nextElementSibling) {
      pExample.nextElementSibling.remove();
    }

    const pValid = document.createElement('p');
    pValid.classList.add(
      'feedback',
      'm-0',
      'position-absolute',
      'small',
      'text-success',
      'div_p_valid',
    ); // <p class="feedback m-0 position-absolute small text-success">RSS успешно загружен</p>
    pValid.textContent = 'RSS успешно загружен';
    formContainer.append(pValid);
  }
};