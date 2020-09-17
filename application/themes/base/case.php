<?php $this->inc('elements/header/view.php'); ?>

<?php
    $c = Page::getCurrentPage();
    $title =                $c->getCollectionName();
    $description =          $c->getCollectionDescription();
    $secondaryTitle =       $c->getAttribute('secondary_title');
?>

<div class="subpage-header case-studies">
    <div class="container">
        <div class="row">
            <div class="col-md-11 col-lg-9 mx-auto">
                <article class="texts">
                    <p class="case-header"><?php echo t('Case Studies'); ?></p>
                    <?php if ($secondaryTitle): ?>
                        <h1><?php echo $secondaryTitle; ?></h1>
                    <?php else: ?>
                        <h1><?php echo $title; ?></h1>
                    <?php endif; ?>
                    <p><?php echo $description; ?></p>
                </article>
            </div>
        </div>
        <div class="bg-image bg-image-16by9">
            <img src="<?php echo $c->getAttribute("thumbnail")->getRecentVersion()->getRelativePath(); ?>" alt="">
        </div>
    </div>
</div>

<div class="contents">
    <div class="container">
        <div class="row">
            <div class="col-md-10 mx-auto">
                <?php $area = new Area('Content'); ?>
                <?php $area->enableGridContainer(); ?>
                <?php $area->display($c); ?>
            </div>
        </div>
    </div>
</div>
<div class="bg-color-theme-primary">
    <div class="container padding-vertical-lg">
        <?php $area = new GlobalArea('Case Bottom Content'); ?>
        <?php $area->display($c); ?>
    </div>
</div>

<?php $this->inc('elements/footer/view.php'); ?>
