<?php

namespace Application\Theme\Base;

use Concrete\Core\Area\Layout\Preset\Provider\ThemeProviderInterface;
use Concrete\Core\Asset\AssetList;
use Concrete\Core\Permission\Checker as PermissionChecker;
use Concrete\Core\Support\Facade\Config;
use Concrete\Package\Base\Src\Layout\Type\FooterType;
use Concrete\Package\Base\Src\Layout\Type\HeaderType;
use Concrete\Package\Base\Src\Theme\Theme;

class PageTheme extends Theme implements ThemeProviderInterface
{
    protected $pThemeGridFrameworkHandle = 'bootstrap4';

    public function __construct()
    {
        parent::__construct();

        $this->sectionManager
            ->addSection(new HeaderType('elements/header/types/empty.php', t('Empty Header'), 'base'))
            ->addSection(new HeaderType('elements/header/types/default.php', t('Default Header'), 'base'))
            ->addSection(new HeaderType('elements/header/types/logo_left.php', t('Logo On The Left'), 'base'))
            ->addSection(new HeaderType('elements/header/types/logo_center.php', t('Logo On The Center'), 'base'))
            ->addSection(new FooterType('elements/footer/types/empty.php', t('Empty Footer'), 'base'))
            ->addSection(new FooterType('elements/footer/types/default.php', t('Default Footer'), 'base'))
            ->addSection(new FooterType('elements/footer/types/spaces_stretched.php', t('Spaces stretched'), 'base'))
            ->addSection(new FooterType('elements/footer/types/multi_line.php', t('Multi line'), 'base'))
        ;
    }

    public function registerAssets()
    {
        $assetList = AssetList::getInstance();

        $assetList->register('css', 'theme.base.css', 'css/dist/base.css', [
            'combine' => false,
            'minify' => false
        ]);
            $assetList->register('css', 'loader.css', 'css/dist/loader.css', [
                'combine' => false,
                'minify' => false
            ]);
        $assetList->register('javascript', 'theme.base.js', 'js/dist/base.js', [
            'combine' => false,
            'minify' => false,
        ]);
            $assetList->register('javascript', 'loader.js', 'js/dist/loader.js', [
                'combine' => false,
                'minify' => false,
            ]);

        $assetList->registerGroup('theme.base', [
            ['css', 'theme.base.css'],
            ['javascript', 'vue'],
            ['javascript', 'theme.base.js'],
        ]);

        $assetList->registerGroup('theme.base.loader', [
            ['javascript', 'loader.js'],
            ['css', 'loader.css']
        ]);

        if (!Config::get('concrete.cache.assets')) {
            $themeAssets = AssetList::getInstance()->getAssetGroup('theme.base');
            foreach ($themeAssets->getAssetPointers() as $assetPointer) {
                $assetPointer->getAsset()->setAssetURL(str_replace('@', '?token=', $assetPointer->getAsset()->getAssetHashKey()));
            }
        }

        $this->requireAsset('javascript', 'jquery');
        $this->requireAsset('theme.base');

        $permission = new PermissionChecker($this->c);

        if (!$permission->canEditPageContents()) {
            $this->registerUserAssets();
        } else {
            $this->registerAdminAssets();
        }
    }

    public function registerAdminAssets()
    {
        $this->requireAsset('javascript', 'vue.sortable');
        $this->requireAsset('javascript', 'vue.draggable');
        $this->requireAsset('javascript', 'vue.utils');
    }

    public function registerUserAssets()
    {
        $this->requireAsset('theme.base.loader');
    }

