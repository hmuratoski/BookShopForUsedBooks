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

if($err != 0) {
    http_response_code(400);
    echo json_encode(["Missing information", false, 'missingInfo']);
    return;
} else {
    $username = urlencode($_POST["username"]);
    $customerId = "select customerId from USER where username = '$username'";
    $customerId = selectAsJson($db, $customerId);

    $hash = password_hash(urlencode($_POST["password"]),PASSWORD_DEFAULT);
    $fname = ($_POST["fname"]);
    $lname = ($_POST["lname"]);
    $phone = ($_POST["phone"]);
    $email = ($_POST["email"]);
    $address =($_POST["address"]);
    $city = ($_POST["city"]);
    $postalcode =($_POST["postalcode"]);

    $updateCustomer = "UPDATE USER SET username='$username', password='$hash', fname='$fname', lname='$lname', phone='$phone', email='$email', address='$address', city='$city', postalcode='$postalcode' WHERE customerId = $cId";
    
    try {
        executeQuery($db, $updateCustomer);
        echo json_encode(["Updated user information", true, 'updateSuccess']);
    } catch (Exception $e) {
        http_response_code(409);
        echo json_encode(["Updating information failed", false, 'updateFailed']);
    }
}

?>