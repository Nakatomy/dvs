<div class="home-hero-image">
    <?php if ($image_url) : ?>
        <img src="<?php echo $image_url; ?>">
    <?php endif; ?>
</div>
<div class="row home-hero-content">
    <div class="col-12 col-lg-9 d-flex align-items-center">
        <article class="texts">
            <?php echo $content; ?>
        </article>
    </div>
</div>
