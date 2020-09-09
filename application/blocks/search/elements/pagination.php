<?php if ($pagination->getTotalPages() > 1 && $pagination->haveToPaginate()): ?>
    <?php echo $pagination->renderDefaultView(); ?>
<?php endif; ?>
