<?php
  require "../config/headers.php";
  require "../config/classes/Autoloader.php";
  require "../config/bd.php";
  Autoloader::register(); 

  $reqstructures = $pdo->query("SELECT * FROM structures ORDER BY id DESC");
  $structures = $reqstructures->fetchAll();
  echo json_encode(new ReqResponse($structures));