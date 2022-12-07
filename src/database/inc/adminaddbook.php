<?php
require_once 'functions.php';
require_once 'headers.php';

try {
  $db = openDb();
  selectAsJson($db,'INSERT INTO BOOK (bookId, categoryId,bookName, price, author, description, year, condition, active VALUES');
}
catch (PDOException $pdoex) {
  returnError($pdoex);
}
