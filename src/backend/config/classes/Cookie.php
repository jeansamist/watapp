<?php
  // require "../config/bd.php";
  class Cookie {
    public $id;
    public $cookie_value;
    public $cookie_name;
    public $expire_time;

    public static function createCookie(String $cookie_name, String $cookie_value, Int $exist_time, String $type = "cookie") {
      global $pdo;
      define('TOKEN', Random::random_string(50));
      $expire_time = time() + (86400 * $exist_time);
      $insertCookieReq = $pdo->prepare('INSERT INTO cookies (cookie_value, cookie_name, expire_time, token) VALUE (?, ?, ?, ?)');
      $insertCookieReq->execute([
        $cookie_value,
        $cookie_name,
        $expire_time,
        TOKEN
      ]);
      
      if ($type == "cookie") {
        if ($insertCookieReq !== false) {
          setcookie($cookie_name, TOKEN, time() + (86400 * $exist_time), "/");
          return true;
        } else {
          return false;
        }
      } else {
        return TOKEN;
      }
    }

    public static function verifyCookie($cookie_data):Bool {
      global $pdo;
      $reqCookie = $pdo->prepare('SELECT expire_time FROM cookies WHERE token = ?');
      $reqCookie->execute([$cookie_data]);
      if ($reqCookie->rowCount() == 1) {
        $nowTime = time();
        $expire_time = $reqCookie->fetch();
        if ($nowTime < (int) $expire_time->expire_time) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
    public static function reqCookieData($cookie_data) {
      global $pdo;
      $reqCookie = $pdo->prepare('SELECT cookie_value FROM cookies WHERE token = ?');
      $reqCookie->execute([$cookie_data]);
      if ($reqCookie->rowCount() == 1) {
        return $reqCookie->fetch();
      } else {
        return false;
      }
    } 
  }