<?php

return [
    'locale' => 'en_US',
    'external' => [
        'enable_legacy_src_namespace' => true
    ],
    'providers' => [
        'application'           => 'Application\Src\Provider\Application',
        'core_multilingual'     => 'Application\Src\Multilingual\MultilingualServiceProvider',
        'core_utility'          => 'Application\Src\Utility\UtilityServiceProvider',
    ],
    'theme_paths' => array(
        '/login'            => 'base',
        '/register'         => 'base',
        '/account'          => '',
        '/account/*'        => '',
    ),
    'asset_groups' => [
        'core/app'                 => array(
            array(
                array('javascript', 'jquery'),
                array('javascript', 'core/events'),
                array('javascript', 'underscore'),
                array('javascript', 'backbone'),
                array('javascript', 'bootstrap/dropdown'),
                array('javascript', 'bootstrap/tooltip'),
                array('javascript', 'bootstrap/popover'),
                array('javascript', 'jquery/ui'),
                array('javascript-localized', 'jquery/ui'),
                array('javascript-localized', 'core/localization'),
                array('javascript', 'core/app'),
                array('css', 'core/app'),
                array('css', 'jquery/ui')
            )
        ),
    ]
];
