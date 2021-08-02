<?php
  $bdHost = "localhost";
  $bdName = "watapp";
  $bdUser = "root";
  $bdPassword = "";
  try {
    $pdo = new PDO("mysql:host=" . $bdHost . ";dbname=" . $bdName ."", $bdUser, $bdPassword, [
      PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
      PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ
    ]);
  } catch (Exception $e) {
    die('Erreur lors du chargement de la page');
  }