<article class="texts">
    <?php
    $c = Page::getCurrentPage();
    if (!$content && is_object($c) && $c->isEditMode()) { ?>
        <div class="ccm-edit-mode-disabled-item"><?php echo t('Empty Content Block.')?></div>
    <?php } else {
        print $content;
    } ?>
</article>