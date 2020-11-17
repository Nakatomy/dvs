<?php $this->inc('elements/header/view.php'); ?>

<?php $dh = Core::make('helper/date'); /* @var $dh \Concrete\Core\Localization\Service\Date */ ?>

<div class="container">

    <header class="texts text-center pt-4">
        <h1><?php echo t('Profile'); ?></h1>
    </header>

    <div class="row">
        <div class="col-xl-5 col-md-6 mx-auto">

            <div class="text-center">
                <div class="form-group">
                    <?php echo $profile->getUserAvatar()->output(); ?>
                </div>
                <h3><?php echo $profile->getUserName()?></h3>
            </div>

            <hr>

            <div id="ccm-profile-controls">
                <?php if ($canEdit) { ?>
                    <div class="row">
                        <div class="col-md-6 form-group">
                            <a href="<?php echo $view->url('/')?>" class="btn btn-block"><i class="fa fa-arrow-left"></i> <?php echo t('Back to Home')?></a>
                        </div>
                        <div class="col-md-6 form-group">
                            <a href="<?php echo $view->url('/account/edit_profile')?>" class="btn btn-block"><i class="fa fa-cog"></i> <?php echo t('Edit')?></a>
                        </div>
                    </div>
                <?php } ?>
            </div>

            <?php $uaks = UserAttributeKey::getPublicProfileList(); ?>
            <?php foreach($uaks as $ua) { ?>
                <div>
                    <h4><?php echo $ua->getKeyName()?></h4>
                    <?php $r = $profile->getAttribute($ua, 'displaySanitized', 'display'); ?>
                    <?php if ($r) {
                        print $r;
                    } else {
                        print t('None');
                    } ?>
                </div>
            <?php  } ?>

        </div>
    </div>

</div>

<?php $this->inc('elements/footer/view.php'); ?>
