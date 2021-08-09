<?php
  require "../config/headers.php";
  require "../config/classes/Autoloader.php";
  require "../config/bd.php";
  Autoloader::register(); 

  $reqstock = $pdo->query("SELECT * FROM stocks WHERE quantity > 0 ORDER BY id DESC");
  $stock = $reqstock->fetchAll();
  echo json_encode(new ReqResponse($stock));