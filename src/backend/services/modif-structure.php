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
        session_start();
        $generetedid = $_SESSION['generetedid'];

        if ($_POST['submit']) {
          if (isset($_POST['name'])) {
            $name = htmlspecialchars($_POST['name']);
            $place = htmlspecialchars($_POST['place']);
            $image = htmlspecialchars($_POST['image']);

            if (!empty($_FILES['image']) and !empty($_FILES['image']['name'])) {

                $taille = 2097152;
                $ver_ext = array('jpg', 'jpeg', 'gif', 'png', 'svg');
                if ($_FILES['profile']['size'] <= $taille) {
    
                    $ext_img = strtolower(substr(strrchr($_FILES['profile']['name'], '.'), 1));
                    if (in_array($ext_img, $ver_ext)) {
    
                        $chemin = "../../assets/images/app/sctructures/" . $generetedid . "." . $ext_img;

                        $_SESSION['lien'] = $chemin;
                        $res = move_uploaded_file($_FILES['image']['tmp_name'], $chemin);
                        if ($res) {
                            $image = $_FILES['image']['name'];
                            $_SESSION['image'] = $image;
    
                            //AVATAR
                            $addStructure = $pdo->prepare('UPDATE structure SET image =:image WHERE generetedid =:generetedid');
                            $addStructure->execute([
                                'image' => $image
                            ]);
    
                        } else {
    
                            $err_import = "Errreur lors de l'impotation";
                            echo($err_import);
    
                        }
    
                    } else {
    
                        $err_profile = "Votre photo de profil doit etre au format: 'jpg', 'jpeg', 'gif', 'png'";
                        echo($err_profile);
    
                    }
    
                } else {
    
                    $err_profile = "Votre photo de profiles ne doit pas depasser 2Mo";
                    echo($err_profile);
    
                }
    
            }

            if (!empty($name)) {
                $addStructure = $pdo->prepare('UPDATE structure SET name =:name WHERE generetedid =:generetedid');
                $addStructure->execute([
                    'name' => $name,
                    'generetedid' => 'nNIDnofNaF'
                ]); 
            }

            if (!empty($place)) {
                $addStructure = $pdo->prepare('UPDATE structure SET place =:place WHERE generetedid =:generetedid');
                $addStructure->execute([
                'place' => $place,
                'generetedid' => 'nNIDnofNaF'
            ]);
            }
            
            $fetchData = $addStructure->fetch();
            $toReturn = new ReqResponse($fetchData);
          } else {
            $err = false;
            $toReturn = new ReqResponse($err, 'champ pas complet');
          }
        } else {
          $err = false;
          $toReturn = new ReqResponse($err, 'pas submit');
        }
    } else {
      $err = false;
      $toReturn = new ReqResponse($err, 'il y a eu une grosse erreur');
    }
} else {
  $err = false;
  $toReturn = new ReqResponse($err, 'post est vide');
}
echo json_encode($toReturn);