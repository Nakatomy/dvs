<div class="team-card card text-center">

    <?php if ($display_icon || $display_image) : ?>
        <div class="img-container margin-bottom-default d-flex h-100 align-items-center justify-content-center" data-same-height="service-card">
            <?php if ($display_icon): ?>
                <i class="<?php echo $icon; ?>"></i>
            <?php endif; ?>
            <?php if ($display_image): ?>
                <div>
                    <img class="card-img-top" src="<?php echo $thumbnail; ?>" alt="<?php echo $title; ?>">
                </div>
            <?php endif; ?>
        </div>
    <?php endif; ?>

    <div class="team-card-body d-flex h-100 align-items-center justify-content-center">
        <article class="texts margin-bottom-last-zero">
            <?php if ($title) : ?>
                <h3 class="text-center"><?php echo h($title); ?></h3>
            <?php endif; ?>
            <?php if ($description) : ?>
                <?php echo $description; ?>
            <?php endif; ?>
            <?php if ($display_link && $page): ?>
                <a href="<?php echo $page->getCollectionPointerExternalLink() ?? $page->getCollectionPath(); ?>" <?php echo $page->getCollectionPointerExternalLink() != '' ? 'target="blank"' : ''; ?>>
                    <?php echo $link_text; ?>
                </a>
            <?php endif; ?>
        </article>
    </div>

</div>
