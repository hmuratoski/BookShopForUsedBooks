<?php
require('./inc/headers.php');
require_once 'inc/functions.php';


function addBook($bookId, $categoryId, $bookName, $price ,$author , $description , $year, $condition, $active){

    $db = openSQLite();

    $sql = "INSERT INTO BOOK (bookId, categoryId, bookName, price, author, description, year, condition, active) VALUES (?,?,?,?,?,?,?,?,?)";
    $statement = $db->prepare($sql);
    $statement->execute(array($bookId, $categoryId, $bookName, $price ,$author , $description , $year, $condition, $active));
}

?>