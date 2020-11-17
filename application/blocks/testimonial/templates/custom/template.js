import './template.scss';
import slick from 'slick-carousel';

window.customTestimonialSliderInit = function(bID) {

  var customTestimonialSlider = $('.custom-testimonial-carousel[data-block-id=' + bID + ']');

  if ( customTestimonialSlider.length != 0 ){
    customTestimonialSlider.each(function(){
      $(this).slick({
        accessibility: false,
        nextArrow: '<button type="button" class="slick-button slider-next">Next</button>',
        prevArrow: '<button type="button" class="slick-button slider-prev">Previous</button>',
        appendDots: $(this).parent(),
        slidesToScroll: 3,
        slidesToShow: 3,
        vertical: true,
        verticalSwiping: false,
        infinite: false,
      });

      $(this).on('swipe', function(event, slick, direction) {
        $('html, body').animate({
          scrollTop: $(".custom-testimonial-carousel").offset().top
      }, 2000);
      });
    });
  }
};

// -- Ready
$(function(){
  $('.custom-testimonial-carousel').each(function () {
    var blockId = $(this).data('block-id');
    window.customTestimonialSliderInit(blockId);
  })

  $(".custom-testimonial-wrapper .slick-dots li").click(function (){
    $('html, body').animate({
        scrollTop: $(".main").offset().top - 200
    }, 500);
  });

});
