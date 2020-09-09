<?php

namespace Application\Src\Entity\Enum;

use Application\Src\Entity\Enum\BaseEnum;

class Gender extends BaseEnum
{
    const MALE      = 1;
    const FEMALE    = 2;
    const OTHER     = 3;

    public static function getChoices($prefix = 'gender')
    {
        return parent::getChoices($prefix);
    }
}
