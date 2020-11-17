<aside class="sidebar col-md-4">
    <?php $area = new Area('Unique Sidebar Top'); ?>
    <?php $area->enableGridContainer(); ?>
    <?php $area->display(); ?>

    <?php $area = new GlobalArea('Sidebar'); ?>
    <?php $area->enableGridContainer(); ?>
    <?php $area->display(); ?>

    <?php $area = new Area('Unique Sidebar Bottom'); ?>
    <?php $area->enableGridContainer(); ?>
    <?php $area->display(); ?>
</aside>

