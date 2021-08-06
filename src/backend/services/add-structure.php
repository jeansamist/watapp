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
            $place = htmlspecialchars($_POST['place']);
            // $image = htmlspecialchars($_POST['image']);

            $generetedid = Random::random_string(10, 'normal');
            session_start();
            $_SESSION['generetedid'] = $generetedid;

            //* La tu mets l'email de l'admin comme dernier parametre *\\
            // SendMail::send_mail($name, $generetedid, $email);
            
            $addStructure = $pdo->prepare('INSERT INTO structure (name, place, generetedid) VALUES (:name, :place, :generetedid)');
            $addStructure->execute([
              'name' => $name,
              'place' => $place,
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