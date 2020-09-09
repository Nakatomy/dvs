<?php

namespace Application\Src\Package;

use Concrete\Core\Asset\AssetList;
use Concrete\Core\Attribute\Type as AttributeType;
use Concrete\Core\Package\Package;
use Concrete\Core\Block\BlockType\BlockType;
use Concrete\Core\Block\BlockType\Set as BlockTypeSet;
use Concrete\Core\Page\Type\Composer\Control\CorePageProperty\DescriptionCorePageProperty;
use Concrete\Core\Page\Type\Composer\Control\CorePageProperty\NameCorePageProperty;
use Concrete\Core\Page\Type\Composer\Control\CorePageProperty\PublishTargetCorePageProperty;
use Concrete\Core\Page\Type\Composer\Control\CorePageProperty\UrlSlugCorePageProperty;
use Concrete\Package\Base\Src\Thumbnail\Type\Generator;
use Concrete\Core\Support\Facade\Route;
use Symfony\Component\Config\FileLocator;
use Concrete\Core\Support\Facade\Application;
use Symfony\Component\Filesystem\Filesystem;
use Concrete\Core\Foundation\Service\ProviderList;
use Concrete\Core\Page\Template;
use Concrete\Core\Page\Type\Type;
use Concrete\Core\Page\Single as SinglePage;
use Symfony\Component\HttpFoundation\Request;
use Concrete\Core\Page\Theme\Theme;
use Symfony\Component\Yaml\Yaml;
use Concrete\Core\Page\Type\Composer\FormLayoutSet as LayoutSet;
use Concrete\Core\Attribute\Key\Category as AttributeKeyCategory;
use Concrete\Core\Backup\ContentImporter;

abstract class BasePackage extends Package
{
    protected $request;

    /**
     * @return array
     */
    public function getBlockTypeSets()
    {
        return [];
    }

    /**
     * @return array
     */
    public function getBlockTypes()
    {
        return [];
    }

    /**
     * @return array
     */
    public function getExternalBlockTemplates()
    {
        return [];
    }

    /**
     * @return array
     */
    public function getProviders()
    {
        return [];
    }

    /**
     * @return array
     */
    public function getPageTypes()
    {
        return [];
    }

    /**
     * @return array
     */
    public function getPageTemplates()
    {
        return [];
    }

    /**
     * @return array
     */
    public function getSinglePages()
    {
        return [];
    }

    /**
     * @return array
     */
    public function getThumbnails()
    {
        return [];
    }

    /**
     * @return array
     * @deprecated
     */
    public function getThemes()
    {
        return [];
    }

    /**
     * @return array
     */
    public function getAssetGroups()
    {
        return [];
    }

    /**
     * @return array
     */
    public function getAssets()
    {
        return [];
    }

    /**
     * @return array
     */
    public function getRoutes()
    {
        return [];
    }

    public function getAttributeTypes()
    {
        return [];
    }

    public function getBlockTypesToRefresh()
    {
        return [];
    }

    public function __construct()
    {
        $this->request = Request::createFromGlobals();
    }

    public function installBlockTypeSets()
    {
        if ($this->getBlockTypeSets()) {
            foreach ($this->getBlockTypeSets() as $blockTypeSet) {
                try {
                    $existingBlockTypeSet = BlockTypeSet::getByHandle($blockTypeSet['handle']);

                    if (!$existingBlockTypeSet) {
                        BlockTypeSet::add($blockTypeSet['handle'], $blockTypeSet['name']);
                    }
                } catch (\Exception $e) {
                    throw new \Exception($e->getMessage());
                }
            }
        }
    }

    public function installBlockTemplates()
    {
        $fs = new Filesystem();

        foreach ($this->getExternalBlockTemplates() as $block) {
            $path = $this->getPackagePath() . '/' . DIRNAME_EXTERNAL_BLOCK_TEMPLATES . '/' . $block . '/' . DIRNAME_BLOCK_TEMPLATES;
            $fs->mirror($path, DIR_APPLICATION . '/blocks/' . $block . '/' . DIRNAME_BLOCK_TEMPLATES);
        }
    }

    public function installBlockTypes()
    {
        if ($this->getBlockTypes()) {
            foreach ($this->getBlockTypes() as $blockType) {
                $existingBlockType = BlockType::getByHandle($blockType['handle']);

                if (!$existingBlockType) {
                    BlockType::installBlockType($blockType['handle'], Package::getByHandle($this->getPackageHandle()));
                }

                if (isset($blockType['set']) && $blockType['set']) {
                    $blockTypeSet = BlockTypeSet::getByHandle($blockType['set']);

                    if ($blockTypeSet) {
                        $blockTypeSet->addBlockType(BlockType::getByHandle($blockType['handle']));
                    }
                }
            }
        }
    }

