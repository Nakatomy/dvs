<?php
use Concrete\Core\Attribute\Key\Key;
use Concrete\Core\Http\ResponseAssetGroup;

$form = Core::make("helper/form");

if (isset($authType) && $authType) {
    $active = $authType;
    $activeAuths = array($authType);
} else {
    $active = null;
    $activeAuths = AuthenticationType::getList(true, true);
}
if (!isset($authTypeElement)) {
    $authTypeElement = null;
}

/** @var Key[] $required_attributes */
?>

<?php $this->inc("elements/header/view.php", [
    "hide_section" => true,
    'disable_theme_style_inheritance' => true
]); ?>

<div class="user-management-custom-page texts">
    <div class="user-management-custom-inside">

        <?php if ($logo = Core::make('base.logo')->getLogo()): ?>
            <div class="user-management-custom-logo">
                <img src="<?php echo $logo->getVersion()->getRelativePath(); ?>" class="img-fluid" alt="<?php echo t('Login'); ?>">
            </div>
        <?php endif; ?>

        <header class="user-management-custom-header">
            <h2><?php echo t('Login'); ?></h2>
        </header>

        <div class="user-management-custom-form">
            <?php if ($error): ?>
                <div class="errors">
                    <div class="texts text-center alert alert-warning">
                        <?php foreach ($error->getList() as $e): ?>
                            <p><?php echo $e; ?></p>
                        <?php endforeach; ?>
                    </div>
                </div>
            <?php endif; ?>
            <?php foreach ($activeAuths as $auth): ?>
                <div data-handle="<?php echo $auth->getAuthenticationTypeHandle() ?>" class="authentication-type authentication-type-<?php echo $auth->getAuthenticationTypeHandle() ?>">
                    <?php $auth->renderForm($authTypeElement ?: 'form', $authTypeParams ?: array()) ?>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</div>


<?php $this->inc("elements/footer/view.php", [
    "hide_section" => true
]); ?>
