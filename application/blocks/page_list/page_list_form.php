<div class="row pagelist-form">
    <div class="col-xs-12">

        <input type="hidden" name="pageListToolsDir" value="<?php echo Loader::helper('concrete/urls')->getBlockTypeToolsURL($bt) ?>/"/>

        <?php echo $tabs; ?>

        <div id="ccm-tab-content-option-general" class="ccm-tab-content clearfix">

            <div class="row">
                <div class="col-md-4">
                    <div class="form-group">
                        <?php echo $form->label("pageListTitle", t("Title of Page List")); ?>
                        <?php echo $form->text("pageListTitle", $pageListTitle); ?>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <?php echo $form->label("num", t("Number of Pages to Display")); ?>
                        <?php echo $form->number("num", $num); ?>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <?php echo $form->label("pages_per_row", t('Pages per row')); ?>
                        <?php echo $form->number("pages_per_row", $pages_per_row ? $pages_per_row : 4, ["min" => "0"])?>
                    </div>
                </div>

                <div class="col-md-4">
                    <?php echo $form->label("includeName", t("Include Page Name"))?>
                    <div class="form-group">
                        <label class="control-label">
                            <?php echo $form->radio("includeName", 1, $includeName); ?>
                            <?php echo t("Yes") ?>
                        </label>
                        <label class="control-label">
                            <?php echo $form->radio("includeName", 0, $includeName); ?>
                            <?php echo t("No") ?>
                        </label>
                    </div>
                </div>

                <div class="col-md-4">
                    <?php echo $form->label("includeDescription", t("Include Page Description"))?>
                    <div class="form-group">
                        <label class="control-label">
                            <?php echo $form->radio("includeDescription", 1, $includeDescription); ?>
                            <?php echo t("Yes"); ?>
                        </label>
                        <label class="control-label">
                            <?php echo $form->radio("includeDescription", 0, $includeDescription); ?>
                            <?php echo t("No"); ?>
                        </label>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="form-group">
                        <div class="ccm-page-list-truncate-description" <?php echo ($includeDescription ? "style=\"display:none;\"" : "") ?>>
                            <?php echo $form->label("truncateSummaries", t("Display Truncated Description"))?>
                            <div class="input-group">
                                <span class="input-group-addon">
                                    <?php echo $form->checkbox("truncateSummaries", 1, $truncateSummaries); ?>
                                </span>
                                <?php echo $form->number("truncateChars", $truncateChars); ?>
                                <span class="input-group-addon">
                                    <?php echo t('characters') ?>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <?php echo $form->label("includeDate", t("Include Public Page Date"))?>
                    <div class="form-group">
                        <label class="control-label">
                            <?php echo $form->radio("includeDate", 1, $includeDate); ?>
                            <?php echo t("Yes"); ?>
                        </label>
                        <label class="control-label">
                            <?php echo $form->radio("includeDate", 0, $includeDate); ?>
                            <?php echo t("No"); ?>
                        </label>
                    </div>
                </div>

                <div class="col-md-4 ccm-thumbnail-select">
                    <?php echo $form->label("displayThumbnail", t("Display Thumbnail Image"))?>
                    <div class="form-group">
                        <label class="control-label">
                            <?php echo $form->radio("displayThumbnail", 1, $displayThumbnail); ?>
                            <?php echo t("Yes"); ?>
                        </label>
                        <label class="control-label">
                            <?php echo $form->radio("displayThumbnail", 0, $displayThumbnail); ?>
                            <?php echo t("No"); ?>
                        </label>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="form-group ccm-thumbnail-type">
                        <?php echo $form->label("thumbnail_type", t("Thumbnail Type")); ?>
                        <?php echo $form->select("thumbnail_type", $thumbnail_type_choices, $thumbnail_type); ?>
                    </div>
                </div>

                <div class="col-md-4">
                    <?php echo $form->label("display_tags", t("Display Tags")); ?>
                    <div class="form-group">
                        <label class="control-label">
                            <?php echo $form->radio("display_tags", 1, $display_tags); ?>
                            <?php echo t("Yes"); ?>
                        </label>
                        <label class="control-label">
                            <?php echo $form->radio("display_tags", 0, $display_tags); ?>
                            <?php echo t("No"); ?>
                        </label>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="form-group">
                        <?php echo $form->label("useButtonForLink", t("Use Different Link than Page Name"))?>
                        <div class="form-group">
                            <label class="control-label">
                                <?php echo $form->radio("useButtonForLink", 1, $useButtonForLink); ?>
                                <?php echo t("Yes"); ?>
                            </label>
                            <label class="control-label">
                                <?php echo $form->radio("useButtonForLink", 0, $useButtonForLink); ?>
                                <?php echo t("No"); ?>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="ccm-page-list-button-text" <?php echo ($useButtonForLink ? "" : "style=\"display:none;\"") ?>>
                        <div class="form-group">
                            <?php echo $form->label("buttonLinkText", t('Link Text')); ?>
                            <?php echo $form->text("buttonLinkText", $buttonLinkText); ?>
                        </div>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <?php echo $form->label("noResultsMessage", t("Message to Display When No Pages Listed.")); ?>
                <?php echo $form->textarea("noResultsMessage", $noResultsMessage, ["rows" => 4]); ?>
            </div>

        </div>

        <div id="ccm-tab-content-option-filters" class="ccm-tab-content clearfix">

            <div class="form-group">
                <?php echo $form->label("ptID", t('Page Type')); ?>
                <?php echo $form->select("ptID", $page_types, $ptID); ?>
            </div>

            <?php echo $form->label("cParentID", t('Location')); ?>
            <div class="form-group">
                <label class="control-label">
                    <?php echo $form->radio("cParentID", 0, $cParentID); ?>
                    <?php echo t("Everywhere"); ?>
                </label>
                <label class="control-label">
                    <?php echo $form->radio("cParentID", $c->getCollectionID(), $cParentID); ?>
                    <?php echo t("Beneath this page"); ?>
                </label>
                <label class="control-label">
                    <?php echo $form->radio("cParentID", "OTHER", $isOtherPage); ?>
                    <?php echo t("Beneath another page"); ?>
                </label>
                <label class="control-label">
                    <?php echo $form->checkbox("includeAllDescendents", 1, $includeAllDescendents); ?>
                    <?php echo t("Include all child pages"); ?>
                </label>
                <div class="clearfix"></div>
                <div class="ccm-page-list-page-other" <?php if (!$isOtherPage) { ?> style="display: none" <?php } ?>>
                    <div class="form-group">
                        <?php echo $page_selector->selectPage('cParentIDValue', $isOtherPage ? $cParentID : false); ?>
                    </div>
                </div>
            </div>

            <hr>

            <div>
                <?php echo $form->label("filterDateOption", t("Filter by Public Date"), ["class" => "d-block"]); ?>

                <?php foreach($date_filter_choices as $filterDateOptionHandle => $filterDateOptionLabel): ?>

                    <?php $isChecked = ($filterDateOption == $filterDateOptionHandle) ? 'checked' : ''; ?>

                    <label class="control-label form-group">
                        <input type="radio" class='filterDateOption' name="filterDateOption" value="<?php echo $filterDateOptionHandle?>" <?php echo $isChecked?> />
                        <?php echo $filterDateOptionLabel ?>
                    </label>

                <?php endforeach; ?>

                <?php

                    foreach($date_filter_choices as $filterDateOptionHandle => $filterDateOptionLabel) {
                        $isChecked = ($filterDateOption == $filterDateOptionHandle) ? 'checked' : '';
                    ?>

                        <div class="extras">

                            <?php if ($filterDateOptionHandle == "past"): ?>
                                <div class="filterDateOptionDetail ccm-filter-date-past" data-filterDateOption="past">
                                    <div class="form-group">
                                        <label class="control-label"><?php echo t('Days in the Past')?> <i class="launch-tooltip fa fa-question-circle" title="<?php echo t('Leave 0 to show all past dated pages')?>"></i></label>
                                        <input type="text" name="filterDatePast" value="<?php echo $filterDateDays ?>" class="form-control">
                                    </div>
                                </div>
                            <?php endif; ?>

                            <?php if ($filterDateOptionHandle == "future"): ?>
                                <div class="filterDateOptionDetail ccm-filter-date-future" data-filterDateOption="future">
                                    <div class="form-group">
                                        <label class="control-label"><?php echo t('Days in the Future')?> <i class="launch-tooltip fa fa-question-circle" title="<?php echo t('Leave 0 to show all future dated pages')?>"></i></label>
                                        <input type="text" name="filterDateFuture" value="<?php echo $filterDateDays ?>" class="form-control">
                                    </div>
                                </div>
                            <?php endif; ?>

                            <?php if ($filterDateOptionHandle == "between"): ?>
                                <div class="filterDateOptionDetail ccm-filter-date-between" data-filterDateOption="between">
                                    <?php $datetime = loader::helper('form/date_time'); ?>
                                    <div class="row">
                                        <div class="col-md-3">
                                            <?php echo $datetime->date('filterDateStart', $filterDateStart); ?>
                                        </div>
                                        <div class="col-md-3">
                                            <?php echo $datetime->date('filterDateEnd', $filterDateEnd); ?>
                                        </div>
                                    </div>
                                </div>
                            <?php endif; ?>

                        </div>

                <?php } ?>

            </div>

            <hr>

            <div class="form-group">
                <?php echo $form->label("other_filters", t("Other Filters")); ?>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="">
                        <div class="form-group">
                            <?php echo $form->checkbox("displayFeaturedOnly", 1, $displayFeaturedOnly); ?>
                            <?php echo $form->label("displayFeaturedOnly", t("Featured pages only")); ?>
                        </div>
                        <div class="form-group">
                            <?php echo $form->checkbox("displayAliases", 1, $displayAliases); ?>
                            <?php echo $form->label("displayAliases", t("Display Page Aliases")); ?>
                        </div>
                        <div class="form-group">
                            <?php echo $form->checkbox("ignorePermissions", 1, $ignorePermissions); ?>
                            <?php echo $form->label("ignorePermissions", t("Ignore Page Permissions")); ?>
                        </div>
                        <div class="form-group">
                            <?php echo $form->checkbox("enableExternalFiltering", 1, $enableExternalFiltering); ?>
                            <?php echo $form->label("enableExternalFiltering", t("Enable Other Blocks to Filter This Page List")); ?>
                        </div>
                        <div class="form-group">
                            <?php echo $form->checkbox("exclude_current_page", 1, $exclude_current_page); ?>
                            <?php echo $form->label("exclude_current_page", t('Exclude current page from result set')); ?>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <?php echo $form->checkbox("filter_by_tags", 1, $filter_by_tags); ?>
                        <?php echo $form->label("filter_by_tags", t("Enable tag filtering")); ?>
                    </div>
                    <label class="control-label form-group">
                        <?php echo $form->radio("tag_filter_type", 0, $tag_filter_type); ?>
                        <?php echo t("Filter By Current Page's tags"); ?>
                    </label>
                    <label class="control-label form-group">
                        <?php echo $form->radio("tag_filter_type", 1, $tag_filter_type); ?>
                        <?php echo t("Filter By Custom Tags"); ?>
                    </label>

                    <?php echo $form->textarea('tags', $tags); ?>

                </div>
            </div>

        </div>

        <div id="ccm-tab-content-option-sorting" class="ccm-tab-content">
            <div class="d-flex">
                <div class="col-md-6">
                    <div class="form-group">
                        <?php echo $form->select("orderBy", $ordering_choices, $orderBy); ?>
                    </div>
                </div>
            </div>
        </div>

        <div id="ccm-tab-content-option-pagination" class="ccm-tab-content">
            <div class="d-flex">
                <div class="col-md-12">
                    <div class="form-group">
                        <?php echo $form->checkbox("paginate", 1, $paginate); ?>
                        <?php echo $form->label("paginate", t("Display pagination interface if more items are available than are displayed."))?>
                    </div>
                </div>
            </div>
        </div>

        <div id="ccm-tab-content-option-async-settings" class="ccm-tab-content">
            <div class="d-flex">
                <div class="col-md-6">
                    <div class="form-group">
                        <?php echo $form->label('load_button_text', t('"Load" button text')); ?>
                        <?php echo $form->text('load_button_text', $load_button_text); ?>
                    </div>
                </div>
            </div>
        </div>

        <!-- <div id="ccm-tab-content-option-rss" class="ccm-tab-content">
            <legend><?php // echo t('Output') ?></legend>
            <div class="form-group">
                <?php // echo $form->label("rss", t("Provide RSS Feed")); ?>

                <label class="control-label"><?php // echo t('Provide RSS Feed') ?></label>
                <div class="radio">
                    <?php // echo $form->radio("rss", 1, $rss); ?>
                </div>
                <div class="radio">
                    <label>
                        <input id="ccm-pagelist-rssSelectorOn" type="radio" name="rss" class="rssSelector"
                               value="1" <?php  // echo (is_object($rssFeed) ? "checked=\"checked\"" : "") ?>/> <?php // echo t('Yes') ?>
                    </label>
                </div>
                <div id="ccm-pagelist-rssDetails" <?php // echo (is_object($rssFeed) ? "" : "style=\"display:none;\"") ?>>
                    <?php // if (is_object($rssFeed)) { ?>
                        <?php // echo t('RSS Feed can be found here: <a href="%s" target="_blank">%s</a>', $rssFeed->getFeedURL(), $rssFeed->getFeedURL())?>
                    <?php // } else { ?>
                        <div class="form-group">
                            <label class="control-label"><?php // echo t('RSS Feed Title') ?></label>
                            <input class="form-control" id="ccm-pagelist-rssTitle" type="text" name="rssTitle"
                                   value=""/>
                        </div>
                        <div class="form-group">
                            <label class="control-label"><?php // echo t('RSS Feed Description') ?></label>
                            <textarea name="rssDescription" class="form-control"></textarea>
                        </div>
                        <div class="form-group">
                            <label class="control-label"><?php // echo t('RSS Feed Location') ?></label>
                            <div class="input-group">
                                <span class="input-group-addon"><?php // echo URL::to('/rss')?>/</span>
                                <input type="text" name="rssHandle" value="" />
                            </div>
                        </div>
                    <?php // } ?>
                </div>
            </div>
        </div> -->
    </div>
