<?php
use Concrete\Core\Attribute\Key\Key;
use Concrete\Core\Http\ResponseAssetGroup;

$form = Loader::helper('form');

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
$image = date('Ymd') . '.jpg';

/** @var Key[] $required_attributes */
?>

<link href="https://fonts.googleapis.com/css?family=Roboto:400,900" rel="stylesheet">

<div class="webery-login">
    <div class="login-page">
        <header class="login-header">
            <img src="<?php echo $this->getThemePath() ?>/assets/img/brand/webery/webery-logo.svg" alt="">
            <p>Login</p>
        </header>
        <div class="form">
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
