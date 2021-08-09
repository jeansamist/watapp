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
      $name = htmlspecialchars($_POST['name']);
      $unitary_price = htmlspecialchars($_POST['unitary_price']);
      $generetedid = Random::random_string(100, 'medium');
      $addStructure = $pdo->prepare('INSERT INTO stocks (name, unitary_price, quantity, token) VALUES (?, ?, ?, ?)');
      $addStructure->execute([
        $name,
        $unitary_price,
        0,
        $generetedid
      ]);
      $toReturn = new ReqResponse(true);
    } else {
      $err = false;
      $toReturn = new ReqResponse($err, 'Veiller complétez tous les champs');
    }
} else {
  $err = false;
  $toReturn = new ReqResponse($err, 'post est vide');
}
echo json_encode($toReturn);