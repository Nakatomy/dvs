<?php if (is_object($f) && $thumbnail_type): ?>
    <?php if ($linkURL): ?>
        <a href="<?php echo $linkURL; ?>" title="<?php echo $title; ?>" class="d-inline-block">
    <?php endif; ?>
    <img alt="<?php echo $title ?? $altText; ?>" src="<?php echo $f->getRecentVersion()->getThumbnailURL(\Concrete\Core\File\Image\Thumbnail\Type\Type::getByID($thumbnail_type)->getBaseVersion()); ?>" class="img-fluid">
    <?php if ($linkURL): ?>
        </a>
    <?php endif; ?>
<?php else: ?>
    <?php if (Page::getCurrentPage()->isEditMode()): ?>
        <p><?php echo t("Empty image block"); ?></p>
    <?php endif; ?>
<?php endif; ?>
