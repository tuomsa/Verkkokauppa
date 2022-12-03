<?php
header('Access-Control-Allow-Origin: *');
header('Acces-Control-Allow-Credentials: true');
header("Access-Control-Allow-Headers: POST, GET, PUT, DELETE, OPTIONS");
header('Acces-Control-Allow-Headers: Origin, X-Requested-With, Accept, Content-Type, Acces-Control-Allow-Header');
header('Content-Type: application/json');
header('Acces-Control-Max-Age: 3000');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  if (isset($_SERVER['HTTP_ACCES_CONTROL_REQUEST_HEADERS']))
    header("Acces-Control-Allow-Methods: GET, POST, OPTIONS");

  if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
    header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCES_CONTROL_REQUEST_HEADERS']}");

  exit(0);
}
