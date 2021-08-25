<?php
class SendMail {
    public static function send_mail($recever, $subject, $message = "<h1>E-mail envoier par WATAPP 0.1</h1>") {
        $headers = array(
            'From' => 'watappinfo237@gmail.com',
            'Reply-To' => 'watappinfo237@gmail.com',
            'X-Mailer' => 'PHP/' . phpversion()
        );
        if (mail($recever, $subject, $message, $headers)) {

            return true;

        } else {

            return false;

        }
    }
};