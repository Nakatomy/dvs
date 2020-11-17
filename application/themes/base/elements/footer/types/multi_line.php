<footer class="footer">

    <div class="footer-top">
        <div class="container justify-content-between">
            <?php $area = new GlobalArea('Footer Content'); ?>
            <?php $area->display(); ?>
        </div>
    </div>

    <div class="footer-bottom">
        <div class="container d-flex justify-content-between align-items-center">
            <p>
                &copy; <?php echo date('Y'); ?> <?php echo Config::get('concrete.site'); ?>
            </p>

            <?php $area = new GlobalArea('Footer Secondary'); ?>
            <?php $area->display(); ?>
        </div>
    </div>

</footer>
