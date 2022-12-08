<?php
require('./inc/headers.php');
require_once('./inc/functions.php');

session_start();

if (isset($_SESSION["username"])) {

$db = openSQLite();
  
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