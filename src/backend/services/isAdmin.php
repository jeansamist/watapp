<?php
  require "../config/headers.php";
  require "../config/classes/Autoloader.php";
  require "../config/bd.php";
  Autoloader::register(); 

  if (isset($_GET['token'])) {
    $token = $_GET['token'];
    $id = Cookie::reqCookieData($token)->cookie_value;
    echo json_encode(new ReqResponse(User::isAdmin($id)));
  } else {
    return json_encode(new ReqResponse(false));
  }