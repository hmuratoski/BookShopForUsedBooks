<?php
session_start();
require('./inc/headers.php');
require_once('./inc/functions.php');

$db = openSQLite();

$requiredInfo = array('username','password','fname','lname','address','postalcode','city','email','phone');
$err = 0;

foreach ($requiredInfo as $key) {
    if(!isset($_POST[$key])) {
        $err++;
    }
}

if($err != 0) {
    http_response_code(400);
    echo "Missing information";
    return;
} else {
    $checkUserExist = "select * from USER where (username = '" . $_POST["username"]."' OR email = '" . $_POST["email"] . "')";
    $checkUserExist = selectAsJson($db, $checkUserExist);
    if (count($checkUserExist) != 0) {
        http_response_code(409);
        echo "Username or email already exists in the database";
        return;
    } else {

        $hash = password_hash($_POST["password"],PASSWORD_DEFAULT);
        $sql = "INSERT INTO USER(";
        $i = 0;
        foreach ($requiredInfo as $key) {
            $sql .= $key;
            $i++;
            if ($i != count($requiredInfo)) {
                $sql .= ",";
            }
        }
        $sql .= ") VALUES('";
        $sql .= $_POST["username"] . "','";
        $sql .= $hash . "','";
        $sql .= $_POST["fname"] . "','";
        $sql .= $_POST["lname"] . "','";
        $sql .= $_POST["address"] . "','";
        $sql .= $_POST["postalcode"] . "','";
        $sql .= $_POST["city"] . "','";
        $sql .= $_POST["email"] . "','";
        $sql .= $_POST["phone"] . "')";
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
}

?>
