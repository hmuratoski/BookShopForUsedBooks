<?php

global $json;
require_once 'inc/functions.php';
$db = openSQLite();
try {
	$query = 'select * from BOOKS';
	$json = selectAsJson($db, $query);
	print $json[0]['bookName'];
	print " ";
	print $json[0]['author'];
	print " ";
	print $json[0]['price'];
} catch (PDOException $pdoex) {
	returnError($pdoex);
}