<?php defined('C5_EXECUTE') or die("Access Denied."); ?>

<?php

	// grab all tags in use based on the path
	$ak = CollectionAttributeKey::getByHandle('tags');
	$akc = $ak->getController();
	$pp = false;

	$tagCounts = array();

	if ($baseSearchPath != '') {
		$pp = Page::getByPath($baseSearchPath);
    }

	$ttags = $akc->getOptionUsageArray($pp);
    $tags = array();

	foreach($ttags as $t) {
		$tagCounts[] = $t->getSelectAttributeOptionUsageCount();
		$tags[] = $t;
    }

    shuffle($tags);

	$tagSizes = array();
	$count = count($tagCounts);

	foreach($tagCounts as $tagCount => $pos) {
		$tagSizes[$pos] = setFontPx(($pos + 1) / $count);
	}

	function setFontPx($weight) {
		$tagMinFontPx = 10;
		$tagMaxFontPx = 24;
		$em = ($weight * ($tagMaxFontPx - $tagMinFontPx)) + $tagMinFontPx;
		$em = round($em);
		return $em;
	}
?>

<article class="texts margin-bottom-default">
        <h3><?php echo h($title)?></h3>
</article>

<nav id="core-tag-cloud-<?php echo $bID?>" class="core-tag-cloud">

    <ul class="core-tag-cloud-list">
        <?php
            for ($i = 0; $i < $ttags->count(); $i++) {
                $akct = $tags[$i];
                $qs = urlencode($akc->field('atSelectOptionID') . '[]') . '=' . urlencode($akct->getSelectAttributeOptionID());
            ?>
            <li class="core-tag-cloud-list-item">
                <a href="<?php echo $view->url($resultTargetURL)?>?<?php echo $qs?>" title="<?php echo $akct->getSelectAttributeOptionValue()?>" class="core-badge">
                    <?php echo $akct->getSelectAttributeOptionValue()?>
                    <sup>(<?php echo $akct->getSelectAttributeOptionUsageCount()?>)</sup>
                </a>
            </li>
        <?php } ?>
    </ul>

</nav>
