import { galleryItems } from './gallery-items.js';
// Change code below this line

const pictureContainer = document.querySelector('ul.gallery');
const cardMarkup = createPictureCardsMarup(galleryItems);

pictureContainer.insertAdjacentHTML('beforeend', cardMarkup);


function createPictureCardsMarup(elements) {
    return elements.map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
    })
    .join('');
};

let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionsDelay: 250
});

console.log(galleryItems);
