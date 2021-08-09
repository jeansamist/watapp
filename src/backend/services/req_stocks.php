<?php
  require "../config/headers.php";
  require "../config/classes/Autoloader.php";
  require "../config/bd.php";
  Autoloader::register(); 

  $reqstock = $pdo->query("SELECT name, unitary_price, token FROM stocks ORDER BY id DESC");
  $stock = $reqstock->fetchAll();
  echo json_encode(new ReqResponse($stock));