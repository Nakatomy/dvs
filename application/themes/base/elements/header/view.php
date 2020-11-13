<!DOCTYPE html>
<html lang="<?php echo Localization::activeLanguage(); ?>" id="html" class="no-js">
    <head>
        <?php View::element('seo/after_head_open', [], $theme->getPackageHandle()); ?>
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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tarteaucitronjs/1.8.3/css/tarteaucitron.min.css" integrity="sha512-FFOblsE1xWaJLWIWiI/AkEffGqv2OEQIGR1ghhEOnLKGPTed8Mhd0F/bsF+wcPduHyvp+WLCApQ6PLJ9WbALDQ==" crossorigin="anonymous" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/tarteaucitronjs/1.8.3/tarteaucitron.js"></script>

        <script type="text/javascript">
            tarteaucitron.init({
            "privacyUrl": "", /* Privacy policy url */

            "hashtag": "#tarteaucitron", /* Open the panel with this hashtag */
            "cookieName": "tarteaucitron", /* Cookie name */

            "orientation": "middle", /* Banner position (top - bottom) */

            "showAlertSmall": false, /* Show the small banner on bottom right */
            "cookieslist": false, /* Show the cookie list */

            "showIcon": true, /* Show cookie icon to manage cookies */
            "iconPosition": "BottomLeft", /* BottomRight, BottomLeft, TopRight and TopLeft */

            "adblocker": false, /* Show a Warning if an adblocker is detected */

            "DenyAllCta" : true, /* Show the deny all button */
            "AcceptAllCta" : true, /* Show the accept all button when highPrivacy on */
            "highPrivacy": true, /* HIGHLY RECOMMANDED Disable auto consent */

            "handleBrowserDNTRequest": false, /* If Do Not Track == 1, disallow all */

            "removeCredit": false, /* Remove credit link */
            "moreInfoLink": true, /* Show more info link */

            "useExternalCss": false, /* If false, the tarteaucitron.css file will be loaded */
            "useExternalJs": false, /* If false, the tarteaucitron.js file will be loaded */

            //"cookieDomain": ".my-multisite-domaine.fr", /* Shared cookie for multisite */

            "readmoreLink": "", /* Change the default readmore link */

            "mandatory": true, /* Show a message about mandatory cookies */
            });
        </script>
        <script type="text/javascript">
            tarteaucitron.user.gajsUa = 'UA-XXXXXXXX-X';
            tarteaucitron.user.gajsMore = function () { /* add here your optionnal _ga.push() */ };
            (tarteaucitron.job = tarteaucitron.job || []).push('gajs');
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
