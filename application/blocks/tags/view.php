<?php

defined('C5_EXECUTE') or die("Access Denied.");
use Concrete\Attribute\Select\OptionList;

?>

<?php if ($options instanceof OptionList && $options->count() > 0): ?>

<article class="texts margin-bottom-default">
    <h3><?php echo $title?></h3>
</article>

<ul class="core-tags">

    <?php foreach($options as $option) { ?>

        <li class="core-tags-item">

            <?php if ($target) { ?>
                <a href="<?php echo $controller->getTagLink($option) ?>" class="core-badge">
                    <?php echo $option->getSelectAttributeOptionValue()?>
                </a>
            <?php } else { ?>
                <span class="core-badge"><?php echo $option->getSelectAttributeOptionValue()?></span>
            <?php } ?>

        </li>

    <?php } ?>

</ul>

<?php endif; ?>
