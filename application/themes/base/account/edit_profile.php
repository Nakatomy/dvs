<?php $this->inc('elements/header/view.php'); ?>

<div class="container">

    <header class="texts text-center pt-4">
        <h1><?php echo t('Edit Profile'); ?></h1>
    </header>

    <div class="row">
        <div class="col-xl-5 col-md-6 mx-auto">

            <?php if ($error && $error->has()): ?>
                <div class="errors">
                    <div class="texts text-center alert alert-warning">
                        <?php foreach ($error->getList() as $e): ?>
                            <p><?php echo $e; ?></p>
                        <?php endforeach; ?>
                    </div>
                </div>
            <?php endif; ?>

            <form method="post" action="<?php echo $view->action('save')?>" enctype="multipart/form-data">
                <?php
                    $attribs = UserAttributeKey::getEditableInProfileList();
                    $valt->output('profile_edit');
                ?>
                <fieldset>
                    <div class="texts">
                        <h4 class="mb-0"><?php echo t('Basic Information')?></h4>
                    </div>
                    <div class="form-group">
                        <?php echo $form->label('uEmail', t('Email'))?>
                        <?php echo $form->text('uEmail',$profile->getUserEmail())?>
                    </div>
                    <?php  if (Config::get('concrete.misc.user_timezones')) { ?>
                        <div class="form-group">
                            <?php echo  $form->label('uTimezone', t('Time Zone'))?>
                            <?php echo  $form->select('uTimezone',
                                Core::make('helper/date')->getTimezones(),
                                ($profile->getUserTimezone()?$profile->getUserTimezone():date_default_timezone_get())
                            ); ?>
                        </div>
                    <?php  } ?>
                    <?php  if (is_array($locales) && count($locales)) { ?>
                        <div class="form-group">
                            <?php echo $form->label('uDefaultLanguage', t('Language'))?>
                            <?php echo $form->select('uDefaultLanguage', $locales, Localization::activeLocale())?>
                        </div>
                    <?php  } ?>

                    <?php if(is_array($attribs) && count($attribs)) { ?>
                        <?php
                            $af = Loader::helper('form/attribute');
                            $af->setAttributeObject($profile);
                        ?>
                        <?php foreach($attribs as $ak) { ?>
                            <?php print '<div class="ccm-profile-attribute">'; ?>
                            <?php print $af->display($ak, $ak->isAttributeKeyRequiredOnProfile()); ?>
                            <?php print '</div>'; ?>
                        <?php } ?>
                    <?php } ?>

                </fieldset>

                <hr>

                <fieldset>
                    <div class="texts">
                        <h4 class="mb-0"><?php echo t('Change Password')?></h4>
                    </div>
                    <div class="form-group">
                        <?php echo $form->label('uPasswordNew', t('New Password'))?>
                        <a href="javascript:void(0)" title="<?php echo t("Leave blank to keep current password.")?>"><i class="fa fa-question"></i></a>
                        <?php echo $form->password('uPasswordNew',array('autocomplete' => 'off'))?>
                    </div>
                    <div class="form-group">
                        <?php echo $form->label('uPasswordNewConfirm', t('Confirm New Password'))?>
                        <div class="controls">
                            <?php echo $form->password('uPasswordNewConfirm',array('autocomplete' => 'off'))?>
                        </div>
                    </div>
                </fieldset>

                <hr>

                <div class="row">
                    <div class="col-md-6 form-group">
                        <a href="<?php echo URL::to('/account')?>" class="btn btn-block" /><i class="fa fa-arrow-left"></i> <?php echo t('Back to Account')?></a>
                    </div>
                    <div class="col-md-6 form-group">
                        <div class="form-actions">
                            <button type="submit" name="save" class="btn btn-block btn-success" title=""><i class="fa fa-save"></i> <?php echo t('Save'); ?></button>
                        </div>
                    </div>
                </div>

            </form>

        </div>
    </div>

</div>

<?php $this->inc('elements/footer/view.php'); ?>
