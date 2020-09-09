<?php

namespace Application\Src\Pagination;

use \Pagerfanta\View\DefaultView;
use \Concrete\Core\Search\Pagination\View\ViewInterface;

class ConcretePagerfantaDefaultView extends DefaultView implements ViewInterface
{
    protected function createDefaultTemplate()
    {
        return new CustomTemplate();
    }
    public function getArguments()
    {
        return [];
    }
}
