<?php

namespace Application\Src\Multilingual;

use \Concrete\Core\Foundation\Service\Provider as ServiceProvider;

class MultilingualServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->singleton('multilingual/interface/flag', '\Concrete\Core\Multilingual\Service\UserInterface\Flag');
        $this->app->singleton('multilingual/detector', '\Concrete\Core\Multilingual\Service\Detector');
        $this->app->singleton('multilingual/extractor', 'Application\Src\Multilingual\Service\Extractor');
    }
}
