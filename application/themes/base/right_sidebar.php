<?php $this->inc('elements/header/view.php'); ?>

<div class="contents">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <?php $area = new \Concrete\Core\Area\Area('Main Content'); ?>
                <?php $area->enableGridContainer(); ?>
                <?php $area->display($c); ?>
            </div>
        </div>

        <div class="row">
            <aside class="col-md-8">
                <?php $area = new \Concrete\Core\Area\Area('Content'); ?>
                <?php $area->enableGridContainer(); ?>
                <?php $area->display($c); ?>
            </aside>

            <?php $this->inc('elements/sidebar/sidebar.php', ['c' => $c]); ?>
        </div>
    </div>
</div>

<?php $this->inc('elements/footer/view.php'); ?>
