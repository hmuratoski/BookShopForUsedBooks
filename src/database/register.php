<?php

require('./headers.php');
session_start();

$body = file_get_contents("php://input");
$user = json_decode($body);

if(!isset($customerId->username) || !isset($username->password)){
    http_response_code(400);
    echo "User not defined. Give valid username and password";
    return;
}


registerUser($customerId->username, $username->password);

$_SESSION['username'] = $user->uname;

http_response_code(200);
echo "User ".$customer->username." registered";

