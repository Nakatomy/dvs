<?php $this->inc('elements/header/view.php', [
    'hide_section' => true
]); ?>

<div class="user-management-page">
    <div class="user-management-inside">

        <header class="user-management-header">
            <h2>403</h2>
            <p><?php echo t('Page Forbidden'); ?></p>
            <p><?php echo t('You dont have access to this page'); ?></p>
        </header>

        <div class="user-management-form">
            <?php if ($error): ?>
                <div class="errors">
                    <div class="texts text-center alert alert-warning">
                        <?php foreach ($error->getList() as $e): ?>
                            <p><?php echo $e; ?></p>
                        <?php endforeach; ?>
                    </div>
                </div>
            <?php endif; ?>
        </div>
    </div>
</div>

<?php $this->inc('elements/footer/view.php', [
    'hide_section' => true
]); ?>
