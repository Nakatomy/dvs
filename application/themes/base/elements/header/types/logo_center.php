<header class="header header-logo-centered">
    <div class="container">

        <div class="navigation">
            <div class="d-flex justify-content-lg-start justify-content-center align-items-center relative">
                <?php $area = new GlobalArea('Header Primary Content'); ?>
                <?php $area->display(); ?>
            </div>
        </div>

        <div class="logo-holder">
            <div class="d-flex justify-content-center align-items-center">
                <?php $area = new GlobalArea("Logo"); ?>
                <?php $area->display($c); ?>
            </div>
        </div>

        <div class="navigation">
            <div class="d-flex justify-content-lg-end justify-content-center align-items-center relative">
                <?php $area = new GlobalArea('Header Secondary Content'); ?>
                <?php $area->display(); ?>
            </div>
        </div>

    </div>
</header>
