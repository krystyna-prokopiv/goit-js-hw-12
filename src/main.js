
import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

import getImagesByQuery from './js/pixabay-api';

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';
const form = document.querySelector('.form');
const btn = document.querySelector(".button-load-more")

form.addEventListener('submit', handleSubmit);
btn.addEventListener('click', onLoadMore)

let page = 1
let formValue = ''
let totalPages = 0
const perPage = 15

function handleSubmit(event) {
  event.preventDefault();

 formValue = event.target.elements['search-text'].value.trim();
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
   getImagesByQuery(formValue, page)
    .then(({hits, totalHits}) => {
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
      totalPages = Math.ceil(totalHits / perPage) 
      

      if (page < totalPages) {
        showLoadMoreButton()
      } 
      
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

async function onLoadMore(ev) {
  page++
  btn.disabled = true
  
  try {
    showLoader();
    const data = await getImagesByQuery(formValue, page) 
    createGallery(data.hits)
    
    if (page >= totalPages) {
      hideLoadMoreButton()
      iziToast.show({
          color: 'blue',
          position: 'topRight',
          message:
           " We're sorry, but you've reached the end of search results.",
        });
    }
    const card = document.querySelector(".gallery-item")
    const cardHeight = card.getBoundingClientRect().height
    window.scrollBy({
  top: cardHeight,
  behavior: "smooth",
});
  }
  catch (error){
     iziToast.show({
          color: 'red',
          position: 'topRight',
          message:
            'Sorry, there are no images.',
        });
  }
  finally {
    hideLoader()
    btn.disabled = false
  }
  
}