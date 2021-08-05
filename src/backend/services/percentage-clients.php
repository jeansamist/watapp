<?php

include_once '../config/headers.php';
include_once '../config/bd.php';
include_once '../config/classes/Autoloader.php';
Autoloader::register();


$curentDate1 = (int)time() - (3600 * 24);
$curentDate2 = (int)time() - (3600 * 24) - (3600 * 24);

$clientDateSQL = 'SELECT id FROM clients WHERE date >= ? AND date <= ? ';
$clientDateReq = $pdo->prepare($clientDateSQL);
$clientDateReq->execute([
    $curentDate2,
    $curentDate1
]);

$fetchData = $clientDateReq->fetch();
$toReturn = new ReqResponse($fetchData);
var_dump($toReturn);