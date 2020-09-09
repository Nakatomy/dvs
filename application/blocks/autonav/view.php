<?php $navItems = $controller->getNavItems(); ?>

<nav class="core-default-menu">
    <?php if (count($navItems) > 0): ?>
        <ul>
            <?php foreach ($navItems as $ni): ?>
                <li>
                    <a href="<?php echo $ni->url; ?>" target="<?php echo $ni->target; ?>"><?php echo $ni->name; ?></a>

                    <?php if ($ni->hasSubmenu): ?>
                        <ul>
                    <?php else: ?>
                        </li>
                        <?php echo str_repeat('</ul></li>', $ni->subDepth); ?>
                    <?php endif; ?>
            <?php endforeach; ?>
        </ul>
    <?php endif; ?>
</nav>
