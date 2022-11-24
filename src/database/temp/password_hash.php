<?php

$password = "test123";
$passwordhash = password_hash($password, PASSWORD_DEFAULT);

$password = "test123";

if (password_verify($password, $passwordhash)) {
	print "Password valid";
} else {
	print "Password invalid";
}