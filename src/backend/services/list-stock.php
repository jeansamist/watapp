<?php

include_once '../config/headers.php';
include_once '../config/bd.php';
include_once '../config/classes/Autoloader.php';
Autoloader::register();


$reqSqlStock = $pdo->prepare('SELECT id, name, unitaryprice, stocknumber FROM produits');

$fetchData = $reqSqlStock->fetch();
$toReturn = new ReqResponse($fetchData);
print_r($toReturn);