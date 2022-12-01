<?php
	require('./inc/headers.php');
	require_once('./inc/functions.php');

    $db = openSQLite();

	if (isset($_GET["action"])) {
		$action = $_GET["action"];
		
		switch ($action) {
			case "getUser":
            	if (isset($_GET["userName"])) {
           			$query = "SELECT fname, lname, address, postalcode, city, email, phone FROM USER";
                  	$query = $query . " WHERE username = '" . $_GET["userName"] . "'";
                } else {
					http_response_code(400);
					echo "Missing argument";
					return;
				} try {
					$json = selectAsJson($db, $query);
					$json = json_encode($json);
					print $json;
				} catch (PDOException $pdoex) {
					returnError($pdoex);
				}
            	break;
			case "loginSession":
				
				if (isset($_SESSION['username'])) {
					http_response_code(200);
					echo $_SESSION['username'];
					return;
				}
				break;
                  
			case "login":
				if (
					isset($_POST["username"]) &&
					isset($_POST['password'])
				) {
					$query = "SELECT password from USER where username = '" . $_POST['username'] ."'";
					$hash = selectAsJson($db, $query);
					if (count($hash) == 1) {
						$hash = $hash[0]["password"];
						if (password_verify($_POST['password'], $hash)) {
							$_SESSION['username'] = $_POST["username"];
							session_start();
							$data["username"] = $_POST["username"];
							$data["status"] = true;
							$data = json_encode($data);
							echo $data;
						} else {
							echo "fail";
						}
				}
				} else {
					echo "fail: no info";
				}
        } 
    } else {
		echo "no action";
	}
?>