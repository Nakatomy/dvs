<?php

namespace Application\Src\Provider;

use Concrete\Core\Foundation\Service\Provider as ServiceProvider;

class Application extends ServiceProvider
{
    public function register()
    {
        $this->app->singleton('application.frontend.yarn_local_package', 'Application\Src\Controller\DependencyInjection\FrontEnd\YarnLocalPackage');
        $this->app->singleton('application.thumbnail.type.generator', 'Application\Src\Thumbnail\Type\Generator');
    }
}
