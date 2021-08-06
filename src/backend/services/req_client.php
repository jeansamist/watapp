<?php
  require "../config/headers.php";
  require "../config/classes/Autoloader.php";
  require "../config/bd.php";
  Autoloader::register();
  if (isset($_GET['client_id'])) {
    $id  = (int) htmlspecialchars($_GET['client_id']);
    $reqClient = $pdo->prepare("SELECT * FROM clients WHERE id = ?");
    $reqClient->execute([$id]);
    if ($reqClient->rowCount() == 1) {
      $client = $reqClient->fetch();
      $toReturn = new ReqResponse($client);
    } else {
      $toReturn = new ReqResponse(false, "L'utilisteur n'existe pas");
    }
  } else {
    $toReturn = new ReqResponse(false, "Impossible d'effectuer la requête");
  }

  echo json_encode($toReturn);