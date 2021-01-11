// script to scroll smoothly on click on link

$(document).on('click', 'a[href^="#"]', function(e) {

    var id = $(this).attr('href');
    

    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    
    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();
    
    // top position relative to the document
    var pos = $id.offset().top;
    
    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
});



// window.onscroll = function() {myFunction()};

// var navbar = document.getElementsByClassName("nav--sticky");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.scrollTop > 300) {
//     navbar.classList.remove("nav--display-none")
//   } else {
//     navbar.classList.add("nav--display-none");
//   }
// }



$(document).ready(function() {
  
    const navbar = document.getElementsByClassName("nav--sticky");
    
  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
    //   console.log($(window).scrollTop())
    if ($(window).scrollTop() > 600) {
      $(navbar).removeClass('nav--display-none');
    }
    if ($(window).scrollTop() < 601) {
      $(navbar).addClass('nav--display-none');
    }
  });
});


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