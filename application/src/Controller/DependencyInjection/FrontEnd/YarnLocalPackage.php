<?php

namespace Application\Src\Controller\DependencyInjection\FrontEnd;

use Concrete\Core\Controller\Controller;
use Concrete\Core\Support\Facade\Application;

class YarnLocalPackage extends Controller
{
    const MAIN_SCHEMA_FILE = DIR_BASE . '/package.json';

    public function add($package, $path)
    {
        $schema = json_decode(file_get_contents(self::MAIN_SCHEMA_FILE), true);
        $schema["dependencies"][$package] = $path;
        Application::make('base.filesystem')->dumpFile(self::MAIN_SCHEMA_FILE, json_encode($schema, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES));
    }

    public function remove($package)
    {
        $schema = json_decode(file_get_contents(self::MAIN_SCHEMA_FILE), true);
        unset($schema["dependencies"][$package]);
        Application::make('base.filesystem')->dumpFile(self::MAIN_SCHEMA_FILE, json_encode($schema, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES));
    }
}
