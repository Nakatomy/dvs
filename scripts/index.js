

// script to scroll smoothly on click on a link

$(document).on('click', 'a[href^="#"]', function (e) {

    var id = $(this).attr('href');


    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top;

    // animated top scrolling
    $('body, html').animate({
        scrollTop: pos
    });
});