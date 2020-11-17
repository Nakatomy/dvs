<form action="<?php echo $resultTargetFullURL ?>" method="get" class="ccm-search-block-form">

    <?php if ($title): ?>
        <h3><?php echo h($title); ?></h3>
    <?php endif; ?>

    <?php if (!$query) : ?>
        <?php echo $form->hidden("search_paths[]", Core::make("helper/text")->entities($baseSearchPath)); ?>
    <?php elseif (is_array($searchPaths)) : ?>
        <?php foreach ($searchPaths as $searchPath) : ?>
            <?php echo $form->hidden("search_paths[]", Core::make("helper/text")->entities($baseSearchPath)); ?>
        <?php endforeach; ?>
    <?php endif; ?>

    <div class="form-group">
        <div class="row">
            <div class="col-md-8">
                <?php echo $form->text("query", Core::make("helper/text")->entities($query), [
                    "placeholder" => t("Search")
                ]); ?>
            </div>
            <div class="col-md-4">
                <?php echo $form->submit("submit", Core::make("helper/text")->entities($buttonText ?: t('Search')), [
                    "class" => "btn btn-block ccm-search-block-submit"
                ]); ?>
            </div>
        </div>
    </div>
</form>
