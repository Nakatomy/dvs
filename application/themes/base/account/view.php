<?php $this->inc('elements/header/view.php'); ?>

<div class="container">

    <header class="texts text-center pt-4">
        <h1><?php echo t('Account'); ?></h1>
    </header>

    <?php foreach($pages as $p) { ?>
        <hr/>
        <div>
            <a href="<?php echo $p->getCollectionLink()?>"><?php echo h(t($p->getCollectionName()))?></a>
            <?php $description = $p->getCollectionDescription(); ?>
            <?php if ($description) { ?>
                <p><?php echo h(t($description))?></p>
            <?php } ?>
        </div>
    <?php } ?>

    <?php $profileURL = $profile->getUserPublicProfileURL(); ?>

    <?php if ($profileURL) { ?>
        <hr/>
        <div>
            <a href="<?php echo $profileURL?>"><?php echo t("View Public Profile")?></a>
            <p><?php echo t('View your public user profile and the information you are sharing.')?></p>
        </div>
    <?php } ?>

</div>

<?php $this->inc('elements/footer/view.php'); ?>
