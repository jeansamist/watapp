<?php
// Buy Count API
include_once '../config/headers.php';
include_once '../config/bd.php';
include_once '../config/classes/Autoloader.php';
Autoloader::register();
try {
    //Get token
    $token = $_POST['structure'];
    //Time request_data
    $localTime = date('Y-m-d');
    var_dump($localTime);
    // SQL Requests
    $buySQLReq = $pdo->prepare("SELECT * FROM sells WHERE sell_date = ? AND structure = ?");
    $buySQLReq->execute([
        $localTime,
        $token,
      ]);

    $montantSQLReq = $pdo->prepare("SELECT totality FROM sells WHERE sell_date = ?");
    $montantSQLReq->execute([
        $localTime,
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
        $montantNumber = $montantSQLReq->rowcount();
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