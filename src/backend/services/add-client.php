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
        if ($_POST['submit']) {
          if (isset($_POST['name'], $_POST['lastname'], $_POST['sex'])) {
            $name = htmlspecialchars($_POST['name']);
            $lastname = htmlspecialchars($_POST['lastname']);
            $sex = htmlspecialchars($_POST['sex']);
            $about = htmlspecialchars($_POST['about']);
            $date = (int)time();
  
            $addClient = $pdo->prepare('INSERT INTO clients (name, lastname, sex, about, date) VALUES (:name, :lastname, :sex, :about, :date)');
            $addClient->execute([
              'name' => $name,
              'lastname' => $lastname,
              'sex' => $sex,
              'about' => $about,
              'date' => $date
            ]);
            $fetchData = $addClient->fetch();
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