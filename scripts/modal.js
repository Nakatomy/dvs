
// General Data
const images = document.querySelectorAll('.section-modal__image');

// Modal Image
const modalWindow = document.querySelector('.modal');
const closeModalWindow = modalWindow.querySelector('.modal__close-button');

// Toggle Any Modal
function toggleModal(modal) {
    const isOpen = modal.classList.contains('modal--opened');
    if (isOpen) {
        document.removeEventListener('keydown', closeOnEsc)
        document.removeEventListener('click', closeByOverlay);
    } else {
        document.addEventListener('keydown', closeOnEsc)
        document.addEventListener('click', closeByOverlay);
    }
    modal.classList.toggle('modal--opened');
};

// Image Modals
function openModalImage(evt) {
    const clickedImage = evt.target;
    toggleModal(modalWindow);
    modalWindow.querySelector('.modal__image').src = clickedImage.src;
}


images.forEach(function (image) {
    image.addEventListener('click', openModalImage);
});


// Close Modal by Overlay & on Esc
function closeByOverlay(evt) {
    if (evt.target.classList.contains('modal')) {
        toggleModal(document.querySelector('.modal--opened'));
    }
};

function closeOnEsc(evt) {
    if (evt.key === 'Escape') {
        toggleModal(document.querySelector('.modal--opened'));
    }
};


// Event Listeners
closeModalWindow.addEventListener('click', () => toggleModal(modalWindow));