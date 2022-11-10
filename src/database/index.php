<?php
	 header("Access-Control-Allow-Origin: *");
	
	global $json;
	require_once 'inc/functions.php';
	$db = openSQLite();
	if (isset($_GET["action"])) {
		$action = $_GET["action"];
		
		switch ($action) {  //tein case switchin, että php tietää mitä yritetään saavuttaa
			case "getBooks":
				$query = 'select * from BOOKS';
				break;
			case "getCat":
				if (isset($_GET["category"]))
				$query = 'select * from BOOKS where categoryId = ' . $_GET["category"];
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