import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector(".gallery");
const lightbox = new SimpleLightbox('.gallery a');

function createGallery(images) {
    const markUp = images.map(item => {
        return `
        <li class="cards">
        <a href='${item.largeImageURL}'>
        <img src='${item.webformatURL}' alt='${item.tags}'>
        </a>
        <ul class="image-info">
          <li class="info-item">
            <span class="info-label">Likes</span>
            <span class="info-value">${item.likes}</span>
          </li>

          <li class="info-item">
            <span class="info-label">Views</span>
            <span class="info-value">${item.views}</span>
          </li>

          <li class="info-item">
            <span class="info-label">Comments</span>
            <span class="info-value">${item.comments}</span>
          </li>

          <li class="info-item">
            <span class="info-label">Downloads</span>
            <span class="info-value">${item.downloads}</span>
          </li>
        </ul>
        </li>
        `
    }).join("")
    gallery.insertAdjacentHTML('beforeend', markUp);
    lightbox.refresh();
}


function clearGallery() {
    gallery.innerHTML = "";
}

const loader = document.querySelector(".loader");

function showLoader() {
    loader.classList.add("showLoader")
}

function hideLoader() {
    loader.classList.remove("showLoader")
}

export { createGallery, clearGallery, showLoader, hideLoader };