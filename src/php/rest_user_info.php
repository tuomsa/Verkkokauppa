<?php
require('./inc/headers.php');
session_start();
require('./db_user_controller.php');

if(!isset($_SESSION['username'])){
    http_response_code(403);
    echo "No access";
    
}


?>