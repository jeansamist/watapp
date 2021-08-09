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
      $stocks = json_decode($_POST['stocks']);
      $qties = json_decode($_POST['qty']);
      foreach ($stocks as $key => $stockToken) {
        $qty = (int) $qties[$key];
        $updateStockReq = $pdo->prepare('UPDATE stocks SET quantity = ? WHERE token = ?');
        $updateStockReq->execute([$qty, $stockToken]);
        $toReturn = new ReqResponse(true);
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