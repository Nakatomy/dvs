<nav class="socials">
    <ul>
        <?php foreach($links as $link): ?>
            <li><a target="_blank" href="<?php echo h($link->getURL()); ?>" class="<?php echo $link->getServiceObject()->getIcon(); ?>"><?php echo $link->getServiceObject()->getServiceIconHTML(); ?></a></li>
        <?php endforeach; ?>
    </ul>
</nav>