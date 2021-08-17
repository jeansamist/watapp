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
      $clientName =  htmlspecialchars($_POST['clientName']);
      $productName =  htmlspecialchars($_POST['productName']);
      foreach ($productName as $value) {
        $value = (int) $value;
        $getProductIdReq = $pdo->prepare('SELECT id FROM stocks WHERE name = ?');
        $getProductIdReq->execute([$value]);
        $fetch = $getProductIdReq->fetch();
      }
      var_dump($value);
      die();

      $quantity =  htmlspecialchars($_POST['quantity']);
      $addSell = $pdo->prepare('INSERT INTO sells (item, quantity, client) VALUES (?, ?, ?)');
      $addSell->execute([
        $clientName,
        json_encode($productName),
        $quantity
      ]);
      if ($addSell === false) {
          $error = false;
          $err = 'Une erreur est survenu pendant le traitement';
      }
    }
} else {
  $err = false;
  $toReturn = new ReqResponse($err, 'post est vide');
}
echo json_encode($toReturn);