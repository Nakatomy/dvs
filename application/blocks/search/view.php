<?php if ($show_form): ?>
    <?php $this->inc("elements/search_form.php", [
        "title"                 => $title,
        "query"                 => $query,
        "form"                  => $form,
        "baseSearchPath"        => $baseSearchPath,
        "searchPaths"           => $searchPaths,
        "buttonText"            => $buttonText,
        "resultTargetFullURL"   => $resultTargetFullURL
    ]); ?>
<?php endif; ?>

<?php if ($showResults && $do_search): ?>
    <?php if (!$results) : ?>
        <?php $this->inc("elements/no_results.php"); ?>
    <?php else: ?>
        <?php $this->inc("elements/results.php", [
            "results"           => $results,
            "display_thumbnail" => $display_thumbnail
        ]); ?>
        <?php $this->inc("elements/pagination.php", [
            "pagination" => $pagination
        ]); ?>
    <?php endif; ?>
<?php else: ?>
    <?php if ($c->isEditMode()): ?>
        <h3>Empty Search Block</h3>
    <?php endif; ?>
<?php endif; ?>
