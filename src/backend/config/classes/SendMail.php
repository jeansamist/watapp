<?php
class SendMail {
    public static function send_mail(string $name, string $generetedid, string $email) {
        $sujet = 'ENVOI DE L\'IDENTIFIANT.';
        $message = '<p><h3>Bonjour chers administrateur l\'identifiant de la structure <font color = "#6d63ff">' . $name . '</font> que vous venez de creer est: <font color = "#6d63ff">' . $generetedid . '.</font><br> Vous devez le communiquer a vos employes. </h3></p>';
        $destinataire = $email;
        $header = "From: \"Watapp: \"watappinfo237@gmail.com\n";
        $header .= "reply-to: watappinfo237@gmail.com\n";
        $header .= "Content-Type: text/html; charset=\"iso-8859-1\"";
        if (mail($destinataire, $sujet, $message, $header)) {

            echo "Bien envoi";

        } else {

            echo "echec";

        }
    }
};