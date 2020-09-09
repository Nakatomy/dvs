<?php

namespace Application\Src\Page\Collection;

use Loader;
use CacheLocal;
use Application\Src\Block\CustomStyle as BlockCustomStyle;
use Concrete\Core\Page\Collection\Collection as CoreCollection;
use Concrete\Core\StyleCustomizer\Inline\StyleSet;
use Block;
use Area;
use Permissions;
use Stack;

class Collection extends CoreCollection
{
    /**
     * Retrieves all custom style rules that should be inserted into the header on a page, whether they are defined in areas
     * or blocks.
     */
    public function outputCustomStyleHeaderItems($return = false)
    {
        $db = Loader::db();
        $psss = array();
        $txt = Loader::helper('text');
        CacheLocal::set('pssCheck', $this->getCollectionID().':'.$this->getVersionID(), true);

        $r1 = $db->GetAll(
            'select bID, arHandle, issID from CollectionVersionBlockStyles where cID = ? and cvID = ? and issID > 0',
            array($this->getCollectionID(), $this->getVersionID())
        );
        $r2 = $db->GetAll(
            'select arHandle, issID from CollectionVersionAreaStyles where cID = ? and cvID = ? and issID > 0',
            array($this->getCollectionID(), $this->getVersionID())
        );
        foreach ($r1 as $r) {
            $issID = $r['issID'];
            $arHandle = $txt->filterNonAlphaNum($r['arHandle']);
            $bID = $r['bID'];
            $obj = StyleSet::getByID($issID);
            if (is_object($obj)) {
                $b = new Block();
                $b->bID = $bID;
                $a = new Area($arHandle);
                $b->setBlockAreaObject($a);
                $obj = new BlockCustomStyle($obj, $b, $this->getCollectionThemeObject());
                $psss[] = $obj;
                CacheLocal::set(
                    'pssObject',
                    $this->getCollectionID().':'.$this->getVersionID().':'.$r['arHandle'].':'.$r['bID'],
                    $obj
                );
            }
        }

        foreach ($r2 as $r) {
            $issID = $r['issID'];
            $obj = StyleSet::getByID($issID);
            if (is_object($obj)) {
                $a = new Area($r['arHandle']);
                $obj = new AreaCustomStyle($obj, $a, $this->getCollectionThemeObject());
                $psss[] = $obj;
                CacheLocal::set(
                    'pssObject',
                    $this->getCollectionID().':'.$this->getVersionID().':'.$r['arHandle'],
                    $obj
                );
            }
        }

        // grab all the header block style rules for items in global areas on this page
        $rs = $db->GetCol(
            'select arHandle from Areas where arIsGlobal = 1 and cID = ?',
            array($this->getCollectionID())
        );
        if (count($rs) > 0) {
            $pcp = new Permissions($this);
            foreach ($rs as $garHandle) {
                if ($pcp->canViewPageVersions()) {
                    $s = Stack::getByName($garHandle, 'RECENT');
                } else {
                    $s = Stack::getByName($garHandle, 'ACTIVE');
                }
                if (is_object($s)) {
                    CacheLocal::set('pssCheck', $s->getCollectionID().':'.$s->getVersionID(), true);
                    $rs1 = $db->GetAll(
                        'select bID, issID, arHandle from CollectionVersionBlockStyles where cID = ? and cvID = ? and issID > 0',
                        array($s->getCollectionID(), $s->getVersionID())
                    );
                    foreach ($rs1 as $r) {
                        $issID = $r['issID'];
                        $obj = StyleSet::getByID($issID);
                        if (is_object($obj)) {
                            $b = new Block();
                            $b->bID = $r['bID'];
                            $a = new Area($r['arHandle']);
                            $b->setBlockAreaObject($a);
                            $obj = new BlockCustomStyle($obj, $b, $this->getCollectionThemeObject());
                            $psss[] = $obj;
                            CacheLocal::set(
                                'pssObject',
                                $s->getCollectionID().':'.$s->getVersionID().':'.$r['arHandle'].':'.$r['bID'],
                                $obj
                            );
                        }
                    }
                }
            }
        }

        $styleHeader = '';
        foreach ($psss as $st) {
            $css = $st->getCSS();
            if ($css !== '') {
                $styleHeader .= $st->getStyleWrapper($css);
            }
        }

        if (strlen(trim($styleHeader))) {
            if ($return == true) {
                return $styleHeader;
            } else {
                $v = \View::getInstance();
                $v->addHeaderItem($styleHeader);
            }
        }
    }
}
