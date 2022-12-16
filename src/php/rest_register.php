<?php
require('./inc/headers.php');
session_start();
require('./userFunctions.php');


if (!isset($_POST["uname"]) || !isset($_POST["pw"])  || !isset($_POST["email"]) || !isset($_POST["address"]) || !isset($_POST["postnro"]) || !isset($_POST["posttmp"]) || !isset($_POST["puhnro"])){
  http_response_code(400);
  echo "User not defined. Check your credentials";
  return;
 }

  $uname = filter_var($_POST["uname"],FILTER_SANITIZE_FULL_SPECIAL_CHARS);
  $pw = $_POST["pw"];
  $email = filter_var($_POST["email"],FILTER_SANITIZE_EMAIL);
  $address = filter_var($_POST["address"],FILTER_SANITIZE_FULL_SPECIAL_CHARS);
  $postnro = filter_var($_POST["postnro"],FILTER_SANITIZE_NUMBER_INT);
  $posttmp = filter_var($_POST["posttmp"],FILTER_SANITIZE_NUMBER_INT);
  $puhnro = filter_var($_POST["puhnro"],FILTER_SANITIZE_NUMBER_INT);

  registerUser($uname,  $pw,  $email,  $address,  $postnro, $posttmp,  $puhnro);

  $_SESSION['username'] = $uname;

  http_response_code(200);
  echo 'User '.$uname.' registered';
