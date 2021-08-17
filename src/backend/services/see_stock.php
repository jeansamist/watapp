<?php
  require "../config/headers.php";
  require "../config/classes/Autoloader.php";
  require "../config/bd.php";
  Autoloader::register();

  if (isset($_GET['stock_token'])) {
    $token = $_GET['stock_token'];
    $reqStock = $pdo->prepare("SELECT * FROM stocks WHERE token = ?");
    $reqStock->execute([$token]);
    if ($reqStock->rowCount() == 1) {
      echo json_encode(new ReqResponse($reqStock->fetch()));
    } else {
      echo json_encode(new ReqResponse(false, "Desole, nous ne parvenons à trouver le stock"));
    }
  }