</div>



<script>
    togglePageListFormParentPageSelectorVisibility($('.pagelist-form input[name="cParentID"][type="radio"]:c.ccm-page-list-page-otherhecked').val());

    $(function () {
        $('.pagelist-form input[name="cParentID"][type="radio"]').on('change', function () {
            togglePageListFormParentPageSelectorVisibility($(this).val());
        });
    });

    // $('input[name="filterDateOption"][value="between"]').prop('checked') == true ? console.log(1) : console.log(2);

    function toggleVisibilty(radioName, targetClass) {
        $('input[name="'+radioName+'"]').prop('checked') == true ? $(targetClass).show() : $(targetClass).hide();
        $('input[name="'+radioName+'"]').on('change', function(){
            $('input[name="'+radioName+'"]').prop('checked') == true ? $(targetClass).show() : $(targetClass).hide();
        });
    }

    function toggleVisibiltyExtra(radioName, targetClass, radioValue) {
        $('input[name="'+radioName+'"][value="'+radioValue+'"]').prop('checked') == true ? $(targetClass).show() : $(targetClass).hide();
        $('input[name="'+radioName+'"]').on('change', function(){
            $(targetClass).hide();
            $('input[name="'+radioName+'"][value="'+radioValue+'"]').prop('checked') == true ? $(targetClass).show() : $(targetClass).hide();
        });
    }

    toggleVisibilty('displayThumbnail', '.ccm-thumbnail-type');
    toggleVisibilty('useButtonForLink', '.ccm-page-list-button-text');

    toggleVisibiltyExtra('filterDateOption', '.ccm-filter-date-past', 'past');
    toggleVisibiltyExtra('filterDateOption', '.ccm-filter-date-future', 'future');
    toggleVisibiltyExtra('filterDateOption', '.ccm-filter-date-between', 'between');

</script>
