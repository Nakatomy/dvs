<div class="row">
    <div class="col-md-12">
        <div class="form-group">
            <?php echo $form->label('label', t('Label')) ?>
            <?php echo $form->text('label', $label) ?>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-md-12">
        <div class="form-group">
            <label for="label" class="control-label"><?php echo t('Exclude languages') ?></label>
        </div>
    </div>
</div>

<?php if ($languages): ?>
    <?php foreach ($languages as $index => $language): ?>
        <div class="row">
            <div class="col-md-2">
                <div class="form-group">
                    <?php echo $language['languageText']; ?>
                </div>
            </div>
            <div class="col-md-10">
                <div class="form-group">
                    <label class="form-switch">
                        <?php echo $form->checkbox('languages['.$language['languageCode'].']', 1, $language['disabled']); ?>
                        <span class="form-switch-slider" data-true="<?php echo t('Yes'); ?>"
                              data-false="<?php echo t('No'); ?>"></span>
                    </label>
                </div>
            </div>
        </div>
    <?php endforeach; ?>
<?php endif; ?>
