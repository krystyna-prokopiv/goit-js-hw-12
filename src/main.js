
import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

import getImagesByQuery from './js/pixabay-api';

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';
const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formValue = event.target.elements['search-text'].value.trim();
  clearGallery();
  
  if (!formValue) {
    iziToast.show({
      color: 'red',
      position: 'topRight',
      message:
        'Please enter your request!',
    });
    return;
  }
showLoader();
  getImagesByQuery(formValue)
    .then((hits) => {
      if (hits.length == 0) {
        iziToast.show({
          color: 'red',
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }
      createGallery(hits)
      
    })
    .catch(error => {
       iziToast.show({
          color: 'red',
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
    })
    .finally(() => {
      hideLoader();
      event.target.reset();
    });
}