<?php
// Clients Count API
include_once '../config/headers.php';
include_once '../config/bd.php';
include_once '../config/classes/Autoloader.php';
Autoloader::register();
try {
    // SQL Requests
    $clientsSQLReq = "SELECT id FROM clients";
    $clientsReq = $pdo->query($clientsSQLReq);
    // Controller
    if ($clientsReq === false) {
        // When Error !
        $toReturn = new ReqResponse(false, "Il y a eu une erreur !");
    } else {
        $clientsNumber = $clientsReq->rowcount();
        $toReturn = new ReqResponse($clientsNumber, "Nombre total de clients d'aujourd'hui");
    }
} catch (Exception $e) {
    $toReturn = new ReqResponse(false, $e->getMessage());
}
echo json_encode($toReturn);