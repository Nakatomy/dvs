<?php $navItems = $controller->getNavItems(); ?>

<nav>
    <?php if (count($navItems) > 0): ?>
        <ul class="breadcrumb breadcrumb-autonav texts">
            <?php foreach ($navItems as $ni): ?>
                <li class="breadcrumb-item">
                    <a href="<?php echo $ni->url; ?>" target="<?php echo $ni->target; ?>"><?php echo $ni->name; ?></a>
                </li>
            <?php endforeach; ?>
        </ul>
    <?php endif; ?>
</nav>
