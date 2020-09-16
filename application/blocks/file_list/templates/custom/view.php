<div class="file-list-custom">
    <?php if ($files): ?>
        <?php foreach ($files as $file): ?>
            <div class="file-list-custom-item">
                <a href="<?php echo $file->getVersion()->getForceDownloadURL(); ?>" title="<?php echo $file->getVersion()->getTitle(); ?>">
                    <span><?php echo $file->getVersion()->getTitle(); ?></span>
                    <span>
                        <?php echo t('Download'); ?>
                        <i class="fa fa-download"></i>
                    </span>
                </a>
            </div>
        <?php endforeach; ?>
    <?php else: ?>
        <?php // if ($c->isEditMode()): ?>
        <h3><?php echo t('block.file_list.empty'); ?></h3>
        <?php // endif; ?>
    <?php endif; ?>
</div>

