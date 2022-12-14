<!--
require('./inc/headers.php');
session_start();
require('./db_user_controller.php');

$body = file_get_contents("php//:input");
$user = json_decode($body);

if (!isset($user->$name) || !isset($user->$pw)) {
    http_response_code(400);
    echo "Username not valid pls give another";
}

//$uname = strip_tags($user->$uname);

registerUsers($uname,$pw);

$_SESSION['username'] = $uname;

http_response_code(200);
echo "User $uname registered"



>