import { galleryItems } from './gallery-items.js';
// Change code below this line 
const galleryContainer = document.querySelector("#gallery");

  const galleryHTML = galleryItems.map(item => {
    return `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
          />
        </a>
      </li>`;
  }).join('');

galleryContainer.innerHTML = galleryHTML; 
  
  const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,        
    captionDelay: 250,      
    captionsData: 'alt',    
    captionsPosition: 'bottom', 
});