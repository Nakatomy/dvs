<?php if (!$hide_section && $theme->getFooterSectionLayout() && !$c->getAttribute('hide_footer')): ?>
    <?php $theme->getFooterSectionLayout()->display([
        "c" => $c,
        "theme" => $theme,
        "controller" => $controller
    ]); ?>
<?php endif; ?>

</div>

<link rel="stylesheet" href="<?php echo $this->getThemePath(); ?>/assets/tarteaucitron/css/tarteaucitron.min.css" />
<script src="<?php echo $this->getThemePath(); ?>/assets/tarteaucitron/tarteaucitron.min.js" crossorigin="anonymous"></script>
<script src="<?php echo $this->getThemePath(); ?>/assets/tarteaucitron/lang/tarteaucitron.de.js"></script>
<script src="<?php echo $this->getThemePath(); ?>/assets/tarteaucitron/lang/tarteaucitron.de.js"></script>
<script src="<?php echo $this->getThemePath(); ?>/assets/tarteaucitron/lang/tarteaucitron.fr.js"></script>
<script src="<?php echo $this->getThemePath(); ?>/assets/tarteaucitron/lang/tarteaucitron.es.js"></script>

<script type="text/javascript">
    tarteaucitron.init({
        "lang": "fr",
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

<?php View::element('footer_required'); ?>
<?php View::element('seo/before_body_close', [], $theme->getPackageHandle()); ?>
<?php View::element('fancybox/localization', [], $theme->getPackageHandle()); ?>
</body>
</html>
