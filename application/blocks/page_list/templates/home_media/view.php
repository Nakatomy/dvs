<?php

use Concrete\Attribute\Address\Value;

    $attr_set = AttributeSet::getByHandle('media');
    $attr_keys = $attr_set->getAttributeKeys();
    $filter_set = array();
    $tag_set = array();

    foreach($attr_keys as $ak){

        $obj = new stdClass();
        $obj->title = $ak->akName;
        $obj->attributes = array();

        foreach($pages as $page){

            if(!in_array($page->getAttribute($ak->akHandle), $obj->attributes, true)){
                $obj->attributes[] = $page->getAttribute($ak->akHandle);
            }

        }

        $filter_set[] = $obj;
    }
?>

<?php if ($edit_mode && $controller->isBlockEmpty()): ?>
    <?php $this->inc("elements/edit_mode_empty_block.php"); ?>
<?php else: ?>
    <?php if ($pageListTitle): ?>
        <article class="texts margin-bottom-default">
            <h3><?php echo h($pageListTitle)?></h3>
        </article>
    <?php endif; ?>
    <div class="home-media-list">
        <?php if ($pages): ?>
            <div class="row">

                <div class="col-md-4">
                    <div class="filter-menu">
                        <?php foreach($filter_set as $fs) : ?>
                            <?php if($fs->title == 'Media Category'): ?>
                                <?php foreach ($fs->attributes as $attr):?>
                                    <p id="<?php echo str_replace(" ","",$attr); ?>">
                                        <a>
                                            <?php echo $attr; ?>
                                        </a>
                                    </p>
                                <?php endforeach; ?>
                            <?php endif; ?>
                        <?php endforeach; ?>
                    </div>
                </div>

                <div class="col-md-8 home-media-list-items">
                    <div class="row">
                        <?php foreach ($pages as $page): ?>
                            <div class="col col-12 home-media-list-item margin-bottom-grid
                            <?php foreach($attr_keys as $ak) : ?>
                                <?php $val = $page->getAttribute($ak->akHandle) ?>
                            <?php echo str_replace(" ","",$val); ?>
                            <?php endforeach; ?>
                            ">
                                <div class="home-media-card">
                                    <div class="row">
                                        <div class="col-3">
                                            <div class="texts">
                                                <p class="date"><?php echo $dh->formatCustom('d M Y', $page->getCollectionDatePublic()); ?></p>
                                                <p class="category"><?php echo $page->getAttribute('media_category'); ?></p>
                                            </div>
                                        </div>
                                        <div class="col-9">
                                            <div class="home-media-card-body texts">
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
