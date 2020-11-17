import './index.scss';

function lngOpen() {

  $('.lng-select').click(function() {
    $(this).toggleClass('open-language');
    $('.core-responsive-menu-wrapper').removeClass('open-core-menu')
  });

	// responsive menu open/close
	$('.core-menu-open-close').click(function() {
    $('.lng-select').removeClass('open-language');
	});

};

// --- Ready
$(function() {

  lngOpen();

});

