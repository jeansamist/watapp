<?php

include_once '../config/headers.php';
include_once '../config/bd.php';
include_once '../config/classes/Autoloader.php';


$clientDate = "SELECT date FROM clients";
$clientDate = $pdo->query($clientDate);
$clientDate->fetch(PDO::FETCH_ASSOC);
echo ($clientDate); die();

$curentDate = (int)time();

for ($i=0; $i < count($clientDate); $i++) { 
    echo'a';
}

var_dump($date);