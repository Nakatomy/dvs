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