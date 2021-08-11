<?php
  require "../config/headers.php";
  require "../config/classes/Autoloader.php";
  require "../config/bd.php";
  Autoloader::register(); 

  echo Random::matricule();