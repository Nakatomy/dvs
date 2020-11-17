<?php

if (file_exists(__DIR__ . '/../../.env')) {
    $env = new \Dotenv\Dotenv(__DIR__ . '/../../');
    $env->load();
}

return array(
    'default-connection' => 'concrete',
    'connections' => array(
        'concrete' => array(
            'driver' => 'c5_pdo_mysql',
            'server' => getenv('DB_HOST'),
            'database' => getenv('DB_NAME'),
            'username' => getenv('DB_USER'),
            'password' => getenv('DB_PASSWORD'),
            'charset' => 'utf8',
        ),
    ),
);
