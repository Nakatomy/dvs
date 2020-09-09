<?php

namespace Application\Block\Search;

use Database;
use CollectionAttributeKey;
use Concrete\Core\Page\PageList;
use Concrete\Core\Block\BlockController;
use Page;
use Core;

class Controller extends BlockController
{
    /** @var bool */
    public $showResults = true;
    protected $btTable = 'btSearch';
    protected $btInterfaceWidth = "400";
    protected $btInterfaceHeight = "420";
    protected $btWrapperClass = 'ccm-ui';
    protected $btExportPageColumns = array('postTo_cID');
    protected $btCacheBlockRecord = true;
    protected $btCacheBlockOutput = null;

    public $title = "";
    public $buttonText = ">";
    public $baseSearchPath = "";
    public $resultsURL = "";
    public $postTo_cID = "";

    protected $hColor = '#EFE795';

    public $reservedParams = array('page=','query=','search_paths[]=','submit=','search_paths%5B%5D=');

    public function highlightedMarkup($fulltext, $highlight)
    {
        if (!$highlight) {
            return $fulltext;
        }

        $this->hText = $fulltext;
        $this->hHighlight = $highlight;
        $this->hText = @preg_replace('#' . preg_quote($this->hHighlight, '#') . '#ui', '<span style="background-color:'. $this->hColor .';">$0</span>', $this->hText);

        return $this->hText;
    }

    public function highlightedExtendedMarkup($fulltext, $highlight)
    {
        $text = @preg_replace("#\n|\r#", ' ', $fulltext);

        $matches = array();
        $highlight = str_replace(array('"', "'", "&quot;"), '', $highlight); // strip the quotes as they mess the regex

        if (!$highlight) {
            $text = Core::make('helper/text')->shorten($fulltext, 180);
            if (strlen($fulltext) > 180) {
                $text .= '&hellip;<wbr>';
            }

            return $text;
        }

        $regex = '([[:alnum:]|\'|\.|_|\s]{0,45})'. preg_quote($highlight, '#') .'([[:alnum:]|\.|_|\s]{0,45})';
        preg_match_all("#$regex#ui", $text, $matches);

        if (!empty($matches[0])) {
            $body_length = 0;
            $body_string = array();
            foreach ($matches[0] as $line) {
                $body_length += strlen($line);

                $r = $this->highlightedMarkup($line, $highlight);
                if ($r) {
                    $body_string[] = $r;
                }
                if ($body_length > 150) {
                    break;
                }
            }
            if (!empty($body_string)) {
                return @implode("&hellip;<wbr>", $body_string);
            }
        }
    }

    public function setHighlightColor($color)
    {
        $this->hColor = $color;
    }

    /**
     * Used for localization. If we want to localize the name/description we have to include this.
     */
    public function getBlockTypeDescription()
    {
        return t("Add a search box to your site.");
    }

    public function getBlockTypeName()
    {
        return t("Search");
    }

    public function indexExists()
    {
        $db = Database::connection();
        $numRows = $db->GetOne('select count(cID) from PageSearchIndex');

        return ($numRows > 0);
    }

    public function cacheBlockOutput()
    {
        if ($this->btCacheBlockOutput === null) {
            $this->btCacheBlockOutput = (($this->postTo_cID !== '' || $this->resultsURL !== '') && empty($_REQUEST['query']));
        }

        return $this->btCacheBlockOutput;
    }

    public function view()
    {
        $c = Page::getCurrentPage();
        $this->set('title', $this->title);
        $this->set('buttonText', $this->buttonText);
        $this->set('baseSearchPath', $this->baseSearchPath);
        $this->set('postTo_cID', $this->postTo_cID);

        $resultsURL = $this->getResultURL($c);

        $this->set('resultTargetURL', $resultsURL);
        $this->set('resultTargetFullURL', \URL::to($resultsURL));

        // Set the query to empty by default
        $this->set('query', '');

        //run query if display results elsewhere not set, or the cID of this page is set
        if(!$this->hasExternalResultPage()) {
            if ($this->shouldSearch()) {
                $this->do_search();
            }
        }
        $this->set('showResults', $this->showResults);
        $this->set('searchPaths', $this->request('search_paths'));
        $this->set('c', $c);
    }

