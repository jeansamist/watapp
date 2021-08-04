<?php
  require "../config/headers.php";
  require "../config/bd.php";
  require "../config/classes/Autoloader.php";
  Autoloader::register();
  if (isset($_GET["watappuser"])) {
    $cookie_data = $_GET['watappuser'];
    $request_data = Cookie::verifyCookie($cookie_data);
  } else {
    $request_data = false;
  }
  $request_response = new ReqResponse($request_data);
  echo json_encode($request_response);