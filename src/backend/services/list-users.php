<?php

include_once '../config/headers.php';
include_once '../config/bd.php';
include_once '../config/classes/Autoloader.php';
Autoloader::register();


$reqSqlClient = $pdo->prepare('SELECT full_name, user_role FROM users');

$fetchData = $reqSqlClient->fetch();
$toReturn = new ReqResponse($fetchData);
print_r($toReturn);