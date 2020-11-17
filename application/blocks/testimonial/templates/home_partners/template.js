import './template.scss';
import slick from 'slick-carousel';

window.homePartnersSliderInit = function(bID) {

  var homePartnersSlider = $('.home-partners-carousel[data-block-id=' + bID + ']');

  if ( homePartnersSlider.length != 0 ){
    homePartnersSlider.each(function(){
      $(this).slick({
        accessibility: false,
        nextArrow: '<button type="button" class="slick-button slider-next"><i class="fa fa-angle-right"></i></button>',
        prevArrow: '<button type="button" class="slick-button slider-prev"><i class="fa fa-angle-left"></i></button>',
        appendDots: $(this).parent(),
        slidesToScroll: 1,
        slidesToShow: 1,
        adaptiveHeight: true,
        fade: true,
      });
    });

    $('.home-partners-image').click(function(){
      $('.home-partners-image').parent().removeClass('active');
      $(this).parent().addClass('active');
      var thisId = $(this).data('id');
      homePartnersSlider.slick('slickGoTo', thisId);
    });
  }
};

// -- Ready
$(function(){
  $('.home-partners-carousel').each(function () {
    var blockId = $(this).data('block-id');
    window.homePartnersSliderInit(blockId);
  })
});
