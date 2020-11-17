<?php if ($edit_mode && $controller->isBlockEmpty()): ?>
    <?php $this->inc("elements/edit_mode_empty_block.php"); ?>
<?php else: ?>
    <?php if ($pageListTitle): ?>
        <article class="texts margin-bottom-default">
            <h3><?php echo h($pageListTitle)?></h3>
        </article>
    <?php endif; ?>
    <div class="core-card-wide-list">
        <?php if ($pages): ?>
            <div class="row">
                <?php foreach ($pages as $page): ?>
                    <div class="<?php echo $container_class; ?> col col-12 core-card-wide-list-item">
                        <div class="card h-100">
                            <div class="row">
                                <?php if ($displayThumbnail && $thumbnail_type_object && $page->getAttribute("thumbnail")): ?>
                                    <div class="col-md-4">
                                        <img class="img-fluid" src="<?php echo $page->getAttribute("thumbnail")->getThumbnailURL($thumbnail_type_object->getBaseVersion()); ?>" alt="<?php echo $th->entities($page->getCollectionName()); ?>">
                                    </div>
                                    <div class="col-md-8 texts">
                                <?php else: ?>
                                    <div class="col-12 texts">
                                <?php endif; ?>
                                    <div class="d-flex card-body">
                                        <div class="card-top">
                                            <div class="card-header d-flex justify-content-between margin-bottom-default">
                                                <h4 class="card-title">
                                                    <a target="<?php echo $target; ?>" href="<?php echo $page->getCollectionLink(); ?>">
                                                        <?php echo $th->entities($page->getCollectionName()); ?>
                                                    </a>
                                                </h4>
                                                <?php if ($includeDate): ?>
                                                    <p><?php echo $dh->formatDateTime($page->getCollectionDatePublic(), true); ?></p>
                                                <?php endif; ?>
                                            </div>
                                            <?php if ($includeDescription): ?>
                                                <p><?php echo $controller->truncateSummaries ? $th->entities($th->wordSafeShortText($page->getCollectionDescription(), $controller->truncateChars)) : $th->entities($page->getCollectionDescription()); ?></p>
                                            <?php endif; ?>
                                        </div>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <?php if ($display_tags && $page->getTags()): ?>
                                                <div class="tags">
                                                    <?php foreach ($page->getTags() as $tag): ?>
                                                        <span class="core-badge mb-2 mr-2"><?php echo $tag; ?></span>
                                                    <?php endforeach; ?>
                                                </div>
                                            <?php endif; ?>
                                            <?php if ($useButtonForLink): ?>
                                                <a target="<?php echo $target; ?>" href="<?php echo $page->getCollectionLink(); ?>" class="btn"><?php echo $buttonLinkText; ?></a>
                                            <?php endif; ?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
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
