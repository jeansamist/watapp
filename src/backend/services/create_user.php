<?php
  include_once '../config/headers.php';
  include_once '../config/bd.php';
  include_once '../config/classes/Autoloader.php';
  Autoloader::register();
  if (!empty($_POST)) {
    $error = false;
    foreach ($_POST as $post_data) {
      if ($post_data == "") {
        $error = true;
      }
    }
    if (!$error) {
      $fullname = $_POST['full_name'];
      $mail = $_POST['mail'];
      $tel = $_POST['tel'];
      $pseudo = $_POST['pseudo'];
      $pseudoLength = strlen($_POST['pseudo']);
      $role = $_POST['role'];
      $password = $_POST['password'];
      $passwordHach = sha1(md5(htmlspecialchars($_POST['password'])));
      if ($pseudoLength >= 3) {
        $reqUser = $pdo->prepare('SELECT pseudo FROM users WHERE pseudo = ?');
        $reqUser->execute([$pseudo]);
        if ($reqUser->rowCount() ==  0) {
          if (filter_var($mail, FILTER_VALIDATE_EMAIL)) {
            $insertUser = $pdo->prepare('INSERT INTO users (full_name, mail, tel, pseudo, password, user_role, structures) VALUE (?, ?, ?, ?, ?, ?, ?)');
            if ($_POST['role'] === "worker" AND isset($_POST['structure'])) {
              $insertUser->execute([$fullname, $mail, $tel, $pseudo, $passwordHach, $role, $_POST['structure']]);
            } else {
              $insertUser->execute([$fullname, $mail, $tel, $pseudo, $passwordHach, $role, "*"]);
            }
            if ($insertUser) {
              $message = `
                  <div style="max-width: 700px; width: 100%; background: #f7fafd; color: #121c42; padding-bottom: 10px;">
                  <div style="background: rgb(109, 99, 255); padding: 20px; color: #fff;">
                    <h2 style="margin: 0; padding: 0;">Watapp - M/Mme $fullname </h2>
                    <div>$role </div>
                  </div>
                  <div style="max-width: 400px; text-align: center; margin: 30px auto; background: #fff; padding: 20px; box-shadow: 0 1px 4px #d8e1e8;">
                    <h2 style="margin: 0; padding: 0;">$fullname </h2>
                    <div>$role </div>
                    <div><b>Tel: </b>$tel </div>
                    <p>
                      Lors de vos prochaines connection sur l'application veillez utiliser les identifiants suivants
                    </p>
                    <div>
                      <b>Pseudo: </b> $pseudo
                    </div>
                    <div>
                      <b>Mot de passe: </b> $password
                    </div>
                  </div>
                </div>
              `;
              // SendMail::send_mail($mail, "Watapp - Creation de l'utilisateur", $message);
              $toReturn = new ReqResponse(true);
            }
          } else {
            $err = false;
            $toReturn = new ReqResponse($err, "L'addresse E-mail que vous avez inscrit est incorecte");
          }
        } else {
          $err = false;
          $toReturn = new ReqResponse($err, "L'identifiant de l'utilisateur que vous avez choisi existe déja");
        }
      } else {
        $err = false;
        $toReturn = new ReqResponse($err, "L'identifiant de l'utilisateur doit être supérieur ou égale à 03 caractères");
      }
    } else {
      $err = false;
      $toReturn = new ReqResponse($err, 'Veiller complétez tous les champs');
    }
  }
echo json_encode($toReturn);