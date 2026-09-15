<?php

declare(strict_types=1);

// The PHP auth gate includes this file only after the user has authenticated.
// The compiled app is exported locally to static/*.html during deployment, so
// Hostinger only needs PHP to serve the already-rendered website.
$route = trim((string) ($_GET['page'] ?? ''), '/');
$routes = [
    '' => 'index.html',
    'about' => 'about.html',
    'contact' => 'contact.html',
    'investor-relations' => 'investor-relations.html',
    'project' => 'project.html',
    'team' => 'team.html',
    'vision' => 'vision.html',
];

$file = __DIR__ . '/static/' . ($routes[$route] ?? 'index.html');
if (!is_file($file)) {
    http_response_code(503);
    echo 'The protected website has not been exported. Run npm run build:static locally and upload protected-site/static.';
    exit;
}

header('Content-Type: text/html; charset=UTF-8');
readfile($file);
