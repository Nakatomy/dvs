<?php

namespace Application\Src\Page\Controller;

use Concrete\Core\View\View;
use Concrete\Core\Page\Page;
use Concrete\Core\Page\Controller\PageController as CorePageController;

//TODO move this to base package
class PageTypeController extends CorePageController
{
    public function __construct(Page $c)
    {
        parent::__construct($c );
        $this->set('theme_path', View::getInstance()->getThemePath());
    }
}