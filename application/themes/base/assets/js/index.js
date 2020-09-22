// device / os / broswer
function osAndBrowserAndDeviceInit() {

	// get data
	var $ua = window.navigator.userAgent.toLowerCase();
	var $pl = window.navigator.platform.toLowerCase();
	var $ver = window.navigator.appVersion.toLowerCase();
	var $device = 'desktop';
	var $os = '';
	var $browser = 'unknown-browser';
	var $engine = '';

	// devices
	if ($ua.indexOf('iphone') > -1) {
		var $windowHeight = window.screen.height;
		if ( $windowHeight == 480 ) {
			$device = 'idevice iphone iphone4';
		} else if ( $windowHeight == 568 ) {
			$device = 'idevice iphone iphone5';
		} else if ( $windowHeight == 667 ) {
			$device = 'idevice iphone iphone6or7';
		} else if ( $windowHeight == 736 ) {
			$device = 'idevice iphone iphone6or7plus';
		} else {
			$device = 'idevice iphone';
		}
	} else if($ua.indexOf('ipad') != -1) {
		$device = 'idevice ipad';
	} else if($ua.indexOf('ipod') != -1) {
		$device = 'idevice ipod';
	} else if($ua.indexOf('android') != -1) {
		$device = 'android';
	} else if($ua.indexOf('playbook') != -1) {
		$device = 'blackberry';
	} else {
		// operating systems
		if($ua.indexOf('mac') != -1) {
			$os = 'osx';
		} else if($ua.indexOf('win') != -1) {
			$os = 'windows';
		} else if($ua.indexOf('x11') != -1) {
			$os = 'unix';
		} else if($ua.indexOf('linux') != -1) {
			$os = 'linux';
		}
	}

	// browsers
	if($ua.indexOf('trident/7') != -1) {
		$browser = 'ie ie11';
	} else if ($ua.indexOf('edge') != -1) {
		$browser = 'edge';
	} else if ($ua.match(/opera|opr\//)) {
		$browser = 'opera webkit';
	} else if ($ua.match('crios')) {
		$browser = 'ios-chrome webkit';
	} else if ($ua.indexOf('chrome') != -1) {
		$browser = 'chrome webkit';
	} else if ($ua.indexOf('safari') != -1) {
		$browser = 'safari webkit';
	} else if ($ua.indexOf('firefox') != -1) {
		$browser = 'firefox';
	}

	// engines
	if($ua.indexOf('webkit') != -1) {
		$engine = 'webkit';
	}

	// add class
	var $newclasses = $device + ' ' + $os + ' ' + $browser + ' ' + $engine;
	$('html').addClass($newclasses);

};

// only numbers
function onlyNumbersInit() {

	// get data
	var $onlyNumbers = $('.only-numbers');

	if( $onlyNumbers.length != 0 ) {

		$onlyNumbers.keyup(function() {

			// get data
			var $value = $(this).val();

			// do filtering
			$(this).val($value.replace(/\D/g,''));

		});

	}

};

// bg image
function bgImageInit() {

	// get data
	var $bgImage = $('.bg-image');

	if( $bgImage.length != 0 && (window.navigator.userAgent.toLowerCase().indexOf('trident/7') != -1 || window.navigator.userAgent.toLowerCase().indexOf('edge') != -1) ) {

		$bgImage.each(function() {

			if ( !$(this).hasClass('loaded') ) {

				// get data
				var $imageObject = $(this).find('img');
				if( $imageObject.length != 0 ) {

					var $imageLink = $imageObject.attr('src');
					if( $imageLink.length != 0 ) {

						var $imageAlt = $imageObject.attr('alt');
						var $html = $('html');
						var $styleData = '';
						if( typeof $(this).attr('style') !== 'undefined' ) {
							$styleData = $(this).attr('style');
							if ($styleData.match(/background\-image/)) {
								$styleData = '';
							}
						}

						// setup bg image
						$(this).attr('style', $styleData + 'background-image: url("' + $imageLink + '");');

						// add fake text inside, because some browsers doesn't rendering well the empty elements
						if( typeof $imageAlt != 'undefined' ) {
							$imageObject.after('<span class="bg-image-text">' + $imageAlt + '</span>');
						} else {
							$imageObject.after('<span class="bg-image-text">Image</span>');
						}

						// add loaded class
						$(this).addClass('loaded');

					}

				}

			}

		});
	}

};

// show/hide
function showHideInit() {

	// get data
	var $showHide = $('[data-toggle="show-hide"]');

	if( $showHide.length != 0 ) {

		$showHide.click(function() {

			// get data
			var $target = $(this).data('target');

			// add/remove 'open' class
			if( !$(this).hasClass('open') ) {
				$(this).addClass('open');
				$($target).addClass('open');
			} else {
				$(this).removeClass('open');
				$($target).removeClass('open');
			}

			return false;

		});

	}

	// get data
	var $showHideRemote = $('[data-toggle="show-hide-remote"]');

	if( $showHideRemote.length != 0 ) {

		$showHideRemote.click(function() {

			// get data
			var $target = $(this).data('target');

			// add/remove 'remoted' class
			$('[data-target="'+$target+'"]:first').trigger('click').addClass('remoted');

			return false;

		});

	}

};

// hashtag position
function hashtagPositionsInit($speed, $delay) {

	// get data
	if( typeof $delay !== 'undefined' ) {
		var $delay = $delay;
	} else {
		var $delay = 1000;
	}

	setTimeout(function(){

		// get data
		var $hash = window.location.hash;
		if ( typeof $speed !== 'undefined' ) {
			var $speed = $speed;
		} else {
			var $speed = 500;
		}

		var $modHash = $hash.replace('/', '');

		if ( $hash.length != 0 && $($modHash).length != 0 ) {

			var $itemInfo = $($hash).offset();
			$('html, body').animate({
				scrollTop: $itemInfo.top
			}, $speed);

		}

	}, $delay);

};

// smooth scroll to
function smoothScrollToInit($speed) {

	// get data
	var $smoothScrollTo = $('[data-scroll="smooth-scroll-to"], [target="_self"]');

	if( $smoothScrollTo.length != 0 ) {

		$smoothScrollTo.click(function(){

			// get data
			if ( typeof $speed !== 'undefined' ) {
				var $speed = $speed;
			} else {
				var $speed = 500;
      }

      var $targetID = '#' + $(this).attr('href').split('#')[1];

			if( $($targetID).length != 0 ) {
				var $targetPosition = $($targetID).offset();

				// scrolling animation
				$('html, body').animate({
					scrollTop : $targetPosition.top
				}, $speed, function() {
					if ( !$('html').hasClass('ios-chrome') ){
						location.hash = $targetID;
					}
				});

        return false;

			}

		});

	}

};

// embed responsive layer
function embedResponsiveLayer() {

	// get data
	var $dataEmbedLayer = $('.embed-responsive-iframe[data-layer-text]');

	if( $dataEmbedLayer.length != 0 ) {

		$dataEmbedLayer.each(function() {

			// get text
			var $dataLayerText = $(this).data('layer-text');
			$(this).append('<div class="embed-responsive-layer embed-responsive-layer-iframe d-flex"><p>'+$dataLayerText+'</p></div>');

			// click
			$(this).click(function() {
				var $dataLayer = $(this).find('.embed-responsive-layer-iframe');
				$dataLayer.addClass('fade-out-layer');
				setTimeout(function() {
					$dataLayer.addClass('hidden');
				}, 500);
			});

		})
	}
};

// same height
function sameHeightInit() {

	// get data
	var $sameHeightContainer = $('[data-same-height]');

	if( $sameHeightContainer.length != 0) {

		$sameHeightContainer
			.css('min-height', 'auto')
			.each(function () {

				var $minHeight = 0;

				var $containerID = $(this).data('same-height');

				$('[data-same-height="' + $containerID + '"]').each(function () {

					var $currentHeight = $(this).outerHeight();
					if ($currentHeight >= $minHeight) {
						$minHeight = $currentHeight;
					}

				});

				// tablet + desktop
				if ($(window).width() >= 576) {

					$('[data-same-height="' + $containerID + '"]').css('min-height', $minHeight);

				}

				// mobile
				else {

					$(this).css('min-height', 'auto');

				}

		});

	}

};

// header open
function headerOpenInit() {

  $('.menu-button').click(function() {
    $('html').toggleClass('open-menu');
  });

};

// fixedHeader
function fixedHeader(){

  function toggleFixedClass(){

    var windowTop = $(window).scrollTop();

    if ( windowTop > 0 ){
      $('body').addClass('header-scrolled');
    } else {
      $('body').removeClass('header-scrolled');
    }

  };

  /* if ( $(window).width() >= 1200 ){ */

    toggleFixedClass();

    // scroll event
    $(window).scroll(function(){

      toggleFixedClass();

    });

  /* } */

};

// after resize
var afterResizeInit = (function () {

	var timers = {};
	return function (callback, ms, uniqueId) {
		if (!uniqueId) {
			uniqueId = 'No uniqueId!';
		}
		if (timers[uniqueId]) {
			clearTimeout (timers[uniqueId]);
		}
		timers[uniqueId] = setTimeout(callback, ms);
	};

})();

function infoGraph(){

  $('.infograph-wrapper').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplaySpeed: 6000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    pauseOnFocus: false,
  });

}

