<?php
  require "../config/headers.php";
  require "../config/classes/Autoloader.php";
  require "../config/bd.php";
  Autoloader::register(); 

  $reqClients = $pdo->query("SELECT * FROM clients ORDER BY id DESC");
  $clients = $reqClients->fetchAll();
  echo json_encode(new ReqResponse($clients));