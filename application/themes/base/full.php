<?php $this->inc('elements/header/view.php'); ?>

<?php
    $c = Page::getCurrentPage();
    $title =                $c->getCollectionName();
    $description =          $c->getCollectionDescription();
    $secondaryTitle =       $c->getAttribute('secondary_title');
?>

<div class="subpage-header">
    <div class="container">
        <article class="texts">
        <?php if ($secondaryTitle): ?>
                <h1><?php echo $secondaryTitle; ?></h1>
            <?php else: ?>
                <h1><?php echo $title; ?></h1>
            <?php endif; ?>
            <p><?php echo $description; ?></p>
        </article>
    </div>
</div>

<div class="contents">
    <?php $area = new Area('Content'); ?>
    <?php $area->enableGridContainer(); ?>
    <?php $area->display($c); ?>
</div>

<?php $this->inc('elements/footer/view.php'); ?>
