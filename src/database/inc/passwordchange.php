<?php
session_start();
$_SESSION["userId"] = "1";
$conn = mysqli_connect("localhost", "root", "", "password_change");
if (count($_POST) > 0) {

    $sql = "SELECT * FROM users WHERE userId= ?";
    $statement = $conn->prepare($sql);
    $statement->bind_param('i', $_SESSION["userId"]);
    $statement->execute();
    $result = $statement->get_result();
    $row = $result->fetch_assoc();

    if (! empty($row)) {
        $hashedPassword = $row["password"];
        $password = PASSWORD_HASH($_POST["newPassword"], PASSWORD_DEFAULT);
        if (password_verify($_POST["currentPassword"], $hashedPassword)) {
            $sql = "UPDATE users set password=? WHERE userId=?";
            $statement = $conn->prepare($sql);
            $statement->bind_param('si', $password, $_SESSION["userId"]);
            $statement->execute();
            $message = "Password Changed";
        } else
            $message = "Current Password is not correct";
    }
}
?>