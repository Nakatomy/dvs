<?php $this->inc('elements/header/view.php'); ?>

<div class="contents">
    <?php $area = new \Concrete\Core\Area\Area('Content'); ?>
    <?php $area->enableGridContainer(); ?>
    <?php $area->display($c); ?>
</div>

<?php $this->inc('elements/footer/view.php'); ?>
