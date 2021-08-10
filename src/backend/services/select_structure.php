<?php
include_once '../config/headers.php';
include_once '../config/bd.php';
include_once '../config/classes/Autoloader.php';
Autoloader::register();
if (isset($_GET['cookie_token'])) {
  $cookie_token = htmlspecialchars($_GET['cookie_token']);
  $userId = Cookie::reqCookieData($cookie_token);
  if ($userId->cookie_value !== false) {
    $userId = (int) $userId->cookie_value;
    $reqStructuresOfUser = $pdo->prepare('SELECT structures FROM users WHERE id = ?');
    $reqStructuresOfUser->execute([$userId]);
    if ($reqStructuresOfUser->rowCount() == 1) {
      $fetch = $reqStructuresOfUser->fetch();
      if ($fetch->structures !== "" AND $fetch->structures !== "*" AND $fetch->structures !== "null") {
        $structures = json_decode($fetch->structures);
        $to = [];
        foreach ($structures as $value) {
          $reqStructure = $pdo->prepare('SELECT * FROM structures WHERE token = ?');
          $reqStructure->execute([$value]);
          $ftch = $reqStructure->fetch();
          array_push($to, $ftch);
        }
        $toReturn = new ReqResponse($to);
      } else {
        $reqStructure = $pdo->query('SELECT * FROM structures');
        $toReturn = new ReqResponse($reqStructure->fetchAll());
      }
    } else {
      $toReturn = new ReqResponse(false, "Nous n'arrivons pas retouver les structures");
    }
  } else {
    $toReturn = new ReqResponse(false, "Nous n'arrivons pas retouver l'utilisateur");
  }
} else {
  $toReturn = new ReqResponse(false, "Nous n'arrivons pas retouver l'utilisateur");
}
echo json_encode($toReturn);