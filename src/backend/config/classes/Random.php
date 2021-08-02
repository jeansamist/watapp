<?php
class Random {
  public static function random_string(Int $length = 10, $type = "easy"):String {
    $charters1 = "abcdefghijklmnopqrstuvwxyz";
    $charters2 = $charters1."ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    $charters3 = $charters2."0123456789";
    $charters4 = $charters3."?;!<>%";
    if ($type == "easy") {
      $max = strlen($charters1) - 1;
      $toReturn = "";
      for ($i = 0; $i < $length; $i++) { 
        $charter = $charters1[rand(0, $max)];
        $toReturn = $toReturn.$charter;
      }
    } elseif ($type == "normal") {
      $max = strlen($charters2) - 1;
      $toReturn = "";
      for ($i = 0; $i < $length; $i++) { 
        $charter = $charters2[rand(0, $max)];
        $toReturn = $toReturn.$charter;
      }
    } elseif ($type == "medium") {
      $max = strlen($charters3) - 1;
      $toReturn = "";
      for ($i = 0; $i < $length; $i++) { 
        $charter = $charters3[rand(0, $max)];
        $toReturn = $toReturn.$charter;
      }
    } elseif ($type == "hard") {
      $max = strlen($charters4) - 1;
      $toReturn = "";
      for ($i = 0; $i < $length; $i++) { 
        $charter = $charters4[rand(0, $max)];
        $toReturn = $toReturn.$charter;
      }
    }
    return $toReturn;
  }
}