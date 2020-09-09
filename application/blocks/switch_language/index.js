import './index.scss';

function lngOpen() {

  $('.lng-select').click(function() {
    $(this).toggleClass('open-language');
  });

};

// --- Ready
$(function() {

  lngOpen();

});

