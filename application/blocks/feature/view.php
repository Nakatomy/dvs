<?php defined('C5_EXECUTE') or die("Access Denied."); ?>

<div class="col-md-4">
    <div class="icon">
        <i class="fa fa-<?php echo $icon ?>"></i>
    </div>
    <article class="texts">
        <?php if ($title): ?>
            <?php if ($linkURL): ?> <a href="<?php echo $linkURL ?>"><?php endif; ?>
            <h3><?php echo h($title) ?></h3>
            <?php if ($linkURL): ?> </a><?php endif; ?>
        <?php endif; ?>
        <?php if ($paragraph): ?>
            <p><?php echo $paragraph ?></p>
        <?php endif; ?>
    </article>
</div>