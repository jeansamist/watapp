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
      $localisation = htmlspecialchars($_POST['localisation']);
      $workers = json_decode($_POST['workers']);
      $token = Random::random_string(100);
      $addStructure = $pdo->prepare('INSERT INTO structures (name, localisation, workers, token) VALUES (?, ?, ?, ?)');
      $addStructure->execute([
        $name,
        $localisation,
        json_encode($workers),
        $token
      ]);
      foreach ($workers as $value) {
        $value = (int) $value;
        $getUserStructureReq = $pdo->prepare('SELECT structures FROM users WHERE id = ?');
        $getUserStructureReq->execute([$value]);
        $fetch = $getUserStructureReq->fetch();
        if ($fetch->structures == "" OR $fetch->structures == "*" OR $fetch->structures == "null") {
          $userOldStructures = [];
        } else {
          $userOldStructures = json_decode($fetch->structures);
        }
        array_push($userOldStructures, $token);
        $setUserReq = $pdo->prepare('UPDATE users SET structures = ? WHERE id = ?');
        $setUserReq->execute([json_encode($userOldStructures), $value]);
        
      }
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