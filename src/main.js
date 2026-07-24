// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';

const form = document.querySelector(".form");

function handleSubmit(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.currentTarget);
    const query = formData.get("search-text").trim();

    if (query === "") {
        return
    }
    clearGallery();
    showLoader();
    getImagesByQuery(query).then(response => {
        if (response.hits.length === 0) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
                class: 'custom-error-toast',
            });
            return
        }
        createGallery(response.hits);
    }).catch((error) => {
        iziToast.error({
            title: 'Error',
            message: 'Something went wrong. Please try again later!',
            position: 'topRight',
            class: 'custom-error-toast',
        });
    }).finally(() => hideLoader());

}

form.addEventListener("submit", handleSubmit)