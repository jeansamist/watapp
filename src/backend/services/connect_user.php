<?php
  require "../config/headers.php";
  require "../config/classes/Autoloader.php";
  require "../config/bd.php";
  Autoloader::register();

  if (!empty($_POST)) {
    $error = false;
    foreach ($_POST as $post_data) {
      if ($post_data == "") {
        $error = true;
      }
    }
    if (!$error) {
      $pseudo = htmlspecialchars($_POST['pseudo']);
      $password = sha1(md5(htmlspecialchars($_POST['motdepasse'])));
      $verifyReq = $pdo->prepare('SELECT * FROM users WHERE pseudo = ?');
      $verifyReq->execute([
        $pseudo
      ]);
      if ($verifyReq->rowCount() == 1) {
        $user = $verifyReq->fetch();
        $userPassword = $user->password;
        if ($password == $userPassword) {
          $toReturn = new ReqResponse(true, "User's connected");
        } else {
          $toReturn = new ReqResponse(false, "Le mot de passe que vous avez entrer est incorrect");
        }
      } else {
        $toReturn = new ReqResponse(false, "Le nom d'utilisateur que vous avez entrer est incorrect");
      }
    } else {
      $toReturn = new ReqResponse(false, "Veillez compléter tous les champs");
    }
  } else {
    $toReturn = new ReqResponse("false", "Veillez compléter tous les champs");
  }
  echo json_encode($toReturn);