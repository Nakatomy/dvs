<?php

namespace Application\Src\Composer;

use Composer\Installer\PackageEvent;

class ComposerScripts
{
    public static function postPackageInstall(PackageEvent $event)
    {
        $packageName = explode('/', $event->getOperation()->getPackage()->getName());

        if ($packageName) {
            $scripts = $event->getOperation()->getPackage()->getScripts();
            if ('concrete5' == $packageName[0] && array_key_exists('on-package-install', $scripts)) {
                exec("cd packages && cd $packageName[1] && composer run-script on-package-install");
            }
        }
    }
}