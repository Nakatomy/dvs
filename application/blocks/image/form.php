<fieldset>
    <legend><?php echo t('File')?></legend>

    <div class="form-group">
        <?php echo $form->label('fID', t('Image'))?>
        <?php echo Core::make('helper/concrete/asset_library')->image('ccm-b-image', 'fID', t('Choose Image'), $fID);?>
    </div>
    <div class="form-group">
        <?php echo $form->label('thumbnail_type', t('Thumbnail Type'))?>
        <?php echo $form->select('thumbnail_type', Core::make("thumbnail_type_choice_list")->getChoices(), $thumbnail_type); ?>
    </div>
</fieldset>

<fieldset>
    <legend><?php echo t('HTML')?></legend>

    <div class="form-group">
        <?php echo $form->label('imageLinkType', t('Image Link'))?>
        <select name="linkType" id="imageLinkType" class="form-control" style="width: 60%;">
            <option value="0" <?php echo (empty($externalLink) && empty($internalLinkCID) ? 'selected="selected"' : '')?>><?php echo t('None')?></option>
            <option value="1" <?php echo (empty($externalLink) && !empty($internalLinkCID) ? 'selected="selected"' : '')?>><?php echo t('Another Page')?></option>
            <option value="2" <?php echo (!empty($externalLink) ? 'selected="selected"' : '')?>><?php echo t('External URL')?></option>
        </select>
    </div>
    <div id="imageLinkTypePage" style="display: none;" class="form-group">
        <?php echo $form->label('internalLinkCID', t('Choose Page:'))?>
        <?php echo Core::make('helper/form/page_selector')->selectPage('internalLinkCID', $internalLinkCID); ?>
    </div>
    <div id="imageLinkTypeExternal" style="display: none;" class="form-group">
        <?php echo $form->label('externalLink', t('URL'))?>
        <?php echo $form->text('externalLink', $externalLink); ?>
    </div>
    <div class="form-group">
        <?php echo $form->label('altText', t('Alt. Text'))?>
        <?php echo $form->text('altText', $altText); ?>
    </div>
    <div class="form-group">
        <?php echo $form->label('title', t('Title'))?>
        <?php echo $form->text('title', $title); ?>
    </div>
</fieldset>

<script type="text/javascript">
    refreshImageLinkTypeControls = function() {
        var linkType = $('#imageLinkType').val();
        $('#imageLinkTypePage').toggle(linkType == 1);
        $('#imageLinkTypeExternal').toggle(linkType == 2);
    }

    $(document).ready(function() {
        $('#imageLinkType').change(refreshImageLinkTypeControls);
        refreshImageLinkTypeControls();
    });
</script>