$(window).scroll(function (event) {

  if($("#infograph-wrapper").length){
    var infograph = $("#infograph-wrapper").offset().top - $(window).height()/2;
    var scroll = $(window).scrollTop();

    if(scroll >= infograph){
      $('#infograph-wrapper').addClass('autoplay-on');
      $('#infograph-wrapper .animation').addClass('active');
      $('.infograph-wrapper').slick('slickSetOption', {
        'autoplay': true
      }, true);
    }
  }
});

// --- Ready
$(function() {

  $('.menu-content li a').on('click', function(){
    $('html').removeClass('open-menu');
  });

  infoGraph();

	// device / os / broswer
	osAndBrowserAndDeviceInit();

	// only numbers
	// onlyNumbersInit();

	// show/hide
	// showHideInit();

	// embed responsive layer
	embedResponsiveLayer();

	// smooth scroll to
  smoothScrollToInit(500); // setup speed (default: 500)

  headerOpenInit();

  fixedHeader();

});

// --- Load
$(window).on('load', function() {

	// bg image
	bgImageInit();

	// same height
	sameHeightInit();

	// hashtag position
  hashtagPositionsInit(500, 1000); // setup speed and delay (default: 500, 1000)

});

// --- Resize
$(window).on('resize', function() {

	// after resize
	afterResizeInit(function() {

		// same height
		sameHeightInit();

	}, 100);

});

export {afterResizeInit};
