import './template.scss';

$(window).on('load', function(){

  $('.home-hero-content .texts p:last-child').each(function(){
    $(this).html(
      $(this).text().replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span>$2</span>')
    );
  });
});

