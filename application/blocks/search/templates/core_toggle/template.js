import './template.scss';

function searchOpen(){

  $('.search-toggle').click(function(){
    $('html').toggleClass('search-open');
  });

};

// --- Ready
$(function() {

  searchOpen();

});

