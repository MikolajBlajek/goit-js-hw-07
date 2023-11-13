import { galleryItems } from './gallery-items.js';
// Change code below this line 

const containerGalleryItems = document.querySelector("ul.gallery");  
containerGalleryItems.addEventListener(`click`, (event) => {
    event.preventDefault(); 
       if (event.target.tagName === 'IMG') {
        const source = event.target.dataset.source;
        const lightbox = basicLightbox.create(`
            <img src="${source}" />
        `);
        lightbox.show();
    }
});
 
const images = galleryItems.map((item) => {
    return `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img
                class="gallery__image"
                src="${item.preview}"
                data-source="${item.original}"
                alt="${item.description}"
            />
        </a>
    </div>`;
    });
 
containerGalleryItems.insertAdjacentHTML(`beforeend`, images.join("")); 


