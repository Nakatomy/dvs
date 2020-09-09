<?php defined('C5_EXECUTE') or die("Access Denied.");

$responsiveClass  = '16by9';
$sizeDisabled = '';

if ($vWidth && $vHeight) {
	$sizeargs = 'width="' . $vWidth . '" height="' . $vHeight . '"';
	$sizeDisabled = 'style="width:' . $vWidth . 'px; height:' . $vHeight . 'px"';
	$responsiveClass = '';
} elseif ($sizing == '4:3') {
	$responsiveClass  = '4by3';
}

$params = array();

if (isset($playlist)) {
	$params[] = 'playlist='. $playlist;
	$videoID = '';
}

if ($playListID) {
	$params[] = 'listType=playlist';
	$params[] = 'list=' . $playListID;
}

if (isset($autoplay) && $autoplay) {
	$params[] = 'autoplay=1';
}

if (isset($color) && $color) {
	$params[] = 'color=' . $color;
}

if (isset($controls) && $controls != '') {
	$params[] = 'controls=' . $controls;
}

$params[] = 'hl=' . Localization::activeLanguage();

if (isset($iv_load_policy) && $iv_load_policy > 0) {
	$params[] = 'iv_load_policy=' . $iv_load_policy;
}

if (isset($loop) && $loop) {
	$params[] = 'loop=1';
}

if (isset($modestbranding) && $modestbranding) {
	$params[] = 'modestbranding=1';
}

$params[] = 'rel=' . (isset($rel) && $rel ? '1' : '0');

if (isset($showinfo) && $showinfo) {
	$params[] = 'showinfo=1';
}

$paramstring = '?' . implode('&', $params);

if (Page::getCurrentPage()->isEditMode()) { ?>
	<div class="ccm-edit-mode-disabled-item youtubeBlock embed-responsive embed-responsive-<?php echo $responsiveClass; ?>" <?php echo $sizeDisabled; ?>>
		<div class="embed-responsive-info"><?php echo t('YouTube Video disabled in edit mode.'); ?></div>
	</div>
<?php } else { ?>
    <?php if ( $responsiveClass == '' ): ?>
        <iframe <?php echo $sizeargs; ?> class="youtube-iframe" src="https://www.youtube.com/embed/<?php echo $videoID . $paramstring; ?>" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    <?php else:  ?>
        <div id="youtube<?php echo $bID; ?>" class="embed-responsive embed-responsive-<?php echo $responsiveClass; ?> embed-responsive-youtube"
            data-video-id="<?php echo $videoID; ?>"
            data-video-params="<?php echo $paramstring; ?>&autoplay=1"
            data-layer-text-youtube="<i class='fa fa-play'></i>">
        </div>
    <?php endif;  ?>
<?php } ?>
