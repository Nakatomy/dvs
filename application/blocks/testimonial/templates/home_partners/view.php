<?php /** @var \Concrete\Package\Testimonial\Src\Entity\TestimonialEntry[] $entries */ ?>

<section class="home-partners-wrapper">
    <?php if (isset($entries)): ?>

        <div class="row margin-bottom-default mr-0 ml-0">
            <?php foreach ($entries as $key => $entry) : ?>
                <?php
                    $first = 0;
                    $last = count($entries);
                ?>
                <?php if ($key == $first || $key == $last - 1): ?>
                <div class="col col-3 col-md-4">
                    <div class="home-partners-image" data-id="<?php echo $key; ?>">
                        <img src="<?php echo $entry->getImage(); ?>" alt="">
                    </div>
                </div>
                <?php else: ?>
                <div class="col col-3 col-md-2">
                    <div class="home-partners-image" data-id="<?php echo $key; ?>">
                        <img src="<?php echo $entry->getImage(); ?>" alt="">
                    </div>
                </div>
                <?php endif; ?>
            <?php endforeach; ?>
        </div>
        <div class="home-partners-slider content-slider home-partners-carousel" data-block-id="<?php echo $bID; ?>" data-slick="<?php echo $slider_config; ?>">

            <?php foreach ($entries as $key => $entry) : ?>
                <?php
                    $last = count($entries);
                ?>
                <div class="home-partners-slider-item" data-id="<?php echo $key; ?>">
                    <div class="row">
                        <div class="col-lg-4">

                            <div class="counter">
                                <p class="mb-0"><span><?php echo $key + 1; ?></span>&nbsp;/&nbsp;<?php echo $last; ?></p>
                            </div>

                            <div class="texts mb-3">
                                <?php if ( $entry->getName() || $entry->getPosition() ): ?>
                                    <h6 class="mb-0">
                                        <?php echo $entry->getName(); ?>
                                    </h6>
                                    <span>
                                        <?php echo $entry->getPosition(); ?>
                                        <?php echo t('at'); ?>

                                        <?php if ( $entry->getCompanyUrl() ): ?>
                                            <a href="<?php echo $entry->getCompanyUrl(); ?>" title="<?php echo $entry->getCompany(); ?>" target="_blank">
                                        <?php endif; ?>

                                        <?php echo $entry->getCompany(); ?>

                                        <?php if ( $entry->getCompanyUrl() ): ?>
                                            </a>
                                        <?php endif; ?>
                                    </span>
                                <?php endif; ?>

                            </div>
                        </div>

                        <div class="col-lg-8">
                            <article class="texts margin-bottom-default">
                                <blockquote class="home-partners-paragraph">
                                    <?php echo $entry->getParagraph(); ?>
                                </blockquote>
                            </article>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>

        </div>
    <?php endif; ?>
</section>
