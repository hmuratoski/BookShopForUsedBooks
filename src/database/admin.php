<?php

require('./inc/headers.php');
require_once 'inc/functions.php';


$db = openSQLite();

session_start();


if (isset($_SESSION["username"])) {

    $getAdminlevel = "select level from ADMIN where (username = '" . $_SESSION["username"] . "')";
    $getAdminlevel = selectAsJson($db, $getAdminlevel);


    if (count($getAdminlevel) > 0) {

        if (!isset($_GET["action"])) {
            http_response_code(400);
            echo('no action');
            return;
        }


        if (isset($_GET["action"])) { 
        $action = $_GET["action"];

            switch($action) {
                case "addBook":
                    $categoryId = $_POST['categoryId'];
                    $bookName = $_POST['bookName'];
                    $price = $_POST['price'];
                    $author = $_POST['author'];
                    $description = $_POST['description'];
                    $year = $_POST['year'];
                    $condition = $_POST['condition'];
                    $active = $_POST['active'];

                    $sql = "INSERT INTO BOOK (categoryId, bookName, price, author, description, year, condition, active) VALUES ('$categoryId', '$bookName', '$price', '$author', '$description', '$year', '$condition', '$active'); ";

                    try {

                        executeInsert($db, $sql);
                        echo json_encode(['Book added successfully', true, 'bookAdded']);

                    }
                    catch (PDOException $pdoex) {
                        returnError($pdoex);
                        echo "Failed";
                    }

                break;

                    case "addCategory":
                        $categoryName = $_POST['categoryName'];
                        
                        $sql = "INSERT INTO CATEGORY (categoryName) VALUES ('$categoryName'); ";

                        try {
                            
                            executeInsert($db, $sql);
                            echo json_encode(['Category added succesfully', true, 'categoryAdded']);

                        }
                        catch (PDOException $pdoex) {
                            returnError($pdoex);
                            echo "Failed";
                    break;

                    // case "BookStatus":
                    // $bookId = $_POST['bookId'];
                    // $active = $_POST['active'];
    
                    //  $sql = "UPDATE TABLE BOOK SET active = " . $active . "WHERE bookId = " . $bookId ." ";
    
                    // try {
    
                    //     executeInsert($db, $sql);
                    //      echo json_encode(['Book status successfully altered', true, 'activeChanged']);

                    // }
                    // catch (PDOException $pdoex) {
                    //     returnError($pdoex);
                    //     echo "Failed";

                            
            break;

                           
                    


        }

            case "getLevel":
                echo json_encode(['User is an admin', true, 'isAdmin', $getAdminlevel]);
                return;
            break;
        }

        } 

         }

    };
    echo "not an admin";
    return;
    
echo "not logged in";
return;



?>