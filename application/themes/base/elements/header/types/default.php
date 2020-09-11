<header class="header header-freeform">
    <div class="container-fluid">
        <div class="col-1">
            <?php $area = new GlobalArea('Header Language Selector'); ?>
            <?php $area->display(); ?>
        </div>
        <div class="col-3">
            <nav class="logo">
                <a href="/<?php echo Localization::activeLanguage(); ?>" title="Digital Vault Services">
                    <img src="<?php echo $this->getThemePath(); ?>/assets/img/dvs-logo.svg" alt="Digital Vault Services">
                    <img src="<?php echo $this->getThemePath(); ?>/assets/img/dvs-logo-inverse.svg" alt="Digital Vault Services">
                </a>
            </nav>
        </div>
        <div class="col-6">
            <?php $area = new GlobalArea('Header Navigation'); ?>
            <?php $area->display(); ?>
        </div>
        <div class="col-2">
            <button type="button" name="menu-button" class="btn menu-button">
                <p><?php echo t('Menu'); ?></p>
                <span class="lines">
                    <span class="line1"></span>
                    <span class="line2"></span>
                </span>
            </button>
        </div>
    </div>
</header>

<aside class="menu-container">
    <div class="row">

        <div class="col-xl-5 offset-xl-1">

            <span><?php echo t('Main navigation'); ?></span>

            <?php $area = new GlobalArea('Main Navigation'); ?>
            <?php $area->display(); ?>

            <span><?php echo t('Contact'); ?></span>

            <?php $area = new GlobalArea('Main Contact'); ?>
            <?php $area->display(); ?>

        </div>

        <div class="col-xl-6">
            <div class="row">
                <div class="col-xl-6">
                    <span><?php echo t('For Investors'); ?></span>
                    <?php $area = new GlobalArea('For Investors'); ?>
                    <?php $area->display(); ?>

                    <span><?php echo t('Media'); ?></span>
                    <?php $area = new GlobalArea('Media'); ?>
                    <?php $area->display(); ?>
                </div>

                <div class="col-xl-6">
                    <span><?php echo t('Contact'); ?></span>
                    <?php $area = new GlobalArea('Contact'); ?>
                    <?php $area->display(); ?>

                    <?php $area = new GlobalArea('Policy'); ?>
                    <?php $area->display(); ?>
                </div>

            </div>
        </div>

    </div>
</aside>
