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
          if (isset($_POST['name'], $_POST['prix'], $_POST['stock'])) {
            //C'est la variable qui recevrat l'obet a incrementer
            $objectToIncrement;
            
            $name = htmlspecialchars($_POST['name']);
            $prixUnitaire = htmlspecialchars($_POST['prix']);
            $stock = htmlspecialchars($_POST['stock']);
            $id = 10;
            if (!empty($name)) {
                $addStructure = $pdo->prepare('UPDATE produits SET name =:name WHERE name =:objectToIncrement');
                $addStructure->execute([
                  'name' => $name,
                  'objectToIncrement' => $objectToIncrement
                ]);
                $toReturn = new ReqResponse(true);
            }
            if (!empty($prixUnitaire)) {
                $addStructure = $pdo->prepare('UPDATE produits SET unitaryprice =:prixunitaire WHERE name =:objectToIncrement');
                $addStructure->execute([
                  'prixunitaire' => $prixUnitaire,
                  'objectToIncrement' => $objectToIncrement
                ]);
                $toReturn = new ReqResponse(true);
            }
            if (!empty($stock)) {
                $addStructure = $pdo->prepare('UPDATE produits SET stocknumber =:stock WHERE name =:objectToIncrement');
                $addStructure->execute([
                  'stock' => $stock,
                  'objectToIncrement' => $objectToIncrement
                ]);
                $toReturn = new ReqResponse(true);
            }

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