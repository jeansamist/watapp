<?php
class splite {
  public static function tronque( $date, $min, $max ) {
    // Nombre de caractère
    if(strlen($date)>=$max)
    {
    // Met la portion de date dans $date
    $date=substr($date, $min,$max); 
    // position du dernier espace
    $espace=strrpos($date,"-"); 
    // test si il ya un espace
    if($espace){
    // si ya 1 espace, coupe de nouveau la date
    $date=substr($date,$min,$espace);
    }
    return $date;
    } else {
      echo('Votre date ne peut pas etre couper avec cette valeur');
    }
  }
}