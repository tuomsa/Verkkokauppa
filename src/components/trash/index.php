<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
  case "GET":
    $sql = "SELECT * FROM asiakas";
    $path = explode('/', $_SERVER['REQUEST_URI']);
    if (isset($path[3]) && is_numeric($path[3])) {
      $sql .= " WHERE id = :id";
      $stmt = $conn->prepare($sql);
      $stmt->bindParam(':id', $path[3]);
      $stmt->execute();
      $users = $stmt->fetch(PDO::FETCH_ASSOC);
    } else {
      $stmt = $conn->prepare($sql);
      $stmt->execute();
      $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    echo json_encode($users);
    break;

  case "POST":
    $user = json_decode(file_get_contents('php://input'));
    $sql = "INSERT INTO asiakas(asnimi, osoite, postinro, postitmp, puhelinnro, e_mail, salasana, created_at) VALUES( :asnimi, :osoite, :postinro, :postitmp, :puhelinnro, :e_mail, :salasana)";
    $stmt = $conn->prepare($sql);

    $stmt->bindParam(':asnimi', $user->name);
    $stmt->bindParam(':osoite', $user->address);
    $stmt->bindParam(':postinro', $user->postnumber);
    $stmt->bindParam(':postitmp', $user->postlocation);
    $stmt->bindParam(':puhelinnro', $user->mobile);
    $stmt->bindParam(':e_mail', $user->email);
    $stmt->bindParam(':salasana', $user->pw);

    if ($stmt->execute()) {
      $response = ['status' => 1, 'message' => 'Record created successfully.'];
    } else {
      $response = ['status' => 0, 'message' => 'Failed to create record.'];
    }
    echo json_encode($response);
    break;

  case "PUT":
    $user = json_decode(file_get_contents('php://input'));
    $sql = "UPDATE asiakas SET name= :asnimi, addres =:osoite, postnumber =:postinumero, postlocation =:postitmp, mobile =:puhelinnro, email =:e_mail, pw =:salasana  WHERE id = :astunnus";
    $stmt = $conn->prepare($sql);

    $stmt->bindParam(':astunnus', $user->id);
    $stmt->bindParam(':asnimi', $user->name);
    $stmt->bindParam(':osoite', $user->address);
    $stmt->bindParam(':postinro', $user->postnumber);
    $stmt->bindParam(':postitmp', $user->postlocation);
    $stmt->bindParam(':puhelinnro', $user->mobile);
    $stmt->bindParam(':e_mail', $user->email);
    $stmt->bindParam(':salasana', $user->pw);

    if ($stmt->execute()) {
      $response = ['status' => 1, 'message' => 'Record updated successfully.'];
    } else {
      $response = ['status' => 0, 'message' => 'Failed to update record.'];
    }
    echo json_encode($response);
    break;

  case "DELETE":
    $sql = "DELETE FROM asiakas WHERE astunnus = :astunnus";   /// ÄLÄ SAATANA!
    $path = explode('/', $_SERVER['REQUEST_URI']);

    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':astunnus', $path[3]);

    if ($stmt->execute()) {
      $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
    } else {
      $response = ['status' => 0, 'message' => 'Failed to delete record.'];
    }
    echo json_encode($response);
    break;
}
