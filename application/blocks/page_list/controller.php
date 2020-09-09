<?php

namespace Application\Block\PageList;

use Concrete\Block\PageList\Controller as BlockController;
use Concrete\Core\File\Image\Thumbnail\Type\Type;
use Concrete\Package\Base\Src\ChoiceList\ThumbnailTypeList;
use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * @property integer $pages_per_row
 * @property integer $thumbnail_type
 * @property integer $filter_by_tags
 * @property integer $tags
 * @property integer $tag_filter_type
 * @property boolean $exclude_current_page
 */
class Controller extends BlockController
{
    public function on_start()
    {
        parent::on_start();

        $this->set('dh', \Core::make('helper/date'));

        if ($this->filter_by_tags) {
            $tags = array_filter(explode(" ", $this->tags));
            if ($tags) {
                switch ($this->tag_filter_type) {
                    case 1:
                        $this->list->filterByTags($tags);
                        break;
                    default:
                        $tags = $this->getCollectionObject()->getAttribute("tags");
                        if ($tags) {
                            $tags = array_map(function ($tag) {
                                return $tag->value;
                            }, $tags->getOptions());
                        }
                        $this->list->filterByTags($tags);
                        break;
                }
            }
        }

        $c = $this->getCollectionObject();
        if ($this->exclude_current_page) {
            $this->list->excludePages($c->getCollectionID());
        }
    }

    public function view()
    {
        parent::view();

        $this->set("dh", \Core::make('helper/date'));
        $this->set("th", \Core::make('helper/text'));
        $this->set('token', \Core::make('helper/validation/token'));
        $this->set("edit_mode", $this->getCollectionObject() ? $this->getCollectionObject()->isEditMode() : false);
        $this->set("container_class", $this->getContainerClass());
        $this->set("thumbnail_type_object", $this->thumbnail_type ? Type::getByID($this->thumbnail_type) : null);
        $this->set('pages_json', htmlspecialchars(json_encode($this->transformPages($this->get('pages'))), ENT_QUOTES));
        $this->set('has_next_page', var_export($this->list->getPagination()->hasNextPage(), true));
        $this->set('ih', \Core::make('helper/image'));
    }

    public function edit()
    {
        parent::edit();

        $this->set("thumbnail_type_choices", ThumbnailTypeList::getChoices());
        $this->set("ordering_choices", $this->getOrderingChoices());
        $this->set("tabs", $this->getBlockEditorInterfaceTabs());
        $this->set("page_selector", \Core::make("helper/form/page_selector"));
        $this->set("page_types", $this->getPageTypeList());
        $this->set("date_filter_choices", $this->getDateFilterChoices());
        $this->set('load_button_text', 'Show More');
    }

    public function add()
    {
        parent::add();

        $this->set("thumbnail_type_choices", ThumbnailTypeList::getChoices());
        $this->set("ordering_choices", $this->getOrderingChoices());
        $this->set("tabs", $this->getBlockEditorInterfaceTabs());
        $this->set("page_selector", \Core::make("helper/form/page_selector"));
        $this->set("page_types", $this->getPageTypeList());
        $this->set("date_filter_choices", $this->getDateFilterChoices());
        $this->set("load_button_text", t('Load More'));
    }

    /**
     * @return string
     */
    private function getContainerClass()
    {
        $pagesPerRow = $this->pages_per_row;
        switch ($pagesPerRow) {
            case 1:
                $containerClass = "col-12";
                break;
            case 2:
                $containerClass = "col-md-6";
                break;
            case 3:
                $containerClass = "col-md-4";
                break;
            case 4:
                $containerClass = "col-md-3";
                break;
            default:
                $containerClass = "col-md";
                break;
        }
        return $containerClass;
    }

    public function save($args)
    {
        $args["filter_by_tags"] = isset($args["filter_by_tags"]) ? 1 : 0;
        $args["exclude_current_page"] = isset($args["exclude_current_page"]) ? 1 : 0;
        parent::save($args);
    }

    /**
     * @param $method
     * @param array $parameters
     * @return bool
     */
    public function isValidControllerTask($method, $parameters = array())
    {
        $this->enableExternalFiltering = true;

        return parent::isValidControllerTask($method, $parameters);
    }

