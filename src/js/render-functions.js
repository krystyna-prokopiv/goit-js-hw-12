

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

let lightbox = null

function createGallery(images) {
    const markap = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `<li class='gallery-item'>
        <a  href="${largeImageURL}">
        <img  src="${webformatURL}" alt="${tags}"/></a>
        <ul class="gallery-text-list">
        <li class='gallery-item-text'><h2>Likes</h2>
        <p> ${likes}</p></li>
        <li class='gallery-item-text'>
        <h2>Views</h2>
        <p>${views}</p></li>
        <li class='gallery-item-text'>
        <h2>Comments</h2>
        <p>${comments}</p></li>
        <li class='gallery-item-text'>
        <h2>Downloads</h2>
        <p>${downloads}</p></li></ul>
            </li > `
    ).join("");
    const gallery = document.querySelector(".gallery")
    if (!gallery) {
    return
}

    gallery.insertAdjacentHTML("beforeend", markap)

    if (!lightbox) {
         lightbox = new SimpleLightbox('.gallery a', {
          captionsData: 'alt',
          captionDelay: 250,
        });
    }
    else {
        lightbox.refresh()
    }
   
}


function clearGallery() {
    const gallery = document.querySelector(".gallery")
    if (!gallery) {
        return
    }
    gallery.innerHTML = ""
}

const loader = document.querySelector(".loader")
   

function showLoader() {
    if (!loader) {
        return
    }
     loader.classList.add("visible")
        
}

function hideLoader() {
    if (!loader) {
        return
    }
    loader.classList.remove("visible")
    
}
const btn = document.querySelector(".button-load-more")

function showLoadMoreButton() {
    if (!btn) {
        return
    }
    btn.classList.remove("load-more-hidden")
    
}

function hideLoadMoreButton() {
    if (!btn) {
        return
    }

    
   btn.classList.add("load-more-hidden")
    
}

export { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton}