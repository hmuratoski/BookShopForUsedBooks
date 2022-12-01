<?php
session_start();
require('./inc/headers.php');
require_once('./inc/functions.php');

$db = openSQLite();

if( !isset($_POST["username"]) || 
    !isset($_POST["password"]) || 
    !isset($_POST["fname"]) || 
    !isset($_POST["lname"]) || 
    !isset($_POST["address"]) || 
    !isset($_POST["postalcode"]) || 
    !isset($_POST["city"]) || 
    !isset($_POST["email"]) || 
    !isset($_POST["phone"])
) {
    http_response_code(400);
    echo "Missing information";
    return;
} else {
    $hash = password_hash($_POST["password"],PASSWORD_DEFAULT);
    $sql = "INSERT INTO USER(username,password,fname,lname,address,postalcode,city,email,phone,city) VALUES('";
    $sql .= $_POST["username"] . "','";
    $sql .= $hash . "','";
    $sql .= $_POST["fname"] . "','";
    $sql .= $_POST["lname"] . "','";
    $sql .= $_POST["address"] . "','";
    $sql .= $_POST["postalcode"] . "','";
    $sql .= $_POST["city"] . "','";
    $sql .= $_POST["email"] . "','";
    $sql .= $_POST["phone"] . "','";
    $sql .= $_POST["city"] . "')";
    try {
        executeInsert($db, $sql);
        echo "Success";
        $_SESSION['username'] = $_POST["username"];
        http_response_code(200);
    } catch (Exception $e) {
        echo "Failed";
        print_r($e);
    }
}

?>
