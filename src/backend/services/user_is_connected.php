<?php
  require "../config/headers.php";
  require "../config/classes/Autoloader.php";
  Autoloader::register();
  if (isset($_COOKIE["watapp_user"])) {
    $cookie_data = $_COOKIE['watapp_user'];
    Cookie::verifyCookie($cookie_data);
    $request_data = true;
  } else {
    $request_data = false;
  }
  $request_response = new ReqResponse($request_data);
  echo json_encode($request_response);