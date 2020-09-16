<div class="info-card col-4 text-center">
    <?php if ($display_icon) : ?>
        <div class="img-container d-flex align-items-center justify-content-center">
            <i class="<?php echo $icon; ?>"></i>
        </div>
    <?php endif; ?>

    <div class="info-card-body">
        <article class="texts margin-bottom-last-zero">
            <?php if ($title) : ?>
                <span class="text-center"><?php echo h($title); ?></span>
            <?php endif; ?>
        </article>
    </div>
</div>
