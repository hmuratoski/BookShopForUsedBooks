<?php

$password = "test123";
$passwordhash = password_hash($password, PASSWORD_DEFAULT);

echo $password . " = " . $passwordhash  . PHP_EOL . PHP_EOL;

$password = "test321";

echo "Matching " . $password . " to " . $passwordhash . PHP_EOL;
if (password_verify($password, $passwordhash)) {
	print "Password valid";
} else {
	print "Password invalid";
}