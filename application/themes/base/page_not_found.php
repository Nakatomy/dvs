<?php $this->inc('elements/header/view.php', [
    'hide_section' => true
]); ?>

<div class="contents page-not-found relative d-flex justify-content-center align-items-center">
    <div class="logo">
        <a href="./"><img src="<?php echo $this->getThemePath(); ?>/assets/img/dvs-logo.svg" alt=""></a>
    </div>
    <div class="texts text-center">
        <img class="four-oh-four" src="<?php echo $this->getThemePath(); ?>/assets/img/404.svg" alt="404">
        <h6><?php echo t("Sorry, we couldn’t find this page."); ?></h6>
        <a href="./" class="btn" title="<?php echo t('Go to the Home page'); ?>"><?php echo t('Go to the Home page'); ?></a>
    </div>
</div>

<?php $this->inc('elements/footer/view.php', [
    'hide_section' => true
]); ?>
