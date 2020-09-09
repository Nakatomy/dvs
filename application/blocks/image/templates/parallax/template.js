import './template.scss'
import skrollr from 'skrollr';


// parallax js
function parallaxJsInit() {

  var parallaxContainer = $('.parallax-image-container');

  var parallaxElem = $('.parallax-image');

	if( parallaxElem.length != 0 && $(window).width() >= 1200 ) {

    parallaxElem
      .attr('data-bottom-top','transform:translateY(-20vh);')
      .attr('data-top-bottom','transform:translateY(20vh);')

    var s = skrollr.init({
      smoothScrolling: false,
      forceHeight: false
    });

    // fix the overflow issue
    parallaxContainer.siblings().addClass('bg-color-background').addClass('relative')

    setTimeout(function(){
      s.refresh(parallaxElem);
    }, 500);

  }

};


$(window).on('load',function(){

  parallaxJsInit();

});
