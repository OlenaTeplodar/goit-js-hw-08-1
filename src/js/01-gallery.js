import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line

import { galleryItems } from './gallery-items';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryCardsMarkup(galleryItems);

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
function createGalleryCardsMarkup(items) {
    return items
    .map(
        ({
        original,
        preview,
        description,
        }) => `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    )
    .join('');
}

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

galleryContainer.addEventListener('click', onClickGalleryImages);

function onClickGalleryImages(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
    return;
    }
    galleryCreate();
}

const galleryCreate = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});