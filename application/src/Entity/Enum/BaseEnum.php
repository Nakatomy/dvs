<?php

namespace Application\Src\Entity\Enum;

abstract class BaseEnum
{
    public static function getChoices($prefix = "enum")
    {
        $reflection = new \ReflectionClass(get_called_class());
        $constants = $reflection->getConstants();

        $values = array_map(function ($value) use ($prefix) {
            return t($prefix ? $prefix . "." . $value : $value);
        }, $constants);

        return array_combine($constants, $values);
    }

    public static function getChoice($choice, $prefix = "enum")
    {
        $choices = self::getChoices($prefix);
        return $choices[$choice];
    }
}
