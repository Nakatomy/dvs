<?php defined('C5_EXECUTE') or die('Access Denied.');
    $token = \Core::make('Concrete\Core\Validation\CSRF\Token');
?>

<?php /** TODO: rename variables to snake case! */ ?>
<?php /** @var string|array $successMsg */ ?>
<?php /** @var bool $displayUserName */ ?>
<?php /** @var bool $registerSuccess */ ?>
<?php /** @var integer|null $rcID */ ?>
<?php /** @var string|null $registerSuccess */ ?>
<?php /** @var Concrete\Core\Validation\CSRF\Token $token */ ?>

<?php $this->inc("elements/header/view.php", [
    "hide_section" => true
]); ?>

<div class="user-management-page">
    <div class="user-management-inside">

        <header class="user-management-header">
            <h1><?php echo t('Registration')?></h1>
        </header>

        <div class="user-management-form">

            <?php $attribs = UserAttributeKey::getRegistrationList(); ?>

            <?php if ($registerSuccess): ?>
                <div class="row">
                    <div>
                        <?php foreach ((array) $successMsg as $message): ?>
                            <?php /** @var string $message */ ?>
                            <p><?php echo $message; ?></p>
                            <p><a href="<?php echo $view->url('/')?>"><?php echo t('Return to Home'); ?></a></p>
                        <?php endforeach; ?>
                    </div>
                </div>

            <?php else: ?>

                <?php if ($error): ?>
                    <div class="errors">
                        <div class="text-center alert alert-danger">
                            <?php foreach ($error->getList() as $error): ?>
                                <p><?php echo $error; ?></p>
                            <?php endforeach; ?>
                        </div>
                    </div>
                <?php endif; ?>

                <form method="post" action="<?php echo $view->url('/register', 'do_register'); ?>">
                    <?php $token->output('register.do_register'); ?>

                    <div class="row">
                        <?php if ($displayUserName): ?>
                            <div class="col-12 form-group">
                                <?php echo $form->text('uName', ['placeholder' => t('Username')]); ?>
                            </div>
                        <?php endif; ?>

                        <div class="col-12 form-group">
                            <?php echo $form->text('uEmail', ['placeholder' => t('E-mail')]); ?>
                        </div>

                        <div class="col-12 form-group">
                            <?php echo $form->password('uPassword', ['autocomplete' => 'off', 'placeholder' => t('Password')]); ?>
                        </div>

                        <div class="col-12 form-group">
                            <?php echo $form->password('uPasswordConfirm', ['autocomplete' => 'off','placeholder' => t('Confirm Password')]); ?>
                        </div>
                    </div>

                    <?php if ($attribs): ?>
                        <div class="row">
                            <?php /** @var Concrete\Core\Form\Service\Widget\Attribute $formAttribute */ ?>
                            <?php $formAttribute = Loader::helper('form/attribute'); ?>
                            <?php /** @var Concrete\Core\Attribute\Key\UserKey $attributeKey */ ?>
                            <?php foreach ($attribs as $attributeKey): ?>
                                <div class="col-md-6">
                                    <?php echo $formAttribute->display($attributeKey, $attributeKey->isAttributeKeyRequiredOnRegister()); ?>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    <?php endif; ?>

                    <?php if (Config::get('concrete.user.registration.captcha')): ?>
                        <div class="row">
                            <div class="col-md-6 col-md-offset-3">
                                <div class="form-group">
                                    <?php /** TODO: fix $captcha->label() method */ ?>
                                    <?php /** @var Concrete\Core\Captcha\Service $captcha */ ?>
                                    <?php $captcha = Loader::helper('validation/captcha'); ?>
                                    <?php echo $captcha->label(); ?>
                                    <?php $captcha->showInput(); ?>
                                    <?php $captcha->display(); ?>
                                </div>
                            </div>
                        </div>
                    <?php endif; ?>

	                <div class="d-flex justify-content-center form-group">
                        <?php echo $form->hidden('rcID', $rcID); ?>
                        <button type="submit" name="register" id="register" class="btn ccm-input-submit" title="">
                            <?php echo t('Register'); ?>
                            <i class="fa fa-angle-double-right"></i>
                        </button>
                    </div>
                </form>

            <?php endif; ?>

        </div>
    </div>
</div>

<?php $this->inc("elements/footer/view.php", [
    "hide_section" => true
]); ?>
