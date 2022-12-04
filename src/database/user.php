<?php
	require('./inc/headers.php');
	require_once('./inc/functions.php');

    $db = openSQLite();

	if (isset($_GET["action"])) {
		$action = $_GET["action"];
		
		switch ($action) {
			case "getUser":
            	if (isset($_POST["username"])) {
					session_start();
					if (isset($_SESSION["username"])) {
						if ($_POST["username"] == $_SESSION["username"]) {
							$query = "SELECT fname, lname, address, postalcode, city, email, phone FROM USER";
							$query = $query . " WHERE username = '" . $_SESSION["username"] . "'";
						}
					} else {
						echo "Forbidden";
						http_response_code(403);
						return;
					}
                } else {
					http_response_code(400);
					echo "Missing argument";
					return;
				} try {
					$json = selectAsJson($db, $query);
					$json = json_encode($json);
					echo $json;
				} catch (PDOException $pdoex) {
					returnError($pdoex);
				}
            	break;
			case "loginSession":
				session_start();
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
					$password = urlencode($_POST['password']);
					$username = urlencode($_POST['username']);
					
					$query = "SELECT password from USER where username = '" . $username ."'";
					$hash = selectAsJson($db, $query);
					if (count($hash) == 1) {
						$hash = $hash[0]["password"];
						if (password_verify($_POST['password'], $hash)) {
							session_start();
							$_SESSION['username'] = $_POST["username"];
							$data["username"] = $_POST["username"];
							$data["status"] = true;
							$data = json_encode($data);
							echo $data;
						} else {
							echo "server error";
						}
				}
				} else {
					echo "login failed, missing information";
				}
				break;
			case "logout":
				session_start();
				unset($_SESSION["username"]);
				http_response_code(200);
				echo "logged out";
        } 
    } else {
		echo "no action";
	}
?>