<?php

Core::bind('manager/view/pagination', function($app) {
    return new \Application\Src\Pagination\Manager($app);
});
