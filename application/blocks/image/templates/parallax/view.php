<?php defined('C5_EXECUTE') or die("Access Denied.");

$c = Page::getCurrentPage();

if (is_object($f)) {
    if ($maxWidth > 0 || $maxHeight > 0) {
        $im = Core::make('helper/image');
        $thumb = $im->getThumbnail(
            $f,
            $maxWidth,
            $maxHeight
        );
        $tag = new \HtmlObject\Image();
        $tag->src($thumb->src)->width($thumb->width)->height($thumb->height);
    } else {
        $image = Core::make('html/image', array($f));
        $tag = $image->getTag();
    }

    $tag->addClass('img-fluid bID-'.$bID);

    if ($altText) {
        $tag->alt(h($altText));
    } else {
        $tag->alt('');
    }

?>

<div class="parallax-image-container">
    <div class="bg-image bg-image-21by9 bId_<?php echo $bID; ?>">
        <img
            src="<?php echo $tag->src; ?>" alt="" class="parallax-image"
            data-anchor-target=".bId_<?php echo $bID; ?>"
            data-bottom-top="transform:translateY(-20vh)"
            data-top-bottom="transform:translateY(20vh)">
    </div>
</div>

<?php } else if ($c->isEditMode()): ?>

    <div class="ccm-edit-mode-disabled-item"><?php echo t('Empty Image Block.')?></div>

<?php endif; ?>

<?php if(isset($foS) && is_object($foS)) { ?>
    <script>
        $(function() {
            $('.bID-<?php print $bID;?>')
                .mouseover(function(e){$(this).attr("src", '<?php print $imgPath["hover"];?>');})
                .mouseout(function(e){$(this).attr("src", '<?php print $imgPath["default"];?>');});
        });
    </script>
<?php } ?>
