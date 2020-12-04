import './index.scss';

// embed responsive youtube
function embedResponsiveYoutube() {

	// get data
	var $dataEmbedYoutube = $('.embed-responsive-youtube[data-layer-text-youtube]');

  if( $dataEmbedYoutube.length != 0 ) {

		$dataEmbedYoutube.each(function() {

			var $dataEmbedYoutubeLayerText = $(this).data('layer-text-youtube');
			var $dataEmbedYoutubeParams = $(this).data('video-params');
			var $dataEmbedYoutubeId = $(this).data('video-id');

      $(this).attr('style','background-image: url(http://img.youtube.com/vi/' + $dataEmbedYoutubeId + '/maxresdefault.jpg);');
			$(this).append('<div class="embed-responsive-layer embed-responsive-layer-youtube"><p>' + $dataEmbedYoutubeLayerText + '</p></div>');

			$(this).click(function() {

        var $dataLayer = $(this).find('.embed-responsive-layer-youtube');
        $dataLayer.addClass('fade-out-layer');

        setTimeout(function() {
					$dataLayer.addClass('hide');
				}, 500);

        $(this).append('<iframe src="https://www.youtube.com/embed/' + $dataEmbedYoutubeId + $dataEmbedYoutubeParams +'" frameborder="0" allow="autoplay" allowfullscreen></iframe>');

			});

    });

  }

};

// --- Ready
$(function() {

  embedResponsiveYoutube();

});

