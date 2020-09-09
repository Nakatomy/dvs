<?php

return [
    'locale'            => 'en_GB',
    'urls' => [
        'background_url' => '/application/img/login.jpg',
    ],
    'white_label' => [
        'background_url' => '/application/img/login.jpg',
    ],
    'external' => [
        'news_overlay'  => false,
        'news'          => false,
        'intelligent_search_help' => false
    ],
    'misc' => [
        'help_overlay' => false,
        'enable_translate_locale_en_us' => true,
    ],
    'cache' => [
    ],
    'permissions'   => [
        'forward_to_login'  => true,
        'model'             => 'advanced',
    ],
    'accessibility' => [
        'display_help_system' => false
    ],
    'marketplace' => [
        'enabled' => false,
        'intelligent_search' => false,
    ],
    'social' => [
        'additional_services' => [
            ['cocins', 'Cocins', 'cocins'],
            ['mixcloud', 'Mixcloud', 'mixcloud'],
            ['quora', 'Quora', 'quora'],
            ['angellist', 'AngelList', 'angellist'],
            ['telegram', 'Telegram', 'telegram'],
            ['medium', 'Medium', 'medium'],
        ],
    ],
    "email" => [
        'default' => array(
            'address' => 'noreply@' . (isset($_SERVER['SERVER_NAME']) ? $_SERVER['SERVER_NAME'] : 'localhost'),
            'name'    => 'NoReply'
        ),
    ],
    "session" => [
        "name" => "SYSTEM"
    ],
    'seo' => [
        'url_rewriting'             => true,
        'url_rewriting_all'         => true,
        'redirect_to_canonical_url' => true,
        'canonical_url'             => null,
        'canonical_ssl_url'         => null,
    ],
    'file_manager' => [
        'restrict_uploaded_image_sizes' => true,
        'restrict_max_width' => 3840,
        'restrict_max_height' => 2160,
        'restrict_resize_quality' => 85,
    ]
];
