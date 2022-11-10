<?php
	 header("Access-Control-Allow-Origin: *");
	
	global $json;
	require_once 'inc/functions.php';
	$db = openSQLite();         
	$action = "getBooks"; //kovakoodi purkka, hävitetään myöhemmin, voi vaihtaa jos haluaa testailla
								//tulee siis requestin mukana
	switch ($action) {  //tein case switchin, että php tietää mitä yritetään saavuttaa
	    case "getBooks":
	        $query = 'select * from BOOKS';
	        break;
	    case "getCat":
			$query = 'select * from CATEGORY';
	        break;
		case "getCat1":
			$query = 'select * from BOOKS where categoryId = 1';
	        break;
		case "getCat2":
			$query = 'select * from BOOKS where categoryId = 2';
			break;
		case "getCat3":
			$query = 'select * from BOOKS where categoryId = 3';
			break;
	}
	
	try {
		$json = selectAsJson($db, $query);
		$json = json_encode($json);
		print $json;
	} catch (PDOException $pdoex) {
		returnError($pdoex);
	}
	
?>