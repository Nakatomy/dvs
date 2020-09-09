<?php

namespace Application\Block\File;

use Concrete\Core\Support\Facade\Application;
use Core;
use File;
use Concrete\Core\Block\BlockController;

class Controller extends BlockController
{
    protected $btInterfaceWidth = 300;
    protected $btCacheBlockRecord = true;
    protected $btCacheBlockOutput = true;
    protected $btCacheBlockOutputOnPost = true;
    protected $btCacheBlockOutputForRegisteredUsers = true;
    protected $btInterfaceHeight = 320;
    protected $btTable = 'btContentFile';

    protected $btExportFileColumns = array('fID');

    protected $fontAwesomeHelper = null;

    public function on_start()
    {
        parent::on_start();

        $this->fontAwesomeHelper = Application::make('base.font_awesome');
        $icons = $this->fontAwesomeHelper->get('readable');
        $this->set('icons', $icons);
    }

    /**
     * Used for localization. If we want to localize the name/description we have to include this.
     */
    public function getBlockTypeDescription()
    {
        return t("Link to files stored in the asset library.");
    }

    public function getBlockTypeName()
    {
        return t("File");
    }

    public function getJavaScriptStrings()
    {
        return [
            'file-required' => t('You must select a file.')
        ];
    }

    public function getSearchableContent()
    {
        return $this->fileLinkText;
    }

    public function validate_composer()
    {
        $f = $this->getFileObject();
        $e = Core::make('helper/validation/error');

        if (!is_object($f) || $f->isError() || !$f->getFileID()) {
            $e->add(t('You must specify a valid file.'));
        }

        return $e;
    }

    public function isComposerControlDraftValueEmpty()
    {
        $f = $this->getFileObject();

        return !(is_object($f) && !$f->isError());
    }

    public function save($args)
    {
        $args['forceDownload'] = ($args['forceDownload']) ? '1' : '0';

        parent::save($args);
    }

    public function validate($args)
    {
        $e = Core::make('helper/validation/error');

        if ($args['fID'] < 1) {
            $e->add(t('You must select a file.'));
        }

        if (trim($args['fileLinkText']) == '') {
            $e->add(t('You must give your file a link.'));
        }

        return $e;
    }

    public function getFileID()
    {
        return $this->fID;
    }

    public function getFileObject()
    {
        if ($this->fID) {
            return File::getByID($this->fID);
        }

        return null;
    }

    public function getLinkText()
    {
        if ($this->fileLinkText) {
            return $this->fileLinkText;
        }

        $f = $this->getFileObject();

        if ($f) {
            return $f->getTitle();
        }
    }
}
