<?php
class Client {
  public $id;
  public $client_name;
  public $client_lastname;
  public $client_mail;
  public $date;
  public function __construct(Int $id, $client_name, $client_lastname, $client_mail, $date) {
    $this->id = $id;
    $this->client_name = $client_name;
    $this->client_lastname = $client_lastname;
    $this->client_mail = $client_mail;
    $this->date = $date;
  }
  
  
}