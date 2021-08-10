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
    $reqstock = $pdo->prepare("SELECT name, unitary_price, token FROM stocks WHERE structure = ? ORDER BY id DESC");
    $reqstock->execute([$token]);
    if ($reqstock->rowCount() > 0) {
      $stock = $reqstock->fetchAll();
      echo json_encode(new ReqResponse($stock));
    } else {
      echo json_encode(new ReqResponse(false, "Désolé votre inventaire est vide :("));
    }
  } else {
    echo json_encode(new ReqResponse(false, "Désolé votre inventaire est vide :( 1"));
  }