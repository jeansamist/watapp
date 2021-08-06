<?php
// Clients Count API
include_once '../config/headers.php';
include_once '../config/bd.php';
include_once '../config/classes/Autoloader.php';
Autoloader::register();
try {
    // SQL Requests
    $stocksSQLReq = "SELECT id FROM produits WHERE stocknumber = 0";
    $stocksSQLReq = $pdo->query($stocksSQLReq);
    // Controller
    if ($stocksSQLReq === false) {
        // When Error !
        $toReturn = new ReqResponse(false, "Il y a eu une erreur !");
    } else {
        $stocksNumber = $stocksSQLReq->rowcount();
        $toReturn = new ReqResponse($stocksNumber, "Nombre total de clients d'aujourd'hui");
    }
} catch (Exception $e) {
    $toReturn = new ReqResponse(false, $e->getMessage());
}
echo json_encode($toReturn);