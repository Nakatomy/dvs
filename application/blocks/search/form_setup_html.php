<?php

$searchWithinOther=($searchObj->baseSearchPath!=Page::getCurrentPage()->getCollectionPath() && $searchObj->baseSearchPath!='' && strlen($searchObj->baseSearchPath)>0)?true:false;

/**
 * Post to another page, get page object.
 */
$basePostPage = Null;
if (isset($searchObj->postTo_cID) && intval($searchObj->postTo_cID) > 0) {
    $basePostPage = Page::getById($searchObj->postTo_cID);
} else if ($searchObj->pagePath != Page::getCurrentPage()->getCollectionPath() && strlen($searchObj->pagePath)) {
    $basePostPage = Page::getByPath($searchObj->pagePath);
}
/**
 * Verify object.
 */
if (is_object($basePostPage) && $basePostPage->isError()) {
    $basePostPage = NULL;
}
?>

<?php if (!$controller->indexExists()) { ?>
    <div class="ccm-error"><?php echo t('The search index does not appear to exist. This block will not function until the reindex job has been run at least once in the dashboard.')?></div>
<?php } ?>

<fieldset>

    <div class='form-group'>
        <label for='title'><?php echo t('Title')?>:</label>
        <?php echo $form->text('title',$searchObj->title);?>
    </div>

    <div class='form-group'>
        <label for='buttonText'><?php echo t('Button Text')?>:</label>
        <?php echo $form->text('buttonText',$searchObj->buttonText);?>
    </div>
    <div class='form-group'>
        <label for='title' style="margin-bottom: 0px;"><?php echo t('Search for Pages')?>:</label>
        <div class="radio">
            <label class="form-switch-radio">
                <input type="radio" name="baseSearchPath" id="baseSearchPathEverywhere" value="" <?php echo ($searchObj->baseSearchPath=='' || !$searchObj->baseSearchPath)?'checked':''?> onchange="searchBlock.pathSelector(this)" />
                <span class="form-switch-slider" data-true="<?php echo t('Yes'); ?>" data-false="<?php echo t('No'); ?>"></span>
            </label>
            <label for="baseSearchPathEverywhere">
                <?php echo t('Everywhere')?>
            </label>
        </div>
        <div class="radio">
            <label class="form-switch-radio">
                <input type="radio" name="baseSearchPath" id="baseSearchPathThis" value="<?php echo Page::getCurrentPage()->getCollectionPath()?>" <?php echo ( $searchObj->baseSearchPath != '' && $searchObj->baseSearchPath==Page::getCurrentPage()->getCollectionPath() )?'checked':''?> onchange="searchBlock.pathSelector(this)" >
                <span class="form-switch-slider" data-true="<?php echo t('Yes'); ?>" data-false="<?php echo t('No'); ?>"></span>
            </label>
            <label for="baseSearchPathThis">
                <?php echo t('Beneath this Page')?>
            </label>
        </div>
        <div class="radio">
            <label class="form-switch-radio">
                <input type="radio" name="baseSearchPath" id="baseSearchPathOther" value="OTHER" onchange="searchBlock.pathSelector(this)" <?php echo ($searchWithinOther)?'checked':''?>>
                <span class="form-switch-slider" data-true="<?php echo t('Yes'); ?>" data-false="<?php echo t('No'); ?>"></span>
            </label>
            <label for="baseSearchPathOther">
                <?php echo t('Beneath Another Page')?>
            </label>
                <div id="basePathSelector" style="display:<?php echo ($searchWithinOther)?'block':'none'?>" >

                    <?php $select_page = Loader::helper('form/page_selector');
                    if ($searchWithinOther) {
                        $cpo = Page::getByPath($baseSearchPath);
                        if (is_object($cpo)) {
                            print $select_page->selectPage('searchUnderCID', $cpo->getCollectionID());
                        } else {
                            print $select_page->selectPage('searchUnderCID');
                        }
                    } else {
                        print $select_page->selectPage('searchUnderCID');
                    }
                    ?>
                </div>


        </div>
    </div>
    <div class='form-group'>
        <label for='title' style="margin-bottom: 10px;"><?php echo t('Post Results to a Different Page')?>:</label> <br>
        <label class="form-switch">
            <input id="ccm-searchBlock-externalTarget" name="externalTarget" type="checkbox" value="1" <?php echo (strlen($searchObj->resultsURL) || $basePostPage !== NULL)?'checked':''?> />
            <span class="form-switch-slider" data-true="<?php echo t('Yes'); ?>" data-false="<?php echo t('No'); ?>"></span>
        </label>

        <div id="ccm-searchBlock-resultsURL-wrap" class="input" style=" <?php echo (strlen($searchObj->resultsURL) || $basePostPage !== NULL)?'':'display:none'?>" >
            <?php
            if ($basePostPage !== NULL) {
                print $select_page->selectPage('postTo_cID', $basePostPage->getCollectionID());
            } else {
                print $select_page->selectPage('postTo_cID');
            }
            ?>
            <?php echo t('OR Path')?>:
            <?php echo $form->text('resultsURL',$searchObj->resultsURL);?>
        </div>
    </div>
    <div class='form-group'>
        <label for='title' style="margin-bottom: 10px;"><?php echo t('Show Form')?>:</label><br>
        <label class="form-switch">
            <?php echo $form->hidden('show_form', 0); ?>
            <?php echo $form->checkbox('show_form', 1, $show_form); ?>
            <span class="form-switch-slider" data-true="<?php echo t('Yes'); ?>" data-false="<?php echo t('No'); ?>"></span>
        </label>
    </div>
    <div class='form-group'>
        <label for='title' style="margin-bottom: 10px;"><?php echo t('Show Results')?>:</label><br>
        <label class="form-switch">
            <?php echo $form->hidden('showResults', 0); ?>
            <?php echo $form->checkbox('showResults', 1, $searchObj->showResults); ?>
            <span class="form-switch-slider" data-true="<?php echo t('Yes'); ?>" data-false="<?php echo t('No'); ?>"></span>
        </label>
    </div>

</fieldset>
