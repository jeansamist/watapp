<?php
  class Autoloader {
    static function register() {
      spl_autoload_register(array(__CLASS__, "autoload"));
    }

    static function autoload(String $className) {
      require '../config/classes/'.$className.'.php';
    }
  }