<?php
  require "../config/headers.php";
  require "../config/classes/Autoloader.php";
  require "../config/bd.php";
  Autoloader::register(); 

  $reqUsers = $pdo->query("SELECT * FROM users ORDER BY id DESC");
  $users = $reqUsers->fetchAll();
  echo json_encode(new ReqResponse($users));