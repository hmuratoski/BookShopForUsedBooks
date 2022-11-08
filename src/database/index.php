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
	}
	
	try {
		$json = selectAsJson($db, $query);
		$json = json_encode($json);
		print $json;
	} catch (PDOException $pdoex) {
		returnError($pdoex);
	}
	
?>