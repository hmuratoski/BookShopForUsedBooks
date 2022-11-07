<?php

global $json;
require_once './inc/functions.php';
$db = openSQLite();
try {
	$query = 'select * from school where city = "Oulu"';
	$json = selectAsJson($db, $query);
	print $json[0]['name'];
} catch (PDOException $pdoex) {
	returnError($pdoex);
}
