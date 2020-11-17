<?php

namespace Application\Src\Controller;

use Concrete\Core\Controller\Controller;

class Configure extends Controller
{
    public function display()
    {
        $this->render('configure/simple');
    }
}