    /**
     * @param $parameters
     * @return array
     */
    public function getPassThruActionAndParameters($parameters)
    {
        if ($parameters[0] === 'show_more') {
            return ['action_' . $parameters[0], array_slice($parameters, 1)];
        }

        return parent::getPassThruActionAndParameters($parameters);
    }

    public function action_show_more()
    {
        $val = \Core::make('helper/validation/token');
        if (!$val->validate('show_more')) {
            $response = new JsonResponse([
                'success' => false,
                'error' => t('Invalid token, please try again.')
            ]);
        } else {
            $list = $this->list;
            if ($this->num > 0) {
                $list->setItemsPerPage($this->num);
                $pagination = $list->getPagination();
                $pages = $pagination->getCurrentPageResults();
            } else {
                $pages = $list->getResults();
            }

            $pages = $this->transformPages($pages);
            $response = new JsonResponse([
                'success' => true,
                'pages' => $pages,
                'aggregation' => [
                    'hasNextPage' => $pagination ? $pagination->hasNextPage() : false
                ]
            ]);
        }

        $response->send();
        \Core::shutdown();
    }

    /**
     * @param array $pages
     * @return array
     */
    protected function transformPages(array $pages = []) : array
    {
        return array_map(function (\Page $page) {
            $thumbnail = $page->getAttribute('thumbnail');
            $thumbnailType = $this->thumbnail_type ? Type::getByID($this->thumbnail_type) : null;
            $th = \Core::make('helper/text');
            $description = $this->truncateSummaries ? $th->wordSafeShortText($page->getCollectionDescription(), $this->truncateChars) : $page->getCollectionDescription();
            return [
                'id'            => $page->getCollectionID(),
                'name'          => $page->getCollectionName(),
                'description'   => $this->includeDescription ? $description : null,
                'target'        => $page->isExternalLink() ? '_blank' : '_self',
                'link'          => $page->getCollectionLink(),
                'date'          => $this->includeDate ? $this->get('dh')->formatDateTime($page->getCollectionDatePublic(), true) : null,
                'tags'          => $this->display_tags && $page->getTags() ? explode("\n", $page->getTags()->__toString()) : null,
                'thumbnail'     => $this->displayThumbnail && $thumbnail && $thumbnailType ? $thumbnail->getThumbnailURL($thumbnailType->getBaseVersion()) : null
            ];
        }, $pages);
    }

    /**
     * @return array
     */
    protected function getOrderingChoices()
    {
        return [
            "display_asc"   => t("Sitemap order"),
            "chrono_desc"   => t("Most recent first"),
            "chrono_asc"    => t("Earliest first"),
            "alpha_asc"     => t("Alphabetical order"),
            "alpha_desc"    => t("Reverse alphabetical order"),
            "random"        => t("Random"),
        ];
    }

    /**
     * @return string
     */
    protected function getBlockEditorInterfaceTabs()
    {
        return \Core::make('helper/concrete/ui')->tabs(array(
            array('option-general', "<strong><i class='fa fa-cog'></i> " . t('General Settings') . "</strong>", true),
            array('option-filters', "<strong><i class='fa fa-filter'></i> " . t('Filters') . "</strong>"),
            array('option-sorting', "<strong><i class='fa fa-sort'></i> " . t('Sorting') . "</strong>"),
            array('option-pagination', "<strong><i class='fa fa-arrow-right'></i> " . t('Pagination') . "</strong>"),
            array('option-async-settings', "<strong><i class='fa fa-server'></i> " . t('Async Settings') . "</strong>")
        ));
    }


    /**
     * @return mixed
     */
    protected function getPageTypeList()
    {
        return array_reduce(\PageType::getList(), function (array $list, \PageType $pageType) {
            $list[$pageType->getPageTypeID()] = $pageType->getPageTypeName();
            return $list;
        }, ["" => t("None")]);
    }

    /**
     * @return array
     */
    protected function getDateFilterChoices()
    {
        return [
            'all' => t('Show All'),
            'now' => t('Today'),
            'past' => t('Before Today'),
            'future' => t('After Today'),
            'between' => t('Between')
        ];
    }
}
