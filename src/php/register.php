<?php
require_once('./inc/functions.php');
require('./inc/headers.php');




if (isset($_POST["uname"]) || isset($_POST["pw"])  || isset($_POST["email"]) || isset($_POST["address"]) ||  isset($_POST["postnro"]) || 
 isset($_POST["posttmp"]) || isset($_POST["puhnro"])){

$uname = filter_var($_POST["uname"]);
$pw = filter_var($_POST["pw"]);
$email = filter_var($_POST["email"]);
$address = filter_var($_POST["address"]);
$postnro = filter_var($_POST["postnro"]);
$posttmp = filter_var($_POST["posttmp"]);
$puhnro = filter_var($_POST["puhnro"]);

try {
    $db = openDb();
    $sql = "insert into asiakas (asnimi, salasana, e_mail, osoite, postinro, postitmp, puhelinnro, status ) 
    values ('$uname','$pw', '$email', '$address', '$postnro', '$posttmp', '$puhnro', 'active' )";
    executeInsert($db, $sql);
    $data = array('asnimi'=> $uname,  $pw,  $email,  $address,  $postnro, $posttmp,  $puhnro);
    print json_encode($data);
  } catch (PDOException $pdoex) {
    returnError($pdoex);
  }
  } else {
    http_response_code(404);
    echo "WTF!?!?";
  }