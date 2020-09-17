import './template.scss'

// --- Ready
$(function() {

  $('.filter-menu p').each(function() {

    $('.filter-menu p:first-child').addClass('active');

    if($(this).hasClass('active')){
      var filtertag = $(this).attr('id');
      $('.home-media-list-item').show();
      $('.home-media-list-item:not(.' + filtertag + ')').hide();
    }


    $(this).click(function(){
      $('.filter-menu p').removeClass('active');
      $(this).addClass('active');
      var filtertag = $(this).attr('id');
      $('.home-media-list-item').show();
      $('.home-media-list-item:not(.' + filtertag + ')').hide();
    });
  })

});
