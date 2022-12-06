<?php
require('./inc/headers.php');
require_once 'inc/functions.php';


function addBook($bookId, $categoryId, $bookName, $price ,$author , $description , $year, $condition, $active){

    $db = openSQLite();

    $sql = "INSERT INTO BOOK (bookId, categoryId, bookName, price, author, description, year, condition, active) VALUES (?,?,?,?,?,?,?,?,?)";
    $statement = $db->prepare($sql);
    $statement->execute(array($bookId, $categoryId, $bookName, $price ,$author , $description , $year, $condition, $active));
}

function checkUser($uname, $pw){

    $db = openSQLite();

    $sql = "SELECT password FROM USER WHERE username=?";
    $statement = $db->prepare($sql);
    $statement->execute(array($uname));

    $hashedpw = $statement->fetchColumn();

    if(isset($hashedpw)){
        return password_verify($pw, $hashedpw) ? $uname : null;
    }

    return null;
}

/**
 * Getting personal messages for the user
 */
function getUserMessages($uname){
    $db = openSQLite();

    $sql = "SELECT email FROM USER WHERE username=?";
    $statement = $db->prepare($sql);
    $statement->execute(array($uname));

    return $statement->fetchAll(PDO::FETCH_COLUMN,0);
}

?>