    public function installAttributes($package)
    {
        $attributesConfig = $this->parseAttributeConfig();

        if (!$attributesConfig) {
            return;
        }

        foreach ($attributesConfig['attributes'] as $attributeConfig) {
            foreach ($attributeConfig['allowed'] as $attributeCategory) {
                $categoryClassName = 'Concrete\\Core\\Attribute\\Key\\' . ucfirst($attributeCategory) . 'Key';

                // Invalid category handle
                if (!is_callable($categoryClassName . '::getByHandle')) {
                    continue;
                }

                $attr = call_user_func($categoryClassName . '::getByHandle', $attributeConfig['handle']);

                if ($attr) {
                    continue;
                }

                $options = [
                    'akHandle'       => $attributeConfig['handle'],
                    'akName'         => $attributeConfig['name'],
                    'akIsSearchable' => true
                ];

                if (array_key_exists("options", $attributesConfig)) {
                    array_merge($options, $attributeConfig["options"]);
                }

                call_user_func(
                    $categoryClassName . '::add',
                    AttributeType::getByHandle($attributeConfig['type']),
                    $options,
                    $package
                );
            }
        }
    }

    protected function installPageTemplates()
    {
        if ($this->getPageTemplates()) {
            foreach ($this->getPageTemplates() as $pageTemplate) {
                $template = Template::getByHandle($pageTemplate['handle']);

                if (!$template) {
                    Template::add(
                        $pageTemplate['handle'],
                        $pageTemplate['name'],
                        FILENAME_PAGE_TEMPLATE_DEFAULT_ICON,
                        Package::getByHandle($this->getPackageHandle())
                    );
                }
            }
        }
    }

    protected function installPageTypes()
    {
        if ($this->getPageTypes()) {
            foreach ($this->getPageTypes() as $pageType) {
                $type = Type::getByHandle($pageType['handle']);

                if (!$type) {
                    $type = Type::add([
                        'handle'          => $pageType['handle'],
                        'name'            => $pageType['name'],
                        'defaultTemplate' => $pageType['default_template']
                    ], Package::getByHandle($this->getPackageHandle()));

                    /** @var LayoutSet $layoutSet */
                    $layoutSet = $type->addPageTypeComposerFormLayoutSet('Common', 'Common');
                    $this->setUpComposerForm($layoutSet);
                }
            }
        }
    }

    public function installSinglePages(Package $package)
    {
        if ($this->getSinglePages()) {
            foreach ($this->getSinglePages() as $singlePage) {
                SinglePage::add($singlePage, $package);
            }
        }
    }

    public function installThumbnails()
    {
        /** @var Generator $thumbnailTypeGenerator */
        $thumbnailTypeGenerator = Application::make('application.thumbnail.type.generator');

        foreach ($this->getThumbnails() as $thumbnail) {
            $thumbnailTypeGenerator->generate($thumbnail);
        }
    }

    public function install()
    {
        $this->registerExtraConfiguration();

        $package = parent::install();

        $this->registerProviders();
        $this->importContent();
        $this->registerProviders();
        $this->installBlockTypeSets();
        $this->installBlockTypes();
        $this->installBlockTemplates();
        $this->installAttributeTypes($package);
        $this->installAttributes($package);
        $this->installPageTemplates();
        $this->installPageTypes();
        $this->installSinglePages($package);
        $this->installThumbnails();
        $this->registerFrontEndDependencies();
        $this->installThemes($package);
        $this->registerEventListeners();
        $this->refreshBlockTypes();

        return $package;
    }

    public function importContent()
    {
        $ci = new ContentImporter();

        if (file_exists($this->getPackagePath() . '/files')) {
            $ci->importFiles($this->getPackagePath() . '/files');
        }

        if (file_exists($this->getPackagePath() . '/content.xml')) {
            $ci->importContentFile($this->getPackagePath() . '/content.xml');
        }
    }

    public function on_start()
    {
        //TODO fix
        $fileSystem = new Filesystem();

        if (\Core::offsetExists("twig.loader") && $fileSystem->exists($this->getPackagePath() . "/views")) {
            \Core::make("twig.loader")->addPath($this->getPackagePath() . "/views", "package." . $this->getPackageHandle());
        }

        $this->registerProviders();
        $this->registerExtraConfiguration();
        $this->registerEventListeners();
        $this->registerAssets();
        $this->registerRoutes();

        \Events::addListener('on_before_render', function($event) {
            $this->registerToolbarButtons();
        });
    }

