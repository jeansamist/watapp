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
      if (isset($_GET['userCookieToken'])) {
        $reqUserId = $pdo->prepare('SELECT cookie_value FROM cookies WHERE token = ?');
        $reqUserId->execute([$_GET['userCookieToken']]);
        if ($reqUserId->rowCount() === 1) {
          $userId = $reqUserId->fetch()->cookie_value;
          $qties = json_decode($_POST['qties']);
          $articles = json_decode($_POST['articles']);
          foreach ($articles as $key => $articleToken) {
            $reqArticle = $pdo->prepare("SELECT price, qty FROM stock WHERE token = ?");
            $reqUserId->execute([$articleToken]);
            $article = $reqArticle->fetch();
          }
        }
      }
      
    }
} else {
  $err = false;
  $toReturn = new ReqResponse($err, 'post est vide');
}
echo json_encode($toReturn);