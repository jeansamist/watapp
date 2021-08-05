<?php

include_once '../config/headers.php';
include_once '../config/bd.php';
include_once '../config/classes/Autoloader.php';



// API DE DECOMPTAGE DES PERSONNE DANS DANS LA BD

$usersql = "SELECT id FROM users";
$usernumber = $pdo->query($usersql);
$number = $usernumber->rowcount();






//EN CAS D'ERREUR
if ($usernumber === false) {
    die('ERREUR');
} else {
    $row = $usernumber->fetch(PDO::FETCH_ASSOC);
    echo json_encode($number);
}