<?php
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

session_start();

if (!isset($_SESSION["username"])) {
    http_response_code(401);
    echo json_encode(["Not logged in", false, 'notLoggedIn']);
    return;
} else if (!isset($_POST["username"])) {
    http_response_code(400);
    echo json_encode(["Missing information", false, 'missingInfo']);
    return;
} else if ($_SESSION["username"] != $_POST["username"]) {
    http_response_code(401);
    $error = "unauthorized";
    echo json_encode(["Unauthorized", false, 'unauthorized']);
    return;
}

if ($err != 0) {
    http_response_code(400);
    echo json_encode(["Missing information", false, 'missingInfo']);
    return;
} else {
    $username = urlencode($_POST["username"]);
    $customerId = "select customerId from USER where username = '$username'";
    $customerId = selectAsJson($db, $customerId);
    $customerId = $customerId[0]["customerId"];

    $hash = password_hash(urlencode($_POST["password"]),PASSWORD_DEFAULT);
    $fname = ($_POST["fname"]);
    $lname = ($_POST["lname"]);
    $phone = ($_POST["phone"]);
    $email = ($_POST["email"]);
    $address =($_POST["address"]);
    $city = ($_POST["city"]);
    $postalcode =($_POST["postalcode"]);

    $updateCustomer = "UPDATE USER SET username='$username', password='$hash', fname='$fname', lname='$lname', phone='$phone', email='$email', address='$address', city='$city', postalcode='$postalcode' WHERE customerId = $customerId";
    
    try {
        executeQuery($db, $updateCustomer);
        echo json_encode(["Updated user information", true, 'updateSuccess']);
    } catch (Exception $e) {
        http_response_code(409);
        echo json_encode(["Updating information failed", false, 'updateFailed']);
    }
}

?>