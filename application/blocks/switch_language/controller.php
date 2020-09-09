<?php

namespace Application\Block\SwitchLanguage;

use Core;
use Cookie;
use Localization;
use Page;
use Session;
use Concrete\Core\Routing\Redirect;
use Application\Src\Block\BlockController;
use Concrete\Core\Multilingual\Page\Section\Section;
use URL;

/**
 * @property string $label
 * @property string $languages
 */
class Controller extends BlockController
{
    /**
     * @var array
     */
    public $helpers = ['form'];

    /**
     * @var array
     */
    protected $btExportTables = ['btSwitchLanguage'];

    /**
     * @var string
     */
    protected $btTable = 'btSwitchLanguage';

    /**
     * @var int
     */
    protected $btInterfaceWidth = 500;

    /**
     * @var int
     */
    protected $btInterfaceHeight = 300;

    /**
     * @return string
     */
    public function getBlockTypeName()
    {
        return t('Switch Language');
    }

    /**
     * @return string
     */
    public function getBlockTypeDescription()
    {
        return t('Adds a front-end language switcher to your website.');
    }

    public function on_start()
    {
        $this->set('ih', Core::make('multilingual/interface/flag'));
    }

    public function action_switch_language($currentPageID, $sectionID, $bID = false)
    {
        $lang = Section::getByID(intval($sectionID));
        if (is_object($lang)) {
            $page = \Page::getByID(intval($currentPageID));
            if (!$page->isError()) {
                $relatedID = $lang->getTranslatedPageID($page);
                if ($relatedID) {
                    $pc = \Page::getByID($relatedID);
                    Redirect::page($pc)->send();
                    exit;
                }
            }
            Redirect::page($lang)->send();
            exit;
        }

        Redirect::to('/');
        exit;
    }

    public function action_set_current_language()
    {

        if ($this->post('language')) {

            $section = Section::getByID($this->post('language'));
            if (is_object($section)) {
                Session::set('multilingual_default_locale', $section->getLocale());
                if ($this->post('remember')) {
                    Cookie::set('multilingual_default_locale', $section->getLocale(), time() + (60 * 60 * 24 * 365));
                } else {
                    Cookie::clear('multilingual_default_locale');
                }
            }

        }

        $this->action_switch_language($this->post('rcID'), $this->post('language'));
    }

    public function add()
    {
        $this->set('label', t('Choose Language'));
        $this->set('languages', $this->getLanguageList());
    }

    public function edit()
    {
        $this->set('languages', $this->getLanguageList());
    }

    public function save($args)
    {
        $args['languages'] = $args['languages'] ? json_encode(array_filter($args['languages'])) : '[]';

        parent::save($args);
    }

    public function view()
    {
        $this->requireAsset('javascript', 'jquery');

        /** @var \Concrete\Core\Multilingual\Page\Section\Section[] $sectionList */
        $sectionList = Section::getList();

        $currentPage = Page::getCurrentPage();

        $locale = null;

        $activeLanguage = Section::getBySectionOfSite($currentPage);

        if ($activeLanguage) {
            $locale = $activeLanguage->getLanguage();
        }

        if (!$locale) {
            $locale = Localization::activeLocale();
            $activeLanguage  = Section::getByLocale($locale);
        }

        $languages = [];
        foreach ($sectionList as $section) {
            $languages[$section->getCollectionID()] = $section->getLanguageText($locale);
        }

        $this->set('language_sections', $sectionList);
        $this->set('active_language', $activeLanguage);;
        $this->set('locale', $locale);
        $this->set('languages', $this->removeDisabledLanguages($this->orderLanguagesArray($this->getLanguageList())));
        $this->set('cID', $currentPage->getCollectionID());

        $this->set('languageSections', $sectionList);
        $this->set('activeLanguage', $activeLanguage);
    }

    /**
     * @return array
     */
    protected function getLanguageList()
    {
        /** @var \Concrete\Core\Multilingual\Page\Section\Section[] $sectionList */
        $sectionList = Section::getList();

        $languages = [];

        $savedLanguages = json_decode($this->languages);

        $locale = null;

        $currentPage = Page::getCurrentPage();

        $activeLanguage = Section::getBySectionOfSite($currentPage);

        if ($activeLanguage) {
            $locale = $activeLanguage->getLanguage();
        }

        if (!$locale) {
            $locale = Localization::activeLocale();
            $activeLanguage  = Section::getByLocale($locale);
        }

        $activeLanguageCode = is_object($activeLanguage) ? $activeLanguage->getLanguage() : '';

        $cID = is_object($currentPage) ? $currentPage->getCollectionID() : null;

        foreach ($sectionList as $section) {
            $languageCode = $section->getLanguage();

            $sectionCID = is_object($section) ? $section->getCollectionID() : null;

            $languages[] = [
                'currentCID' => $cID,
                'sectionCID' => $sectionCID,
                'url' => URL::to('switch_language', $cID, $sectionCID)->getRelativeUrl(),
                'active' => $activeLanguageCode === $languageCode ? true : false,
                'languageText' => ucfirst($section->getLanguageText($locale)),
                'languageCode' => $languageCode,
                'disabled' => $savedLanguages->$languageCode ? true : false,
            ];
        }

        return $languages;
    }

    /**
     * Shift the active language to the first index
     *
     * @param array $languages
     *
     * @return array
     */
    private function orderLanguagesArray($languages = []): array
    {
        $orderedLanguages = [];
        $activeLanguage = [];

        foreach ($languages as $language) {
            if ($language['active'] === false) {
                $orderedLanguages[] = $language;
            } else {
                $activeLanguage = $language;
            }
        }

        array_unshift($orderedLanguages, $activeLanguage);

        return $orderedLanguages;
    }


    /**
     * Remove inactive lanugages
     *
     * @param array $languages
     *
     * @return array
     */
    private function removeDisabledLanguages($languages = []): array
    {
        return array_filter($languages, function ($item) {
            if ($item['disabled'] === false) {
                return $item;
            }
        });
    }
}