    public function getThemeAreaLayoutPresets()
    {
        $presets = [
            [
                'handle' => 'center_1',
                'name' => t('Center 1/1'),
                'container' => '<div class="container"></div>',
                'columns' => [
                    '<div class="w-100"></div>',
                ],
            ],
            [
                'handle' => 'center_2',
                'name' => t('Center 2/2'),
                'container' => '<div class="container d-flex no-padding-horizontal"></div>',
                'columns' => [
                    '<div class="col-md-6"></div>',
                    '<div class="col-md-6"></div>'
                ],
            ],
            [
                'handle' => 'center_3',
                'name' => t('Center 3/3'),
                'container' => '<div class="container d-flex no-padding-horizontal"></div>',
                'columns' => [
                    '<div class="col-md-4"></div>',
                    '<div class="col-md-4"></div>',
                    '<div class="col-md-4"></div>'
                ],
            ],
            [
                'handle' => 'center_4',
                'name' => t('Center 4/4'),
                'container' => '<div class="container d-flex no-padding-horizontal"></div>',
                'columns' => [
                    '<div class="col-md-3"></div>',
                    '<div class="col-md-3"></div>',
                    '<div class="col-md-3"></div>',
                    '<div class="col-md-3"></div>'
                ],
            ],
            [
                'handle' => 'center_1-3',
                'name' => t('Center 1/3 + 2/3'),
                'container' => '<div class="container d-flex no-padding-horizontal"></div>',
                'columns' => [
                    '<div class="col-md-4"></div>',
                    '<div class="col-md-8"></div>'
                ],
            ],
            [
                'handle' => 'center_2-3',
                'name' => t('Center 2/3 + 1/3'),
                'container' => '<div class="container d-flex align-items-center no-padding-horizontal"></div>',
                'columns' => [
                    '<div class="col-md-8"></div>',
                    '<div class="col-md-4"></div>'
                ],
            ],
            [
                'handle' => 'center_1-4',
                'name' => t('Center 1/4 + 3/4'),
                'container' => '<div class="container d-flex no-padding-horizontal"></div>',
                'columns' => [
                    '<div class="col-md-3"></div>',
                    '<div class="col-md-9"></div>'
                ],
            ],
            [
                'handle' => 'center_3-4',
                'name' => t('Center 3/4 + 1/4'),
                'container' => '<div class="container d-flex no-padding-horizontal"></div>',
                'columns' => [
                    '<div class="col-md-9"></div>',
                    '<div class="col-md-3"></div>'
                ],
            ],
            [
                'handle' => 'fluid_1',
                'name' => t('Fluid 1/1'),
                'container' => '<div class="row"></div>',
                'columns' => [
                    '<div class="col-12"></div>'
                ],
            ],
            [
                'handle' => 'fluid_2',
                'name' => t('Fluid 2/2'),
                'container' => '<div class="row"></div>',
                'columns' => [
                    '<div class="col-md-6"></div>',
                    '<div class="col-md-6"></div>'
                ],
            ],
            [
                'handle' => 'fluid_3',
                'name' => t('Fluid 3/3'),
                'container' => '<div class="row"></div>',
                'columns' => [
                    '<div class="col-md-4"></div>',
                    '<div class="col-md-4"></div>',
                    '<div class="col-md-4"></div>'
                ],
            ],
            [
                'handle' => 'fluid_4',
                'name' => t('Fluid 4/4'),
                'container' => '<div class="row"></div>',
                'columns' => [
                    '<div class="col-md-3"></div>',
                    '<div class="col-md-3"></div>',
                    '<div class="col-md-3"></div>',
                    '<div class="col-md-3"></div>'
                ],
            ],
            [
                'handle' => 'fluid_1-3',
                'name' => t('Fluid 1/3 + 2/3'),
                'container' => '<div class="row"></div>',
                'columns' => [
                    '<div class="col-md-4"></div>',
                    '<div class="col-md-8"></div>'
                ],
            ],
            [
                'handle' => 'fluid_2-3',
                'name' => t('Fluid 2/3 + 1/3'),
                'container' => '<div class="row"></div>',
                'columns' => [
                    '<div class="col-md-8"></div>',
                    '<div class="col-md-4"></div>'
                ],
            ],
            [
                'handle' => 'fluid_1-4',
                'name' => t('Fluid 1/4 + 3/4'),
                'container' => '<div class="row"></div>',
                'columns' => [
                    '<div class="col-md-3"></div>',
                    '<div class="col-md-9"></div>'
                ],
            ],
            [
                'handle' => 'fluid_3-4',
                'name' => t('Fluid 3/4 + 1/4'),
                'container' => '<div class="row"></div>',
                'columns' => [
                    '<div class="col-md-9"></div>',
                    '<div class="col-md-3"></div>'
                ],
            ],
            [
                'handle' => 'fluid_centered_large ',
                'name' => t('Fluid centered large'),
                'container' => '<div class="container-fluid d-flex no-padding-horizontal"></div>',
                'columns' => [
                    '<div class="col-hd-10 col-xl-11 col-md-11 mx-auto"></div>'
                ],
            ],
            [
                'handle' => 'fluid_centered_medium ',
                'name' => t('Fluid centered medium'),
                'container' => '<div class="container-fluid d-flex no-padding-horizontal"></div>',
                'columns' => [
                    '<div class="col-hd-8 col-xl-9 col-lg-10 col-md-10 mx-auto"></div>'
                ],
            ],
            [
                'handle' => 'fluid_centered_small ',
                'name' => t('Fluid centered small'),
                'container' => '<div class="container-fluid d-flex no-padding-horizontal"></div>',
                'columns' => [
                    '<div class="col-hd-6 col-xl-7 col-lg-8 col-md-9 mx-auto"></div>'
                ],
            ],
            [
                'handle' => 'full_1',
                'name' => t('Full 1/1'),
                'container' => '<div class="row"></div>',
                'columns' => [
                    '<div class="col-md-12 no-padding-horizontal"></div>'
                ],
            ],
            [
                'handle' => 'full_2',
                'name' => t('Full 2/2'),
                'container' => '<div class="row"></div>',
                'columns' => [
                    '<div class="col-md-6 no-padding-horizontal"></div>',
                    '<div class="col-md-6 no-padding-horizontal"></div>'
                ],
            ],
            [
                'handle' => 'full_3',
                'name' => t('Full 3/3'),
                'container' => '<div class="row"></div>',
                'columns' => [
                    '<div class="col-md-4 no-padding-horizontal"></div>',
                    '<div class="col-md-4 no-padding-horizontal"></div>',
                    '<div class="col-md-4 no-padding-horizontal"></div>'
                ],
            ],
            [
                'handle' => 'full_4',
                'name' => t('Full 4/4'),
                'container' => '<div class="row"></div>',
                'columns' => [
                    '<div class="col-md-3 no-padding-horizontal"></div>',
                    '<div class="col-md-3 no-padding-horizontal"></div>',
                    '<div class="col-md-3 no-padding-horizontal"></div>',
                    '<div class="col-md-3 no-padding-horizontal"></div>'
                ],
            ],
            [
                'handle' => 'full_1-3',
                'name' => t('Full 1/3 + 2/3'),
                'container' => '<div class="row"></div>',
                'columns' => [
                    '<div class="col-md-4 no-padding-horizontal"></div>',
                    '<div class="col-md-8 no-padding-horizontal"></div>'
                ],
            ],
            [
                'handle' => 'full_2-3',
                'name' => t('Full 2/3 + 1/3'),
                'container' => '<div class="row"></div>',
                'columns' => [
                    '<div class="col-md-8 no-padding-horizontal"></div>',
                    '<div class="col-md-4 no-padding-horizontal"></div>'
                ],
            ],
            [
                'handle' => 'full_1-4',
                'name' => t('Full 1/4 + 3/4'),
                'container' => '<div class="row"></div>',
                'columns' => [
                    '<div class="col-md-3 no-padding-horizontal"></div>',
                    '<div class="col-md-9 no-padding-horizontal"></div>'
                ],
            ],
            [
                'handle' => 'full_3-4',
                'name' => t('Full 3/4 + 1/4'),
                'container' => '<div class="row"></div>',
                'columns' => [
                    '<div class="col-md-9 no-padding-horizontal"></div>',
                    '<div class="col-md-3 no-padding-horizontal"></div>'
                ],
            ],
            [
                'handle' => 'extra-padding-plus',
                'name' => t('Extra padding plus'),
                'container' => '<div class="d-flex"></div>',
                'columns' => [
                    '<div class="col-12"></div>',
                ],
            ],
            [
                'handle' => 'extra-padding-minus',
                'name' => t('Extra padding minus'),
                'container' => '<div class="row"></div>',
                'columns' => [
                    '<div class="col-12 no-padding-horizontal"></div>',
                ],
            ],
            [
                'handle' => 'home_about_us_section',
                'name' => t('Home About Us Section'),
                'container' => '<div class="home-about-us-section container d-flex no-padding-horizontal"></div>',
                'columns' => [
                    '<div class="col-12 col-md-8 offset-md-4"></div>',
                    '<div class="col-md-4"></div>',
                    '<div class="col-md-8"></div>'
                ],
            ],
            [
                'handle' => 'home_solutions_section',
                'name' => t('Home Solutions Section'),
                'container' => '<div class="home-solutions-section container d-flex no-padding-horizontal"></div>',
                'columns' => [
                    '<div class="col-12 col-md-8 offset-md-4"></div>',
                    '<div class="col-md-4"></div>',
                    '<div class="col-md-8"></div>',
                    '<div id="infograph-wrapper" class="col-md-12"></div>'
                ],
            ],
            [
                'handle' => 'home_guarantee_section',
                'name' => t('Home Guarantee Section'),
                'container' => '<div class="home-guarantee-section container d-flex no-padding-horizontal"></div>',
                'columns' => [
                    '<div class="col-md-8 mx-auto"></div>'
                ],
            ],
            [
                'handle' => 'home_media_section',
                'name' => t('Home Media Section'),
                'container' => '<div class="home-media-section container d-flex no-padding-horizontal"></div>',
                'columns' => [
                    '<div class="col-md-12 media-title"></div>',
                    '<div class="col-md-12 media-content"></div>'
                ],
            ],
            [
                'handle' => 'home_contact_section',
                'name' => t('Home Contact Section'),
                'container' => '<div class="home-contact-section container d-flex no-padding-horizontal"></div>',
                'columns' => [
                    '<div class="col-12 col-md-8 offset-md-4"></div>',
                    '<div class="col-md-4 contact-info"></div>',
                    '<div class="col-md-8"></div>',
                ],
            ],
            [
                'handle' => 'center_1_background_dark',
                'name' => t('Center 1/1 Bakcground: Dark'),
                'container' => '<div class="background-dark-wrapper"></div>',
                'columns' => [
                    '<div class="container"></div>',
                ],
            ],
            [
                'handle' => 'title_w_button',
                'name' => t('Title with Button'),
                'container' => '<div class="row title-w-button-wrapper"></div>',
                'columns' => [
                    '<div class="col-md-6"></div>',
                    '<div class="col-md-6 align-items-center justify-content-around"></div>'
                ],
            ],
            [
                'handle' => 'team_wrapper_3',
                'name' => t('Team Wrapper 3/3'),
                'container' => '<div class="row team-wrapper"></div>',
                'columns' => [
                    '<div class="col-md-4"></div>',
                    '<div class="col-md-4"></div>',
                    '<div class="col-md-4"></div>'
                ],
            ],
        ];

        return $presets;
    }
}
