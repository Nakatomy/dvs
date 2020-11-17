<div class="list-group">
    <?php foreach ($results as $result) : ?>
        <?php $currentPageBody = $this->controller->highlightedExtendedMarkup($result->getPageIndexContent(), $query); ?>
        <a href="<?php echo $result->getCollectionLink() ?>" class="list-group-item list-group-item-action flex-column align-items-start">
            <div class="justify-content-between">
                <h5 class="mb-1">
                    <?php echo $result->getCollectionName(); ?>
                </h5>
                <?php if ($display_thumbnail): ?>
                    <img src="https://via.placeholder.com/350x150" alt="<?php echo $result->getCollectionName(); ?>">
                <?php endif; ?>
                <p>
                    <?php if ($result->getCollectionDescription()) : ?>
                        <?php echo $this->controller->highlightedMarkup(Core::make("helper/text")->shortText($result->getCollectionDescription()), $query); ?>
                    <?php endif; ?>
                    <?php echo $currentPageBody; ?>
                </p>
            </div>
        </a>
    <?php endforeach; ?>
</div>
