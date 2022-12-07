<?php
require_once 'functions.php';
require_once 'headers.php';


$db = openDb();
  
$bookId = $_POST['bookId'];
$categoryId = $_POST['categoryId'];
$bookName = $_POST['bookName'];
$price = $_POST['price'];
$author = $_POST['author'];
$description = $_POST['description'];
$year = $_POST['year'];
$condition = $_POST['condition'];
$active = $_POST['active'];

try {

  $sql = "INSERT INTO BOOK (bookId, categoryId, bookName, price, author, description, year, condition, active) VALUES ('$bookId', '$categoryId', '$bookName', '$price', '$author', '$description', '$year', '$condition', '$active'); ";

  session_start();
  $_SESSION['username'] = $username;
  http_response_code(200);
  executeInsert($db, $sql);
  echo json_encode(['Book added successfully', true, 'bookAdded']);

}
catch (PDOException $pdoex) {
  returnError($pdoex);
  echo "Failed";
}
