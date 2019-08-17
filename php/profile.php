<?php
// We need to use sessions, so you should always start sessions using the below code. 
session_start();
// If the user is not logged in redirect to the login page... 
if (!isset($_SESSION['loggedin'])){
    header('Location: index.html');
    exit();
}
$DATABASE_HOST = 'localhost';
$DATABASE_USER = 'root';
$DATABASE_PASS = 'root';
$DATABASE_Name = 'noteTaker_db';

if(mysqli_connect_errno()){
    die ('Failed to connect to MySQL' . mysqli_connect_error());
}
// We don't have the password or email info stored in sessions so instead we can get the results from the database
$stmt = $con->prepare('SELECT password, email FROM accounts where id = ?');
// In this case we can ise the account ID to get the account info.
$stmt->bind_param( 'i', $_SESSION['id']);
$stmt->execute();
$stmt->bind_result($password, $email);
$stmt->fetch();
$stmt->close();
?>