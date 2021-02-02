$(document).ready(function() {
  
    const navbar = document.getElementsByClassName("nav--sticky");
    
  $(window).scroll(function () {
    if ($(window).scrollTop() > 600) {
      $(navbar).removeClass('nav--display-none');
    }
    if ($(window).scrollTop() < 601) {
      $(navbar).addClass('nav--display-none');
    }
  });
});
