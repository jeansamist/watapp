<?php
require "../config/bd.php";
  require "../config/classes/Autoloader.php";
  Autoloader::register();
  
  $reqCookie = $pdo->prepare('SELECT expire_time FROM cookies WHERE token = ?');
  $reqCookie->execute(['Wu8yuE1lYiu6yA2lOt9T2DEI0kZruMjoitx1B31qhh1F15MAN6E0Hm3g6PmkqoJBb4oIiZ1jhxXS3XR70TMm3gJkEStxH8tCFHTn']);
  if ($reqCookie->rowCount() == 1) {
    $expire_time = $reqCookie->fetch();
    var_dump($expire_time);
  }