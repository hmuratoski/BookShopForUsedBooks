<?php
require('./inc/headers.php');
require_once('inc/functions.php');

$db = openSQLite();

if (!isset($_GET["action"])) {
    echo "no action";
    http_response_code(400);
    return;
}


$action = $_GET["action"];
    
switch ($action) {
    case "makeOrder":
        $shoppingCart = json_decode($_POST["shoppingCart"]);
        print("first item in cart: ". $shoppingCart[0] . PHP_EOL);
        print("first name: " . $_POST["fname"]);
    break;
}