<?php

require('./inc/headers.php');
require('/admin.php');
require('/adminfunctions.php');
session_start();


$body = file_get_contents("php://input");
$book = json_decode($book);

if(!isset($user->uname) || !isset($user->pw)){
    http_response_code(400);
    echo "User not defined. Give valid username and password";
    return;
}

//Oikeasti pitäisi käyttäjänimi ja salasana
//tutkia järkevästi (mitkä merkit sallittuja jne. ja ilmoittaa käyttäjälle)
//$uname = strip_tags($user->uname);

addBook($bookId->bookId, $categoryId->categoryId, $bookName->bookName, $price->price, $author->author, $description->description, $year->year, $condition->condition, $active->active);


$_SESSION['username'] = $user->uname;

http_response_code(200);
echo "User ".$user->uname." registered";

?>

