<?php
  require "../config/headers.php";
  require "../config/classes/Autoloader.php";
  require "../config/bd.php";
  Autoloader::register(); 

  $structure = htmlspecialchars($_GET['structure']);
  $reqStructure = $pdo->prepare('SELECT token FROM structures WHERE token = ?');
  $reqStructure->execute([$structure]);
  if ($reqStructure->rowCount() == 1) {
    $tokenFetch = $reqStructure->fetch();
    $token = $tokenFetch->token;
    $reqSells = $pdo->prepare("SELECT * FROM sells WHERE structure = ? ORDER BY id DESC");
    $reqSells->execute([$token]);
    if ($reqSells->rowCount() > 0) {
      $sells = $reqSells->fetchAll();
      $data = [];
      foreach ($sells as $sell) {
        $articlesTokens = json_decode($sell->articles);
        $articles = [];
        foreach ($articlesTokens as $articleToken) {
          $reqArticleName = $pdo->prepare("SELECT name FROM stocks WHERE token = ?");
          $reqArticleName->execute([$articleToken]);
          array_push($articles, $reqArticleName->fetch()->name);
        }
        if (((int) $sell->client_id) !== 0) {
          $clientReq = $pdo->prepare('SELECT name, lastname FROM clients WHERE id = ?');
          $clientReq->execute([$sell->client_id]);
          $fetch = $clientReq->fetch();
          @$clientFullName = $fetch->name." ".$fetch->lastname;
        } else {
          @$clientFullName = "Anonyme";
        }
        $t = [
          "token" => $sell->token,
          "totality" => $sell->totality,
          "qties" => $sell->qties,
          "articles" => json_encode($articles),
          "clientName" => $clientFullName,
          "date" => $sell->sell_date
        ];
        array_push($data, $t);
      }
      echo json_encode(new ReqResponse($data));
    } else {
      echo json_encode(new ReqResponse(false, "Désolé votre inventaire est vide :("));
    }
  } else {
    echo json_encode(new ReqResponse(false, "Impossible de trover la structure"));
  }