<?php
  class Cookie {
    public $id;
    public $cookie_value;
    public $cookie_name;
    public $expire_time;
    public static function createCookie(String $cookie_value, String $cookie_name, Int $exist_time):Bool {
      $expire_time = 3600 * $exist_time;
      setcookie($cookie_name, $cookie_value, $expire_time);
      echo "Cookie's created";
      return true;
    }
    public static function verifyCookie($cookie_data):Bool {
      return true;
    }
    public static function reqCookieData($cookie_data) {
      
    } 
  }