<?php
function openDb()
{
  $db = new PDO('mysql:host=localhost;dbname=fiuketesti;charset=utf8', 'root', '');  // kohta johon tarvii laittaa OIKEA oman tietokannan nimi dbname
  $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  return $db;
}

function returnError(PDOException $pdoex)
{
  echo header('HTTP/1.1 500 Internal server Error');
  $error = array('error' => $pdoex->getMessage());
  echo json_encode($error);
}