    protected function registerExtraConfiguration()
    {
        $fileSystem = new Filesystem();

        if ($fileSystem->exists($this->getPackagePath() . '/src/Resources/config.yml')) {
            $locator = new FileLocator($this->getPackagePath() . '/src/Resources');
            $resource = $locator->locate('config.yml', null, true);

            Application::make('sf2')->addConfigResource($resource);
        }
    }

    protected function registerEventListeners()
    {

    }

    protected function registerProviders()
    {
        if ($this->getProviders()) {
            $providerList = new ProviderList(Application::getFacadeRoot());
            $providerList->registerProviders($this->getProviders());
        }
    }

    protected function registerFrontEndDependencies()
    {
        $path = $this->DIR_PACKAGES . "/" . $this->getPackageHandle();

        if (file_exists($path . '/package.json')) {
            Application::make("application.frontend.yarn_local_package")->add(
                "package_" . $this->getPackageHandle(),
                "./" . DIRNAME_PACKAGES . "/" . $this->getPackageHandle()
            );
        }
    }

    /**
     * @deprecated
     */
    protected function installThemes(Package $package)
    {
        if ($this->getThemes()) {
            foreach ($this->getThemes() as $theme) {
                $themeObj = Theme::getByHandle($theme);

                if (!$themeObj) {
                    $installedTheme = Theme::add($theme, $package);
                    $installedTheme->applyToSite();
                }
            }
        }
    }

    protected function installAttributeTypes($package)
    {
        if ($this->getAttributeTypes()) {
            foreach ($this->getAttributeTypes() as $attribute) {
                $type = AttributeType::getByHandle($attribute["handle"]);
                if (!is_object($type)) {
                    $type = AttributeType::add($attribute["handle"], $attribute["name"], $package);

                    if (array_key_exists("categories", $attribute)) {
                        foreach ($attribute["categories"] as $category) {
                            $col = AttributeKeyCategory::getByHandle($category);
                            $col->associateAttributeKeyType($type);
                        }
                    }
                }
            }
        }
    }

    public function uninstall()
    {
        parent::uninstall();

        $path = $this->DIR_PACKAGES . "/" . $this->getPackageHandle();

        if (file_exists($path . '/package.json')) {
            Application::make("application.frontend.yarn_local_package")->remove("package_" . $this->getPackageHandle());
        }
    }

    /**
     * @return array
     */
    protected function parseAttributeConfig()
    {
        $attributesConfigFile = $this->getPackagePath() . '/src/Resources/attributes.yml';
        $fileSystem = new Filesystem();

        if (!$fileSystem->exists($attributesConfigFile)) {
            return null;
        }

        $attributesConfigFileContent = file_get_contents($attributesConfigFile);

        if (!$attributesConfigFileContent) {
            return null;
        }

        return $attributesConfig = Yaml::parse($attributesConfigFileContent);
    }

    /**
     * @param $layoutSet
     */
    protected function setUpComposerForm($layoutSet)
    {
        $name = new NameCorePageProperty();
        $name->addToPageTypeComposerFormLayoutSet($layoutSet);

        $description = new DescriptionCorePageProperty();
        $description->addToPageTypeComposerFormLayoutSet($layoutSet);

        $urlSlug = new UrlSlugCorePageProperty();
        $urlSlug->addToPageTypeComposerFormLayoutSet($layoutSet);

        $pageLocation = new PublishTargetCorePageProperty();
        $pageLocation->addToPageTypeComposerFormLayoutSet($layoutSet);
    }

    protected function registerAssets()
    {
        $assetList = AssetList::getInstance();

        foreach ($this->getAssets() as $asset) {
            $assetList->register($asset['type'], $asset['handle'], $asset['file_name'], (array) $asset['options'], $this);
        }

        foreach ($this->getAssetGroups() as $assetGroup) {
            $assetList->registerGroup($assetGroup['handle'], $assetGroup['assets']);
        }
    }

    protected function registerRoutes()
    {
        if ($this->getRoutes()) {
            foreach ($this->getRoutes() as $route) {
                Route::register($route['path'], $route['callback'], $route['handle'], (array) $route['reqs'], (array) $route['options'], $route['host'], $route['schemes'], $route['methods'], $route['conditions']);
            }
        }
    }

    protected function getToolbarButtons()
    {
        return [];
    }

    protected function registerToolbarButtons()
    {
        if ($this->getToolbarButtons() && !$this->request->isXmlHttpRequest()) {
            foreach ($this->getToolbarButtons() as $toolbarButton) {
                $toolbarButton->register();
            }
        }
    }

    protected function refreshBlockTypes()
    {
        if ($this->getBlockTypesToRefresh()) {
            foreach ($this->getBlockTypesToRefresh() as $blockType) {
                BlockType::getByHandle($blockType)->refresh();
            }
        }
    }
}
