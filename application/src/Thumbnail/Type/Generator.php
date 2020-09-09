<?php

namespace Application\Src\Thumbnail\Type;

use Concrete\Core\File\Image\Thumbnail\Type\Type as ThumbnailType;

class Generator
{
    public function generate(array $args = [])
    {
        $type = ThumbnailType::getByHandle($args['handle']);

        if (!$type) {
            $type = new ThumbnailType();
            $type->setHandle($args['handle']);
            $type->setName($args['name']);
            $type->setWidth($args['width']);
            $type->setHeight($args['height']);
            $type->save();
        }
    }
}
