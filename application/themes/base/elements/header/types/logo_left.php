<header class="header">
    <div class="container">

        <?php $area = new GlobalArea("Logo"); ?>
        <?php $area->display($c); ?>

        <div class="navigation">
            <div class="d-flex justify-content-end align-items-center">
                <?php $area = new GlobalArea('Header Primary Content'); ?>
                <?php $area->display(); ?>
            </div>
        </div>

    </div>
</header>
