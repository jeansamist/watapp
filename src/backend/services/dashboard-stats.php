<?php
// Buy Count API
include_once '../config/headers.php';
include_once '../config/bd.php';
include_once '../config/classes/Autoloader.php';
Autoloader::register();
try {
    //Get token
    $token = $_GET['structure'];
    //Time request_data
    $localTime = date('Y-m-d');
    // SQL Requests
    $buySQLReq = $pdo->prepare("SELECT * FROM sells WHERE sell_date = ? AND structure = ?");
    $buySQLReq->execute([
        $localTime,
        $token,
      ]);

    $montantSQLReq = $pdo->prepare("SELECT totality FROM sells WHERE sell_date = ? AND structure = ?");
    $montantSQLReq->execute([
        $localTime,
        $token
      ]);

    $visiteSQLReq = $pdo->prepare("SELECT * FROM sells");
    $visiteSQLReq->execute([
        $localTime,
    ]);
    // Controller
    if ($buySQLReq === false) {
        // When Error !
        $toReturn = new ReqResponse(false, "Il y a eu une erreur !");
    } else {
        $buyNumber = $buySQLReq->rowcount();
    }

    if ($montantSQLReq === false) {
        // When Error !
        $toReturn = new ReqResponse(false, "Il y a eu une erreur !");
    } else {
        $montantNumbers = $montantSQLReq->fetchAll();
        $montantNumber = 0;
        foreach ($montantNumbers as $value) {
           $montantNumber = $montantNumber + ((int) $value->totality);
        }
    }

    if ($visiteSQLReq === false) {
        // When Error !
        $toReturn3 = new ReqResponse(false, "Il y a eu une erreur !");
    } else {
        $visiteNumber = $visiteSQLReq->rowcount();
    }
    $toReturn = new ReqResponse([$buyNumber, $montantNumber, $visiteNumber]);

} catch (Exception $e) {
    $toReturn = new ReqResponse(false, $e->getMessage());
}
echo json_encode($toReturn);