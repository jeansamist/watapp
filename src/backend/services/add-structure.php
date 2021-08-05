<?php

include_once '../config/headers.php';
include_once '../config/bd.php';
include_once '../config/classes/Autoloader.php';
Autoloader::register();
include_once '../config/classes/Random.php';

if (!empty($_POST)) {
    $error = false;
    foreach ($_POST as $post_data) {
      if ($post_data == "") {
        $error = true;
      }
    }
    if (!$error) {
        if ($_POST['submit']) {
          if (isset($_POST['name'])) {
            $name = htmlspecialchars($_POST['name']);
            $generetedid = Random::random_string(10, 'normal');
            echo $generetedid;
            
            
            $addStructure = $pdo->prepare('INSERT INTO structure (name, generetedid) VALUES (:name, :generetedid)');
            $addStructure->execute([
              'name' => $name,
              'generetedid' => $generetedid
            ]);
            $fetchData = $addStructure->fetch();
            $toReturn = new ReqResponse($fetchData);
          } else {
            $err = false;
            $toReturn = new ReqResponse($err, 'champ pas complet');
          }
        } else {
          $err = false;
          $toReturn = new ReqResponse($err, 'pas submit');
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