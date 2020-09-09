import './stylesheets/loader.scss';

// loader
function loaderInit() {

  // add 'loaded' class
  $('html').addClass('loaded');

  // remove loader
  setTimeout(function(){
    $('.loader').remove();
  }, 1000);

};

// --- Load
$(window).on('load', function() {

	// loader
  loaderInit();

});
