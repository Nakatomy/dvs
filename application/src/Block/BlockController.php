<?php

namespace Application\Src\Block;

use Concrete\Core\Block\View\BlockView;
use Concrete\Core\Block\View\BlockViewTemplate;
use Concrete\Core\Support\Facade\Application;
use Concrete\Core\Block\BlockController as CoreBlockController;
use Concrete\Core\Support\Facade\Database;
use Symfony\Component\Filesystem\Filesystem;
use Concrete\Package\Base\Src\Utility\ControllerUtilityTrait;

class BlockController extends CoreBlockController
{
    use ControllerUtilityTrait;

    const FLASH_BAG_SUFFIX = '_block_flash_bag';

    public function on_start()
    {
        parent::on_start();

        $this->injectUtilities();
        $this->set("block_name", ($this->block && $this->block->getBlockName()) ? $this->block->getBlockName() : "block_" . $this->bID);
    }

    /**
     * @param string $action
     * @return string
     */
    protected function getBlockActionUrl($action = '')
    {
        $blockView = new BlockView($this->getBlockObject());

        return $blockView->action($action);
    }

    protected function addFlashMessage($type, $message)
    {
        $session = Application::make('session');

        if (!$session->has($this->bID.self::FLASH_BAG_SUFFIX)) {
            $session->set($this->bID.self::FLASH_BAG_SUFFIX, [
                [
                    'type' => $type,
                    'message' => $message
                ]
            ]);
        } else {
            $messages = $session->get($this->bID.self::FLASH_BAG_SUFFIX);
            $messages []= [
                'type' => $type,
                'message' => $message
            ];
            $session->set($this->bID.self::FLASH_BAG_SUFFIX, $messages);
        }
    }

    protected function getFlashMessages()
    {
        $session = Application::make('session');

        $messages = $session->get($this->bID.self::FLASH_BAG_SUFFIX);

        $session->remove($this->bID.self::FLASH_BAG_SUFFIX);

        return $messages;
    }

    protected function getBlockTableFields()
    {
        $columns = Database::connection()->getSchemaManager()->listTableColumns($this->btTable);

        $result = [];

        if ($columns) {
            foreach ($columns as $column) {
                $result []= $column->getName();
            }
        }

        return $result;
    }

    protected function getViewTemplate()
    {
        $block = $this->getBlockObject();
        if (is_object($block)) {
            $blockViewTemplate = new BlockViewTemplate($block);
            if (is_object($blockViewTemplate)) {
                $paths = preg_split('/\//', $blockViewTemplate->getTemplate());
                if ($paths) {
                    return str_replace('.php', '', end($paths));
                }

            }
        }

        return null;
    }

    /**
     * @return string
     */
    public function getBlockTemplatePath()
    {
        $blockViewTemplate = new BlockViewTemplate($this->getBlockObject());
        return $blockViewTemplate->getBaseURL();
    }

    /**
     * @throws \Exception
     * @deprecated
     */
    protected function getTwigTemplate()
    {
        $viewTemplate = $this->getViewTemplate();

        if ($viewTemplate) {
            if ('view' === $viewTemplate) {
                /** @var Filesystem $fs */
                $fs = Application::make('base.filesystem');
            }
        }

        throw new \Exception(sprintf('Twig template "%s" not found for block %s', $viewTemplate, $this->btHandle));
    }
}
