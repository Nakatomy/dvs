<?php
defined('C5_EXECUTE') or die("Access Denied.");

$f = $controller->getFileObject();
$c = Page::getCurrentPage();

$fp = new Permissions($f);
?>

<?php if ($f && $fp->canViewFile()) : ?>
    <a href="<?php echo ($forceDownload ? $f->getForceDownloadURL() : $f->getDownloadURL()); ?>" title="<?php echo stripslashes($controller->getLinkText()) ?>">
        <?php if ($icon) : ?>
            <i class="fa <?php echo $icon; ?>"></i>
        <?php endif; ?>
        <?php echo stripslashes($controller->getLinkText()) ?>
    </a>
<?php endif; ?>

<?php if (!$f && $c->isEditMode()) : ?>
    <div class="ccm-edit-mode-disabled-item">
        <?php echo t('Empty File Block.'); ?>
    </div>
<?php endif; ?>
