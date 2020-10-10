export const template = item => {
  return `
    <li class="gallery__item">
  <a
    class="gallery__link"
    href="${item.original}"
  >
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>
    `;
};

const modalWindow = document.querySelector('.js-lightbox');
const modalImage = document.querySelector('.lightbox__image');
let imageTarget;

export function openModal(event) {
  if (event.target.nodeName !== 'IMG') return;
  event.preventDefault();
  imageTarget = event.target;

  modalImage.setAttribute('src', event.target.dataset.source);
  modalWindow.classList.add('is-open');
  window.addEventListener('keydown', changeImageInModal);
}

export function closeModal() {
  modalImage.setAttribute('src', '');
  modalWindow.classList.remove('is-open');
  window.removeEventListener('keydown', changeImageInModal);
}

function changeImageInModal(event) {
  switch (event.key) {
    case 'ArrowRight':
      if (imageTarget.parentNode.parentNode.nextElementSibling) {
        let nextImage =
          imageTarget.parentNode.parentNode.nextElementSibling.firstElementChild
            .firstElementChild;

        modalImage.setAttribute('src', nextImage.dataset.source);
        imageTarget = nextImage;
      }
      break;
    case 'ArrowLeft':
      if (imageTarget.parentNode.parentNode.previousElementSibling) {
        let prevImage =
          imageTarget.parentNode.parentNode.previousElementSibling
            .firstElementChild.firstElementChild;

        modalImage.setAttribute('src', prevImage.dataset.source);
        imageTarget = prevImage;
      }
      break;
    case 'Escape':
      closeModal();
      break;
  }
}