<?php /** @var \Concrete\Package\ImageGallery\Src\Entity\ImageGalleryEntry[] $rows */ ?>

<div class="partners-gallery d-flex <?php echo $text_position == 'on' ? 'text-on-slider' : ''; ?>">
    <?php foreach ($rows as $row) : ?>
        <?php
            switch ($slides_to_show){
                case 1:  $gridItem = 'col-md-12'; break;
                case 2:  $gridItem = 'col-md-6'; break;
                case 3:  $gridItem = 'col-lg-4 col-md-6'; break;
                case 4:  $gridItem = 'col-md-3'; break;
                case 5:  $gridItem = 'col col-custom-5'; break;
                case 6:  $gridItem = 'col-md-2'; break;
                default: $gridItem = 'col'; break;
            }
        ?>

        <div class="<?php echo $gridItem; ?> no-padding-horizontal partners-gallery-item">

            <?php if ($row->getButtonText() == ''): ?>

                <?php if ($row->getLinkURL()): ?>
                    <a href="<?php echo $row->getLinkURL() ?>" class="image-link" <?php if ($row->getBlankLink()): ?> target="_blank" <?php endif; ?>>
                <?php elseif ($is_fancybox == 1): ?>
                    <a href="<?php echo $row->getImageUrl(); ?>" class="fancybox-link" data-fancybox="gallery_<?php echo $bID; ?>">
                <?php endif; ?>

            <?php endif; ?>

                <div class="wrapper">
                    <div class="front">
                        <div class="inner">
                            <img src="<?php echo $row->getThumbnail('hd'); ?>" alt="" class="img-fluid">
                        </div>
                    </div>
                    <div class="back">
                        <div class="inner">
                            <article class="texts texts-color-white margin-bottom-last-zero">
                                <?php if ($row->getTitle() != ''): ?>
                                    <h4><?php echo $row->getTitle(); ?></h4>
                                <?php endif; ?>
                                <?php if ($row->getDescription() != ''): ?>
                                    <?php echo $row->getDescription(); ?>
                                <?php endif; ?>
                            </article>
                        </div>
                    </div>
                </div>

            <?php if ($row->getButtonText() == ''): ?>
                <?php if ($row->getLinkURL() != '' || $is_fancybox == 1): ?>
                    </a>
                <?php endif; ?>
            <?php endif; ?>

        </div>
    <?php endforeach; ?>
</div>
