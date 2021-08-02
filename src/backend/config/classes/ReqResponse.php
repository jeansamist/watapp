<?php
  class ReqResponse {
    public $response_data;
    public $response_message;

    public function __construct($response_data, String $response_message = "Request Done !") {
      $this->response_data = $response_data;
      $this->response_message = $response_message;
    }

    public function getResponseData():String  {
      return $this->response_data;
    }

    public function getResponseMessage():String {
      return $this->response_message;
    }
  }