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
        $fname = $_POST["fname"];
        $lname = $_POST["lname"];
        $phone = $_POST["phone"];
        $email = $_POST["email"];
        $address = $_POST["address"];
        $city = $_POST["city"];
        $postalcode = $_POST["postalcode"];

        $sql = "INSERT INTO ORDERS(customerId,orderStatus,orderDate,fname,lname,phone,email,address,city,postalcode) VALUES( ";

        session_start();
        if (isset($_SESSION['username'])) {
            $query = "SELECT customerId FROM USER";
            $query = $query . " WHERE username = '" . $_SESSION["username"] . "'";
            try {
                $json = selectAsJson($db, $query);
                $customerId = $json[0]["customerId"];
                $sql .= "'" . $customerId . "','";
            } catch (PDOException $pdoex) {
                returnError($pdoex);
            }
        } else {
            $sql .= "'null','";
        }

        $sql .= "C',";
        $sql .= "datetime(),'";
        $sql .= $fname . "','";
        $sql .= $lname . "','";
        $sql .= $phone . "','";
        $sql .= $email . "','";
        $sql .= $address . "','";
        $sql .= $city . "','";
        $sql .= $postalcode . "')";

        echo $sql;
        try {
            executeInsert($db, $sql);
            echo json_encode(['Order placed', true, 'orderSuccess']);
            foreach ($shoppingCart as $row){
            $bookId=$row['bookId'];

                $updatebook = "UPDATE BOOK SET active=0 WHERE bookId = $bookId";

                try {
                    executeQuery($db, $updatebook);
                    echo json_encode(["Updated user information", true, 'updateSuccess']);
                } catch (Exception $e) {
                    http_response_code(409);
                    echo json_encode(["Updating information failed", false, 'updateFailed']);
                }
            }
        } catch (PDOException $pdoex) {
            returnError($pdoex);
            echo "Failed";
        }








        //order tableen lisätään rivi, orderid tulee automaattisesti autoincrementillä
        //riville laitetaan asiakkaan täyttämät tiedot (esim fname ylempänä)

        //foreachilla $shoppingCartin läpi. Lisätään samalla orderIdllä jokainen tuote databaseen ORDER_ITEMS
        break;
}
