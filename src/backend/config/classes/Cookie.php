<?php
  // require "../config/bd.php";
  class Cookie {
    public $id;
    public $cookie_value;
    public $cookie_name;
    public $expire_time;

    public static function createCookie(String $cookie_name, String $cookie_value, Int $exist_time):Bool {
      global $pdo;
      $token = Random::random_string(30);
      $expire_time = time() + (86400 * $exist_time);
      $insertCookieReq = $pdo->prepare('INSERT INTO cookies (cookie_value, cookie_name, expire_time, token) VALUE (?, ?, ?, ?)');
      $insertCookieReq->execute([
        $cookie_value,
        $cookie_name,
        $expire_time,
        $token
      ]);
      
      if ($insertCookieReq !== false) {
        setcookie("cookie_name", $token, time() + (86400 * $exist_time), "/");
        return true;
      } else {
        return false;
      }
    }

    public static function verifyCookie($cookie_data):Bool {
      global $pdo;
      $reqCookie = $pdo->prepare('SELECT expire_time FROM cookies WHERE token = ?');
      $reqCookie->execute([$cookie_data]);
      if ($reqCookie->rowCount() == 1) {
        $nowTime = time();
        var_dump($reqCookie);
        $expire_time = $reqCookie->fetch();
        if ($nowTime < $expire_time) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
    public static function reqCookieData($cookie_data) {
      
    } 
  }