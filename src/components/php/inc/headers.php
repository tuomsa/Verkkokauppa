<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Headers: Accept,Content-Type');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');  

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {  //näyttää fronttiin
  return 0;
}