    public function save($data)
    {
        $data += array(
            'title'          => '',
            'buttonText'     => '',
            'baseSearchPath' => '',
            'searchUnderCID' => 0,
            'postTo_cID'     => 0,
            'externalTarget' => 0,
            'resultsURL'     => '',
            'show_form'      => 0,
        );
        $args = array();
        $args['title'] = $data['title'];
        $args['buttonText'] = $data['buttonText'];
        $args['baseSearchPath'] = $data['baseSearchPath'];
        $args['showResults'] = intval($data['showResults']);
        $args['show_form'] = intval($data['show_form']);
        if ($args['baseSearchPath'] == 'OTHER' && intval($data['searchUnderCID']) > 0) {
            $customPathC = Page::getByID(intval($data['searchUnderCID']));
            if (!$customPathC) {
                $args['baseSearchPath'] = '';
            } else {
                $args['baseSearchPath'] = $customPathC->getCollectionPath();
            }
        }
        if (trim($args['baseSearchPath']) == '/' || strlen(trim($args['baseSearchPath'])) == 0) {
            $args['baseSearchPath'] = '';
        }

        if (intval($data['postTo_cID']) > 0 && $data['externalTarget'] > 0) {
            $args['postTo_cID'] = intval($data['postTo_cID']);
        } else {
            $args['postTo_cID'] = '';
        }

        $args['resultsURL'] = ($data['externalTarget'] == 1 && (strlen($data['resultsURL']) > 0)) ? trim($data['resultsURL']) : '';
        parent::save($args);
    }

    public function do_search()
    {
        $this->set('do_search', true);
        $q = $_REQUEST['query'];
        $_q = $q;

        $ipl = new PageList();
        $aksearch = false;
        if (is_array($_REQUEST['akID'])) {
            foreach ($_REQUEST['akID'] as $akID => $req) {
                $fak = CollectionAttributeKey::getByID($akID);
                if (is_object($fak)) {
                    $type = $fak->getAttributeType();
                    $cnt = $type->getController();
                    $cnt->setAttributeKey($fak);
                    $cnt->searchForm($ipl);
                    $aksearch = true;
                }
            }
        }

        if (isset($_REQUEST['month']) && isset($_REQUEST['year'])) {
            $year = @intval($_REQUEST['year']);
            $month = abs(@intval($_REQUEST['month']));
            if (strlen(abs($year)) < 4) {
                $year = (($year < 0) ? '-' : '') . str_pad($year, 4, '0', STR_PAD_LEFT);
            }
            if ($month < 12) {
                $month = str_pad($month, 2, '0', STR_PAD_LEFT);
            }
            $daysInMonth = date('t', strtotime("$year-$month-01"));
            $dh = Core::make('helper/date');
            /* @var $dh \Concrete\Core\Localization\Service\Date */
            $start = $dh->toDB("$year-$month-01 00:00:00", 'user');
            $end = $dh->toDB("$year-$month-$daysInMonth 23:59:59", 'user');
            $ipl->filterByPublicDate($start, '>=');
            $ipl->filterByPublicDate($end, '<=');
            $aksearch = true;
        }

        if (empty($_REQUEST['query']) && $aksearch == false) {
            return false;
        }

        if (isset($_REQUEST['query'])) {
            $ipl->filterByKeywords($_q);
        }

        if (is_array($_REQUEST['search_paths'])) {
            foreach ($_REQUEST['search_paths'] as $path) {
                if (!strlen($path)) {
                    continue;
                }
                $ipl->filterByPath($path);
            }
        } elseif ($this->baseSearchPath != '') {
            $ipl->filterByPath($this->baseSearchPath);
        }

        // TODO fix this
        //$ipl->filter(false, '(ak_exclude_search_index = 0 or ak_exclude_search_index is null)');

        $ipl->setItemsPerPage($this->results_per_page ?? -1);
        $pagination = $ipl->getPagination();
        $results = $pagination->getCurrentPageResults();

        $this->set('query', $q);
        $this->set('results', $results);
        $this->set('searchList', $ipl);
        $this->set('pagination', $pagination);
    }

    /**
     * @param $c
     * @return string
     */
    protected function getResultURL($c)
    {
        /** @var Page $c */
        $resultsURL = $c->getCollectionPath();

        if ($this->resultsURL != '') {
            $resultsURL = $this->resultsURL;
        } elseif ($this->postTo_cID != '') {
            /** @var Page $resultsPage */
            $resultsPage = Page::getById($this->postTo_cID);
            $resultsURL = $resultsPage->getCollectionPath();
        }

        return Core::make('helper/text')->encodePath($resultsURL);
    }

    protected function hasExternalResultPage()
    {
        $currentPage = Page::getCurrentPage();
        if ($currentPage && $currentPage->getCollectionID() == $this->postTo_cID) {
            return false;
        }
        return $this->postTo_cID != '' || $this->resultsURL != '';
    }

    protected function shouldSearch()
    {
        return isset($_REQUEST['query']) || isset($_REQUEST['akID']) || isset($_REQUEST['month']);
    }

    public function validate($args)
    {
        $error = Core::make('error');

        if (!($args['show_form'] === '1' || $args['showResults'] === '1')) {
            $error->add(t('Please select at least one of the following options: "<strong>Show Form</strong>" or "<strong>Show Results</strong>"'));
        }

        return $error;
    }

}
