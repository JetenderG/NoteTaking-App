<?php
// We meed tp ise sessions, sp ypu should always start sesssions using below code

session_start();
// If the user is not logged in redirect to the login page...
if (!isset($_SESSION['loggedin'])) {
    header('Location : index.html');
    exit();
}




?>