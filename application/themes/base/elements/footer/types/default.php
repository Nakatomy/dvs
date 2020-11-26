<footer class="footer">
    <div class="footer-top">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center col-md-3 text-md-left">
                    <?php $area = new GlobalArea('Footer Column 1'); ?>
                    <?php $area->display(); ?>
                </div>
                <div class="col-4 col-md-3">
                    <?php $area = new GlobalArea('Footer Column 2'); ?>
                    <?php $area->display(); ?>
                </div>
                <div class="col-4 col-md-3">
                    <?php $area = new GlobalArea('Footer Column 3'); ?>
                    <?php $area->display(); ?>
                </div>
                <div class="col-4 col-md-3">
                    <?php $area = new GlobalArea('Footer Column 4'); ?>
                    <?php $area->display(); ?>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <div class="container d-block d-md-flex align-items-center justify-content-between">
            <?php $area = new GlobalArea('Footer Bottom'); ?>
            <?php $area->display(); ?>
        </div>
    </div>
</footer>

<button id="tarteaucitronManager" class="cookie-open"><?php echo t("Cookie Settings");?></button>
