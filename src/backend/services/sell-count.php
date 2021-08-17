<?php
// Sell Count API
include_once '../config/headers.php';
include_once '../config/bd.php';
include_once '../config/classes/Autoloader.php';
Autoloader::register();
try {
    // SQL Requests
    $sellSQLReq = "SELECT id FROM sells";
    $sellSQLReq = $pdo->query($sellSQLReq);
    // Controller
    if ($sellSQLReq === false) {
        // When Error !
        $toReturn = new ReqResponse(false, "Il y a eu une erreur !");
    } else {
        $sellNumber = $sellSQLReq->rowcount();
        $toReturn = new ReqResponse($sellNumber, "Nombre total de clients d'aujourd'hui");
    }
} catch (Exception $e) {
    $toReturn = new ReqResponse(false, $e->getMessage());
}
echo json_encode($toReturn);