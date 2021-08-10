<?php

include_once '../config/headers.php';
include_once '../config/bd.php';
include_once '../config/classes/Autoloader.php';
Autoloader::register();

if (!empty($_POST)) {
    $error = false;
    foreach ($_POST as $post_data) {
      if ($post_data == "") {
        $error = true;
      }
    }
    if (!$error) {
      $structure = htmlspecialchars($_POST['structure']);
      $reqStructure = $pdo->prepare('SELECT token FROM structures WHERE token = ?');
      $reqStructure->execute([$structure]);
      if ($reqStructure->rowCount() == 1) {
        $stocks = json_decode($_POST['stocks']);
        $qties = json_decode($_POST['qty']);
        foreach ($stocks as $key => $stockToken) {
          $qty = (int) $qties[$key];
          $oldValue =$pdo->prepare('SELECT quantity FROM stocks WHERE token = ?');
          $oldValue->execute([$stockToken]);
          $f = $oldValue->fetch();
          $oldStock = (int) $f->quantity;
          $qty = $qty + $oldStock;
  
          $updateStockReq = $pdo->prepare('UPDATE stocks SET quantity = ? WHERE token = ?');
          $updateStockReq->execute([$qty, $stockToken]);
          $toReturn = new ReqResponse(true);
        }
      } else {
        $err = false;
        $toReturn = new ReqResponse($err, 'La structure est indefinie');
      }
    } else {
      $err = false;
      $toReturn = new ReqResponse($err, 'il y a eu une grosse erreur');
    }
} else {
  $err = false;
  $toReturn = new ReqResponse($err, 'post est vide');
}
echo json_encode($toReturn);