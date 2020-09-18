import './template.scss'

// --- Ready
$(function() {

  var currentLocation = location.hash.split('#')[1];

  console.log(currentLocation);

  $('.media-list .filter-menu p').each(function() {
    var filtertag = $(this).attr('id');

    if(currentLocation == filtertag){
      $(this).addClass('active');
    }

  });

  /* if (window.location.href.indexOf('News') > -1) {
    $(".media-list #News").addClass("active");
  }
  if (window.location.href.indexOf('Pressrelease') > -1) {
    $(".media-list #Pressrelease").addClass("active");
  }
  if (window.location.href.indexOf('Mediacoverage') > -1) {
    $(".media-list #Mediacoverage").addClass("active");
  } */

  $('.media-list .filter-menu p').each(function() {

    if($(this).hasClass('active')){
      var filtertag = $(this).attr('id');
      $('.media-list-item').show();
      $('.media-list-item:not(.' + filtertag + ')').hide();
    }

    $('html, body').animate({
      scrollTop: $(".main").offset().top - 200
    }, 500);


    $(this).click(function(){
      $('.filter-menu p').removeClass('active');
      $(this).addClass('active');
      var filtertag = $(this).attr('id');
      $('.media-list-item').show();
      $('.media-list-item:not(.' + filtertag + ')').hide();
    });
  })
});
