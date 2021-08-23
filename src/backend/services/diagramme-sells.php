<?php
// Diagramme sells Count API PAS COMPLET JE BLOCK :(
include_once '../config/headers.php';
include_once '../config/bd.php';
include_once '../config/classes/Autoloader.php';
include_once '../config/classes/splite-date.php';
Autoloader::register();

try {
    //The week-end start day
    $startDay = 'Mon';
    //Get token
    // $token = $_POST['structure'];
    //Time request_data
    $localTime = date('Y-m-d');
    // SQL Requests
    $dateSQLReq = "SELECT sell_date FROM sells ";
    $dateSQLReq = $pdo->query($dateSQLReq);
    if (in_array) {
        # code...
    }
    
    exit();
    // Controller
    if ($dateSQLReq === false) {
        // When Error !
        $toReturn = new ReqResponse(false, "Il y a eu une erreur !");
    } else {
        $dateNumber = $dateSQLReq->rowcount();
        $toReturn = new ReqResponse($dateNumber, "Nombre total de vente d'aujourd'hui");
    }

    exit();

    $mois = 8;
    $jour = 18;
    $annee = 2021;
    $timestamp = mktime(0, 0, 0, $mois, $jour, $annee);
    echo date('D', $timestamp);
} catch (\Throwable $th) {
    //throw $th;
}