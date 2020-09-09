<?php if ($edit_mode && $controller->isBlockEmpty()): ?>
    <?php $this->inc("elements/edit_mode_empty_block.php"); ?>
<?php else: ?>
    <?php if ($pageListTitle): ?>
        <article class="texts margin-bottom-default">
            <h3><?php echo h($pageListTitle)?></h3>
        </article>
    <?php endif; ?>
    <div class="core-card-list">
        <?php if ($pages): ?>
            <div class="row">
                <?php foreach ($pages as $page): ?>
                    <div class="<?php echo $container_class; ?> col col-12 core-card-list-item margin-bottom-grid">
                        <div class="card h-100">
                            <?php if ($displayThumbnail && $thumbnail_type_object && $page->getAttribute("thumbnail")): ?>
                                <div class="card-image">
                                    <img class="card-img-top"
                                         src="<?php echo $page->getAttribute("thumbnail")->getThumbnailURL($thumbnail_type_object->getBaseVersion()); ?>"
                                         alt="<?php echo $th->entities($page->getCollectionName()); ?>"
                                    >
                                </div>
                            <?php endif; ?>
                            <div class="card-body texts">
                                <h4 class="mb-0">
                                    <a target="<?php echo $target; ?>" href="<?php echo $page->getCollectionLink(); ?>">
                                        <?php echo $th->entities($page->getCollectionName()); ?>
                                    </a>
                                </h4>
                                <?php if ($includeDate): ?>
                                    <small class="date"><?php echo $dh->formatCustom('Y-m-d', $page->getCollectionDatePublic()); ?></small><br>
                                <?php endif; ?>
                                <hr>
                                <p class="card-text">
                                    <?php echo $controller->truncateSummaries ? $th->entities($th->wordSafeShortText($page->getCollectionDescription(), $controller->truncateChars)) : $th->entities($page->getCollectionDescription()); ?>
                                </p>
                                <?php if ($useButtonForLink): ?>
                                    <div class="text-center">
                                        <a target="<?php echo $target; ?>" href="<?php echo $page->getCollectionLink(); ?>" class="btn btn-primary"><?php echo $buttonLinkText; ?></a>
                                    </div>
                                <?php endif; ?>
                                <?php if ($display_tags && $page->getTags()): ?>
                                    <hr>
                                    <div class="tags">
                                        <?php foreach ($page->getTags() as $tag): ?>
                                            <span class="core-badge mr-2 mb-2"><?php echo $tag; ?></span>
                                        <?php endforeach; ?>
                                    </div>
                                <?php endif; ?>
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
