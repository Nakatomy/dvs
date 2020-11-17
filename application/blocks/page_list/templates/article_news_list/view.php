
<?php if ($edit_mode && $controller->isBlockEmpty()): ?>
    <?php $this->inc("elements/edit_mode_empty_block.php"); ?>
<?php else: ?>
    <?php if ($pageListTitle): ?>
        <article class="texts margin-bottom-default">
            <h3><?php echo h($pageListTitle)?></h3>
        </article>
    <?php endif; ?>
    <div class="article-news-list">
        <?php if ($pages): ?>
            <div class="row">
                <div class="col-md-12 article-news-list-items">
                    <div class="row">
                        <?php foreach ($pages as $page): ?>
                            <div class="col col-12 article-news-list-item margin-bottom-grid">
                                <div class="article-news-card">
                                    <div class="row">
                                        <div class="col-4 col-md-3">
                                            <div class="texts">
                                                <p class="date mb-3"><?php echo $dh->formatCustom('d M Y', $page->getCollectionDatePublic()); ?></p>
                                                <p class="category mb-0"><?php echo $page->getAttribute('media_category'); ?></p>
                                            </div>
                                        </div>
                                        <div class="col-8 col-md-9">
                                            <div class="article-news-card-body texts">
                                                <h6 class="mb-0">
                                                    <a target="<?php echo $target; ?>" href="<?php echo $page->getCollectionLink(); ?>">
                                                        <?php echo $th->entities($page->getCollectionName()); ?>
                                                    </a>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>

            </div>
        <?php else: ?>
            <?php $this->inc("elements/empty_block.php", [
                "noResultsMessage" => $noResultsMessage
            ]); ?>
        <?php endif; ?>

        <?php if ($showPagination): ?>
            <?php echo $pagination; ?>
        <?php endif; ?>
    </div>
<?php endif; ?>
