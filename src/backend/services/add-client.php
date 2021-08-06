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
    $client_mail = htmlspecialchars($_POST['e-mailduclient']);
    if (filter_var($client_mail, FILTER_VALIDATE_EMAIL)) {
      // Client Informations
      $client_name = htmlspecialchars($_POST['nomduclient']);
      $client_lastname = htmlspecialchars($_POST['prenomduclient']);
      $date = (int)time();

      $addClient = $pdo->prepare('INSERT INTO clients (name, lastname, mail, date) VALUES (:name, :lastname, :mail, :date)');
      $addClient->execute([
        'name' => $client_name,
        'lastname' => $client_lastname,
        'mail' => $client_mail,
        'date' => $date
      ]);
      $toReturn = new ReqResponse(true, "Le client a bien été créer");      
    } else {
      $err = false;
      $toReturn = new ReqResponse($err, 'Veuillez entrer une addresse E-mail correcte');
    }
  } else {
    $err = false;
    $toReturn = new ReqResponse($err, 'Veuillez compléter tous les champs');
  }
} else {
  $err = false;
  $toReturn = new ReqResponse($err, 'Imposible de poster les données');
}
echo json_encode($toReturn);