<?php
require_once './inc/functions.php';
require_once './inc/headers.php';

try {
  $db = openDb();
  selectAsJson($db,'select * FROM tuote WHERE trnro IN (SELECT trnro FROM tuoteryhma WHERE tyyppi = "Maasto")');
}
catch (PDOException $pdoex) {
  returnError($pdoex);
}