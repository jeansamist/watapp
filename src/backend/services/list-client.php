<?php

include_once '../config/headers.php';
include_once '../config/bd.php';
include_once '../config/classes/Autoloader.php';
Autoloader::register();

$reqSqlClient = $pdo->prepare('SELECT id, name, lastname, sex FROM clients');

$fetchData = $reqSqlClient->fetch();
$toReturn = new ReqResponse($fetchData);
var_dump($toReturn);