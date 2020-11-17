<?php
defined('C5_EXECUTE') or die('Access Denied.');

$searchPathValue = [$baseSearchPath];

if ($query && isset($_REQUEST['search_paths']) && is_array($_REQUEST['search_paths'])) {
    $searchPathValue = $_REQUEST['search_paths'];
}
?>

<?php if ($error) : ?>
    <?php echo $error; ?><br/><br/>
<?php endif; ?>

<form action="<?php echo URL::to($resultTargetURL); ?>" method="get" class="core-search-toggle ccm-search-block-form">

    <?php foreach ($searchPathValue as $search_path) : ?>
        <input name="search_paths[]" type="hidden" value="<?php echo htmlentities($search_path, ENT_COMPAT, APP_CHARSET); ?>"/>
    <?php endforeach; ?>

    <input type="text" name="query" placeholder="<?php echo t('Search'); ?>" value="<?php echo htmlentities($query, ENT_COMPAT, APP_CHARSET); ?>" class="form-control ccm-search-block-text"/>

    <input type="submit" name="submit" value="<?php echo h($buttonText); ?>" class="hidden ccm-search-block-submit"/>
    <button type="button" class="btn search-toggle" title="Search"><i class="fa fa-search"></i></button>

</form>

<?php if ($showResults && isset($do_search) && $do_search) : ?>

    <?php if (count($results) == 0) : ?>
        <h4 class="texts text-center"><?php echo t('There were no results found. Please try another keyword or phrase.') ?></h4>
    <?php else : ?>
        <?php $tt = Core::make('helper/text'); ?>
        <br><br><br><br>
        <div class="list-group">
            <?php foreach ($results as $r) : ?>
                <?php $currentPageBody = $this->controller->highlightedExtendedMarkup($r->getPageIndexContent(), $query); ?>
                <a href="<?php echo $r->getCollectionLink() ?>"
                   class="list-group-item list-group-item-action flex-column align-items-start">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">
                            <?php echo $r->getCollectionName() ?>
                        </h5>
                    </div>
                    <p>
                        <?php if ($r->getCollectionDescription()) : ?>
                            <?php echo $this->controller->highlightedMarkup($tt->shortText($r->getCollectionDescription()), $query); ?>
                        <?php endif; ?>
                        <?php echo $currentPageBody; ?>
                    </p>
                </a>
            <?php endforeach; ?>
        </div>
        <?php
        $pages = $pagination->getCurrentPageResults();

        if ($pagination->getTotalPages() > 1 && $pagination->haveToPaginate()) {
            $showPagination = true;
            echo $pagination->renderDefaultView();
        }
        ?>

    <?php endif; ?>
<?php endif; ?>
