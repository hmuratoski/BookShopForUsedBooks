<?php
require('./headers.php');
session_start();
require('/adminfunctions.php');

if(isset($_SESSION['username'])){
    http_response_code(200);
    echo $_SESSION['username'];
    return;
}

if(!isset($_POST['uname']) || !isset($_POST['password'])){
    http_response_code(401);
    echo "User not defined. Give valid username and password";
    return;
}

$uname = $_POST['uname'];
$pw = $_POST['password'];

$verified_uname = checkUser($uname, $pw);

if($verified_uname){
    $_SESSION["username"] = $verified_uname;
    http_response_code(200);
    echo $verified_uname;
}else{
    http_response_code(401);
    echo "Wrong username or password.";
}


?>