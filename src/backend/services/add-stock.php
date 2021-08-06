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
          if (isset($_POST['name'])) {
            $name = htmlspecialchars($_POST['name']);
            $prixUnitaire = htmlspecialchars($_POST['prix']);

            $generetedid = Random::random_string(10, 'normal');
            
            $addStructure = $pdo->prepare('INSERT INTO produits (name, unitaryprice, generetedid) VALUES (:name, :prixUnitaire, :generetedid)');
            $addStructure->execute([
              'name' => $name,
              'prixUnitaire' => $prixUnitaire,
              'generetedid' => $generetedid
            ]);
            $toReturn = new ReqResponse(true);
          } else {
            $err = false;
            $toReturn = new ReqResponse($err, 'champ pas complet');
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