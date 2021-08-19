<?php

include_once '../config/headers.php';
include_once '../config/bd.php';
include_once '../config/classes/Autoloader.php';
Autoloader::register();

$reqSqlStock = $pdo->prepare('SELECT id, articles, qties FROM sells');

$fetchData = $reqSqlStock->fetch();
$toReturn = new ReqResponse($fetchData);
var_dump($toReturn);