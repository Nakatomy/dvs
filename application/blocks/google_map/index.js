import './index.scss';

$('.map-layer').on('click', function(){

  const thisElem = $(this);

  thisElem.removeClass('active');

  setTimeout(function(){
    thisElem.remove();
  }, 1000);

});
