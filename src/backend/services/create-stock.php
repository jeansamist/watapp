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
        $name = htmlspecialchars($_POST['name']);
        $unitary_price = htmlspecialchars($_POST['unitary_price']);
        $generetedid = Random::random_string(100, 'medium');
        $tokenFetch = $reqStructure->fetch();
        $token = $tokenFetch->token;
        $createStock = $pdo->prepare('INSERT INTO stocks (name, unitary_price, quantity, structure, token) VALUES (?, ?, ?, ?, ?)');
        $createStock->execute([
          $name,
          $unitary_price,
          0,
          $token,
          $generetedid
        ]);
        $toReturn = new ReqResponse(true);
      } else {
        $err = false;
        $toReturn = new ReqResponse($err, 'La structure est indefinie');
      }
    } else {
      $err = false;
      $toReturn = new ReqResponse($err, 'Veiller complétez tous les champs');
    }
} else {
  $err = false;
  $toReturn = new ReqResponse($err, 'post est vide');
}
echo json_encode($toReturn);