<?php $navItems = $controller->getNavItems(); ?>

<div class="core-responsive-menu-wrapper">
    <nav class="core-responsive-menu menu-with-hamburger">
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

    <button type="button" name="open-core-menu" class="core-menu-open-close" title="<?php echo t('Open / Close Menu'); ?>">
        <span class="line1"></span>
        <span class="line2"></span>
        <span class="line3"></span>
    </button>
</div>
