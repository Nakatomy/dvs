<?php
    /** @var array $rows */
    /** @var int $slidesToShow */
    /** @var string $description */
    /** @var string $navigationType */
    /** @var bool $showArrows */
    /** @var bool $showDots */
    /** @var string $aspectRatio */
    $showArrows = $navigationType === 'arrows';
    $showDots = $navigationType === 'dots';
?>

<div class="team-member-list row">
    <?php foreach ($rows as $row) : ?>
        <?php /** @var \Concrete\Package\TeamMemberList\Src\Entity\TeamMemberListEntry $row */ ?>
        <?php $props = $this->controller->getImageProperties($row); ?>

        <div class="col col-lg-4 col-sm-6 col-12">
            <div class="team-member-list-item margin-bottom-grid">

                <<?php echo $row->getLinkURL() ? "a href=" . $row->getLinkURL() . "" : "div" ?>>
                    <div class="bg-image image-container">
                        <img src="<?php echo $props->imageSrc; ?>" alt="">
                    </div>
                    <article class="texts">
                        <h6>
                            <?php echo $row->getName(); ?><br>
                            <small><?php echo $row->getTitle(); ?></small>
                        </h6>
                        <?php echo $row->getDescription(); ?>
                    </article>

                <<?php echo $row->getLinkURL() ? "/a" : "/div" ?>>

            </div>
        </div>

    <?php endforeach; ?>
</div>
