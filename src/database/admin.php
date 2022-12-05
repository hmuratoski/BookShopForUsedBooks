<?php

require('./inc/headers.php');
require_once 'inc/functions.php';

$db = openSQLite();

session_start();

if (isset($_SESSION["username"])) {

    $getAdminlevel = "select level from ADMIN where (username = '" . $_SESSION["username"] . "')";
    $getAdminlevel = selectAsJson($db, $getAdminlevel);


// jos admineille eri tasoja

    if (count($getAdminlevel) > 0) {
        echo "Admin level: " . $getAdminlevel[0]["level"] . PHP_EOL;
    }

    else {
        break;
    }

}

