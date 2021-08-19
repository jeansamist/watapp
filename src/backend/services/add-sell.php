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
          $totality = 0;
          foreach ($articles as $key => $articleToken) {
            $reqArticle = $pdo->prepare("SELECT quantity, unitary_price FROM stocks WHERE token = ?");
            $reqArticle->execute([$articleToken]);
            $article = $reqArticle->fetch();
            $qty = (int) $qties[$key];
            if ($qty <= $article->quantity) {
              $totality = $totality + ($qty * ((int)$article->unitary_price));
              $modifyCurentStock = $pdo->prepare('UPDATE stocks SET quantity = ? WHERE token = ?');
              $modifyCurentStock->execute([(((int)$article->quantity) - $qty), $articleToken]);
            }
          }
          if (!isset($_POST['client_id'])) {
            $clientId = 0;
          } else {
            # code...
            $clientId = (int) $_POST['client_id'];
          }
          $date = date("Y-m-d");
          $insertSell = $pdo->prepare('INSERT INTO sells (client_id, articles, qties, user_id, totality, sell_date, token) VALUES (?, ?, ?, ?, ?, ?, ?)');
          $insertSell->execute([$clientId, json_encode($articles), json_encode($qties), $userId, $totality, $date, Random::random_string(30)]);
          $toReturn = new ReqResponse(true);
        } else {
          $err = false;
          $toReturn = new ReqResponse($err, 'Nous n\'arrivons pas à vérifier l\'utilisateur');
        }
      } else {
        $err = false;
        $toReturn = new ReqResponse($err, 'Nous n\'arrivons pas à vérifier l\'utilisateur');
      }
      
    } else {
      $err = false;
      $toReturn = new ReqResponse($err, 'Veuillez compléter tous les champs');
    }
} else {
  $err = false;
  $toReturn = new ReqResponse($err, 'post est vide');
}
echo json_encode($toReturn);