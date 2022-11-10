<?php
	header("Access-Control-Allow-Origin: *");
	
	global $json;
	require_once 'inc/functions.php';
	$db = openSQLite();
	if (isset($_GET["action"])) {
		$action = $_GET["action"];
		
		switch ($action) {  //tein case switchin, että php tietää mitä yritetään saavuttaa
			case "getBooks":
				$query = 'select * from BOOK';
			break;
			
			case "getCatProducts":
				if (isset($_GET["category"]))
				$query = 'select * from BOOK where categoryId = ' . $_GET["category"] . 'order by categoryId';     // = > in
			break;
			
			case "getCat":
				$query = 'select * from CATEGORY';
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