<?php
require_once('./inc/functions.php');
require('./inc/headers.php');

header('Access-Control-Allow-Origin: *');

if (isset($_POST["name"]) && isset($_POST["status"])) {
$name = filter_var($_POST["name"],FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$status = filter_var($_POST["status"],FILTER_SANITIZE_FULL_SPECIAL_CHARS);


try {
  $db = openDb();
  $sql = "insert into tuoteryhma (tyyppi, status) values ('$name','$status')";
  executeInsert($db, $sql);
  $data = array('trnro' => $db->lastInsertId(), 'tyyppi' => $name);
  print json_encode($data);
} catch (PDOException $pdoex) {
  returnError($pdoex);
}
} else {
  http_response_code(404);
  echo "Missing argument";
}
