<?php /** @var \Concrete\Package\Testimonial\Src\Entity\TestimonialEntry[] $entries */ ?>

<section class="custom-testimonial-wrapper">
    <?php if (isset($entries)): ?>
        <div class="custom-testimonial-slider content-slider custom-testimonial-carousel" data-block-id="<?php echo $bID; ?>" data-slick="<?php echo $slider_config; ?>">
            <?php foreach ($entries as $entry) : ?>
                <div class="custom-testimonial-slider-item">

                    <div class="row">
                        <div class="col-md-4 d-flex">
                            <div class="custom-testimonial-image mx-auto">
                                <img src="<?php echo $entry->getImage(); ?>" alt="">
                            </div>
                        </div>

                        <div class="col-md-8">
                            <article class="texts margin-bottom-default">
                                <blockquote class="custom-testimonial-paragraph">
                                    <?php echo $entry->getParagraph(); ?>
                                </blockquote>
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
                            </article>
                        </div>
                    </div>

                </div>
            <?php endforeach; ?>
        </div>
    <?php endif; ?>
</section>
