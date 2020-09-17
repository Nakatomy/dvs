import './index.scss'

import './templates/card/template.js'
import './templates/home_media/template.js'
import './templates/case_studies/template.js'
import './templates/case_studies_simple/template.js'

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
