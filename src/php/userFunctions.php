<?php
require('./inc/functions.php');
require('./dbconnection.php');

// Register
function registerUser($uname,  $pw,  $email,  $address,  $postnro, $posttmp,  $puhnro)
{

    try {
        $db = openDb();
        //$db->beginTransaction();
        $pw = password_hash($pw, PASSWORD_DEFAULT);
        $sql = "INSERT INTO asiakas (asnimi, salasana, e_mail, osoite, postinro, postitmp, puhelinnro, status ) 
        VALUES
         (?,?,?,?,?,?,?,'active')";

        $statement = $db->prepare($sql);
        $statement->execute(array($uname, $pw, $email, $address, $postnro, $posttmp, $puhnro));

    } catch (PDOException $pdoex) {
        //$db->rollBack();
        returnError($pdoex);
    }
}

// Check User
function checkUser($uname, $pw)
{
    $db = openDb();

    $sql = "SELECT pw FROM customer WHERE fullname=?";
    $statement = $db->prepare($sql);
    $statement->execute(array($uname));

    $hashedpw = $statement->fetchColumn();

    if (isset($hashedpw)) {
        return password_verify($pw, $hashedpw) ? $uname : null;
    }
    return null;
}

// Check Status

function getUserStatus($uname)
{
    $db = openDb();

    $sql = "SELECT status FROM customer WHERE fullname=?";
    $statement = $db->prepare($sql);
    $statement->execute(array($uname));

    return $statement->fetchAll(PDO::FETCH_COLUMN, 0);
}
