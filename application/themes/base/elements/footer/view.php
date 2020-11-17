<?php if (!$hide_section && $theme->getFooterSectionLayout() && !$c->getAttribute('hide_footer')): ?>
    <?php $theme->getFooterSectionLayout()->display([
        "c" => $c,
        "theme" => $theme,
        "controller" => $controller
    ]); ?>
<?php endif; ?>

</div>

<?php View::element('footer_required'); ?>
<?php View::element('seo/before_body_close', [], $theme->getPackageHandle()); ?>
<?php View::element('fancybox/localization', [], $theme->getPackageHandle()); ?>
</body>
</html>
