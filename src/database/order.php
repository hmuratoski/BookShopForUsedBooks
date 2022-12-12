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
session_start();
if (isset($_SESSION['username'])) {
    $query = "SELECT customerId FROM USER";
	$query = $query . " WHERE username = '" . $_SESSION["username"] . "'";
    try {
        $json = selectAsJson($db, $query);
        $customerId=$json[0]["customerId"];
    } catch (PDOException $pdoex) {
        returnError($pdoex);
    }
}        
    
switch ($action) {
    case "makeOrder":
        $shoppingCart = json_decode($_POST["shoppingCart"]);
        $fname = $_POST["fname"];
        $lname = $_POST["lname"];
        $phone = $_POST["phone"];
        $email = $_POST["email"];
        $address = $_POST["address"];
        $city = $_POST["city"];
        $stateProvince = $_POST["stateProvince"];
        $postalcode = $_POST["postalcode"];

        

        //jos kirjauduttu, haetaan käyttäjän id session usernamen perusteella, muuten customerId tyhjäksi
        //order tableen lisätään rivi, orderid tulee automaattisesti autoincrementillä
        //riville laitetaan asiakkaan täyttämät tiedot (esim fname ylempänä)

        //foreachilla $shoppingCartin läpi. Lisätään samalla orderIdllä jokainen tuote databaseen ORDER_ITEMS
    break;
}