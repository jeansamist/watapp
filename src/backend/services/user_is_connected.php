<?php
  // Comment for crash changes
  require "../config/headers.php";
  require "../config/bd.php";
  require "../config/classes/Autoloader.php";
  Autoloader::register();
  if (isset($_GET["watapp_user"])) {
    $cookie_data = $_GET['watapp_user'];
    $request_data = Cookie::verifyCookie($cookie_data);
  } else {
    $request_data = false;
  }
  $request_response = new ReqResponse($request_data);
  echo json_encode($request_response);