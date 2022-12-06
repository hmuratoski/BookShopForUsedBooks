<?php
require('./inc/headers.php');
require_once('./inc/functions.php');

$db = openSQLite();

$requiredInfo = array('categoryId','bookName','price','author','description','year','condition','active');
$err = 0;

foreach ($requiredInfo as $key) {
    if(!isset($_POST[$key])) {
        $err++;
    }
}

if($err != 0) {
    http_response_code(400);
    echo json_encode(["Missing information", false, 'missingInfo']);
    return;
} else {
    $bookName = urlencode($_POST["bookName"]);
    $checkBookExist = "select * from BOOK where (bookName = '" . $bookName ."')";
    $checkBookExist = selectAsJson($db, $checkBookExist);
    if (count($checkBookExist) != 0) {
        http_response_code(409);
        echo json_encode(["Book by that name already in database", false, 'alreadyExists']);
        
        return;
    } else {
        $sql = "INSERT INTO BOOK(";
        $i = 0;
        foreach ($requiredInfo as $key) {
            $sql .= $key;
            $i++;
            if ($i != count($requiredInfo)) {
                $sql .= ",";
            }
        }
        $sql .= ") VALUES('";
        $sql .= $_POST["categoryId"] . "','";
        $sql .= $_POST["bookName"] . "','";
        $sql .= $_POST["price"] . "','";
        $sql .= $_POST["author"] . "','";
        $sql .= $_POST["description"] . "','";
        $sql .= $_POST["year"] . "','";
        $sql .= $_POST["condition"] . "','";
        $sql .= $_POST["active"] . "')";

        try {
            executeInsert($db, $sql);
            echo json_encode(['Book successfully added to database', true, 'BookAdded']);
            session_start();
            $_SESSION['username'] = $username;
            http_response_code(200);
        } catch (Exception $e) {
            echo "Failed";
            print_r($e);
        }
    }
}

?>
