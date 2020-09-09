<?php defined('C5_EXECUTE') or die('Access Denied.');

define("ENABLE_USER_TIMEZONE", false);

/**
 * ----------------------------------------------------------------------------
 * Load all composer autoload items.
 * ----------------------------------------------------------------------------
 */
if (!$loader = @require(DIR_BASE . '/' . DIRNAME_VENDOR . '/autoload.php')) {
    die('Third party libraries not installed. Make sure that composer has required libraries in the concrete/ directory.');
}

\Doctrine\Common\Annotations\AnnotationRegistry::registerLoader([$loader, 'loadClass']);
