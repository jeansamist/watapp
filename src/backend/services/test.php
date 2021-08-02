<?php
  require "../config/classes/Autoloader.php";
  Autoloader::register();
  setcookie("cookie_name", Random::random_string(100, "hard"), time() + 80000, "/");