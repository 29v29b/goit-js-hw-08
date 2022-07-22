// src\js\01-gallery.js

// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const galleryItemContainer = document.querySelector(".gallery");
const imagesMarkup = createGalleryMarkup(galleryItems);
galleryItemContainer.insertAdjacentHTML("beforeend", imagesMarkup);

function createGalleryMarkup(galleryItems) {
return galleryItems.map(({ preview, original, description }) => {
    return `<div >
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
    </a></div>`;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    captionType: "alt",
  });

console.log(galleryItems);
