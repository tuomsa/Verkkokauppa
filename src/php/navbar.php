<?php
require_once 'inc/functions.php';
require_once 'inc/headers.php';

try {
  $db = openDb();
  $sql = "select DISTINCT tyyppi from tuoteryhma";               //Tähän kohtaan pitää muuttaa mistä taulusta haetaan!
  $query = $db->query($sql);
  $results = $query->fetchAll(PDO::FETCH_ASSOC);
  $json = json_encode($results, JSON_PRETTY_PRINT);
  header('HTTP/1.1 200 OK');
  print $json;
} catch (PDOException $pdoex) {
  echo header('HTTP/1.1 500 Internal server Error');
  $error = array('error' => $pdoex->getMessage());
  echo json_encode($error);
}
