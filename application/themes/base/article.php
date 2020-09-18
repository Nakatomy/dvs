<?php $this->inc('elements/header/view.php'); ?>

<?php
    $dh = Core::make('helper/date');
    $c = Page::getCurrentPage();
    $title =                $c->getCollectionName();
    $description =          $c->getCollectionDescription();
    $secondaryTitle =       $c->getAttribute('secondary_title');
?>

<div class="subpage-header">
    <div class="container">
        <div class="row">
            <div class="col-md-10 offset-md-2">
                <div class="subpage-top texts d-flex">
                    <p class="date mr-5"><?php echo $dh->formatCustom('d M Y', $c->getCollectionDatePublic()); ?></p>
                    <p class="category"><?php echo $c->getAttribute('media_category'); ?></p>
                </div>
                <article class="texts text-left">
                <?php if ($secondaryTitle): ?>
                        <h1><?php echo $secondaryTitle; ?></h1>
                    <?php else: ?>
                        <h1><?php echo $title; ?></h1>
                    <?php endif; ?>
                </article>
            </div>
        </div>
    </div>
</div>

<div class="contents">

    <div class="container">
        <?php if ($c->getAttribute("thumbnail")): ?>
            <div class="col-12 margin-bottom-default">
                <div class="bg-image bg-image-21by9">
                    <img class="img-fluid" src="<?php echo $c->getAttribute("thumbnail")->getRecentVersion()->getRelativePath(); ?>">
                </div>
            </div>
        <?php endif; ?>

        <div class="col-12 col-md-10 mx-auto">
            <?php $area = new Area('Content'); ?>
            <?php $area->enableGridContainer(); ?>
            <?php $area->display($c); ?>
        </div>

    </div>

    <div class="background-dark-wrapper">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <?php $area = new GlobalArea('Article Bottom Title'); ?>
                    <?php $area->display(); ?>
                </div>
                <div class="col-md-8">
                    <?php $area = new GlobalArea('Article Bottom News'); ?>
                    <?php $area->display(); ?>
                </div>
            </div>
        </div>
    </div>

</div>

<?php $this->inc('elements/footer/view.php'); ?>
