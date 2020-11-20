<!DOCTYPE html>
<html lang="<?php echo Localization::activeLanguage(); ?>" id="html" class="no-js lang-<?php echo Localization::activeLanguage(); ?>">
    <head>
        <?php View::element('seo/after_head_open', [], $theme->getPackageHandle()); ?>
        <link rel="preload" href="<?php echo BASE_URL; ?>/application/css/dist/base.css" as="style">
        <link rel="preload" href="<?php echo BASE_URL; ?>/application/js/dist/base.js" as="script">
        <?php View::element('fonts', [], 'base'); ?>
        <?php View::element('meta/common', [], 'base'); ?>
        <?php View::element('meta/viewport', [], 'base'); ?>
        <?php View::element('seo/meta_colors', ['color' => '#101112'], 'base'); ?>
        <?php $defaultOgImage = Package::getByHandle('base')->getDatabaseConfig()->get('app.open_graph_image'); ?>
        <?php View::element('seo/og', ['c' => $c, 'share_image' => $c->getAttribute('share_image') ?: $defaultOgImage], 'base'); ?>
        <?php View::element('seo/google_markup', ['c' => $c, 'share_image' => $c->getAttribute('share_image') ?: $defaultOgImage], 'base'); ?>
        <?php View::element('seo/twitter_card', ['c' => $c, 'share_image' => $c->getAttribute('share_image') ?: $defaultOgImage], 'base'); ?>
        <?php View::element('header_required'); ?>
        <?php View::element('header/icons', null, 'base'); ?>
        <?php View::element('seo/before_head_close', [], $theme->getPackageHandle()); ?>
        <?php View::element('config', [], 'gdpr'); ?>
        <?php View::element('header/hreflang', ['hreflangs' => Core::make('base.hreflang')->getList()], 'base'); ?>
        <script type="text/javascript">
            var $htmlClasses = document.getElementById('html');
            $htmlClasses.className = $htmlClasses.className.replace(/(\s|^)no-js(\s|$)/,' ').replace(/(\s$)(^\s)/,'');
        </script>
    </head>
    <body class="<?php echo Package::getByHandle('base')->getDatabaseConfig()->get('layout.header_position'); ?>">
        <?php View::element('seo/after_body_open', [], $theme->getPackageHandle()); ?>
        <div class="<?php echo $c->getPageWrapperClass(); ?> <?php echo !$disable_theme_style_inheritance ? 'main' : ''; ?>" id="app">
            <div id="top"></div>

            <div class="loader">
                <div class="loader-ball-pulse-sync"><div></div><div></div><div></div></div>
            </div>

            <?php if (!$hide_section && !$c->getAttribute('hide_header')) : ?>
                <?php if ($theme->getHeaderSectionLayout()) : ?>
                    <?php $theme->getHeaderSectionLayout()->display([
                        'c' => $c,
                        'theme' => $theme,
                        'controller' => $controller
                    ]); ?>
                <?php endif; ?>

                <?php View::element('header/background_image', [
                    'image' => $c->getAttribute('header_background_image'),
                    'ratio' => 'bg-image-21by9',
                ], 'base'); ?>
            <?php endif; ?>
