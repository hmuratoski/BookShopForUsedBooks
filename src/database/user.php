<?php
	header("Access-Control-Allow-Origin: *");
	require_once 'inc/functions.php';

    $db = openSQLite();

	if (isset($_GET["action"])) {
		$action = $_GET["action"];
		
		switch ($action) {
			case "getUser":
            	if (isset($_GET["userName"])) {
           			$query = "SELECT fname, lname, address, postalcode, city, email, phone FROM USER";
                  	$query = $query . " WHERE username = '" . $_GET["userName"] . "'";
                }
            	break;
                  
        } try {
			$json = selectAsJson($db, $query);
			$json = json_encode($json);
			print $json;
		} catch (PDOException $pdoex) {
			returnError($pdoex);
		}
    } else {
		echo "no action";
	}
?>