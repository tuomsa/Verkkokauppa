<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Acces-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: Accept, Access-Control-Allow-Headers, Content-Type');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Acces-Control-Max-Age: 3000');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  if (isset($_SERVER['HTTP_ACCES_CONTROL_REQUEST_HEADERS']))
    header("Acces-Control-Allow-Methods: GET, POST, OPTIONS");

  if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
    header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCES_CONTROL_REQUEST_HEADERS']}");

  exit(0);
}
