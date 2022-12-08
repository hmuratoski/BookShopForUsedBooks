<?php

require('./inc/headers.php');
require_once 'inc/functions.php';


$db = openSQLite();

session_start();

if (isset($_SESSION["username"])) {

    $getAdminlevel = "select level from ADMIN where (username = '" . $_SESSION["username"] . "')";
    $getAdminlevel = selectAsJson($db, $getAdminlevel);


    if (count($getAdminlevel) > 0) {
        echo "Admin level: " . $getAdminlevel[0]["level"] . PHP_EOL;

        if (!isset($_GET["action"])) {
            http_response_code(400);
            echo('no action');
            return;
        }

        $action = $_GET["action"];

        switch($action) {
            case "addBook":
                $bookId = $_POST['bookId'];
                $categoryId = $_POST['categoryId'];
                $bookName = $_POST['bookName'];
                $price = $_POST['price'];
                $author = $_POST['author'];
                $description = $_POST['description'];
                $year = $_POST['year'];
                $condition = $_POST['condition'];
                $active = $_POST['active'];

                $sql = "INSERT INTO BOOK (bookId, categoryId, bookName, price, author, description, year, condition, active) VALUES ('$bookId', '$categoryId', '$bookName', '$price', '$author', '$description', '$year', '$condition', '$active'); ";

                try {

                    executeInsert($db, $sql);
                    echo json_encode(['Book added successfully', true, 'bookAdded']);

                }
                catch (PDOException $pdoex) {
                    returnError($pdoex);
                    echo "Failed";
                }

        }


    };

}



?>