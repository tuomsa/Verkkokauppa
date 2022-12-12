<?php
require_once('./inc/functions.php');
require('./inc/headers.php');



function registerUsers($uname, $pw){
$db= openDb();

$pw = password_hash($pw, PASSWORD_DEFAULT);
$sql = "INSERT INTO  asiakas(asnimi,salasana) values(?,?)";
$statement = $db->prepare($sql);
$statement->execute(array($uname,$pw));

}

?>