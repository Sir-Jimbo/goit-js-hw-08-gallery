import galleryItems from './gallery-items.js';
import { template, openModal, closeModal } from './service.js';

const jsGallery = document.querySelector('.js-gallery');
const closeBtn = document.querySelector('.lightbox__button');
const overlay = document.querySelector('.lightbox__overlay');

const galleryItemsMarkup = galleryItems.map(item => template(item)).join('');
jsGallery.insertAdjacentHTML('beforeend', galleryItemsMarkup);

jsGallery.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);