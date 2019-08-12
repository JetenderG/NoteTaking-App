<?php
// Change this to your connection info.
$DATABASE_HOST = 'localhost';
$DATABASE_USER ='root';
$DATABASE_PASS = 'root';
$DATABASE_NAME = 'noteTaker_db';
// Change this to your connection info.
$con =mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);
if(mysqli_connect_errno()){
    	// If there is an error with the connection, stop the script and display the error.
    die('Failed to connect to MySQL : ' . mysqli_connect_error());
}
// First we check if the email and code exists...
if (isset($_GET['email'], $_GET['code'])){
    if($stmt = $con->prepare('SELECT * FROM accounts WHERE email = ? AND activation_code = ?')){
        $stmt->bind_param('ss', $_GET['email'], $_GET['code']);
        $stmt->execute();
        		// Store the result so we can check if the account exists in the database.
        $stmt->store_result();
        if($stmt->num_rows > 0){
            			// Account exists with the requested email and code.
            if($stmt = $con->prepare('UPDATE accounts SET activation_code = ? WHERE email = ? AND activation_code = ? ')){
                $newcode = 'activated';
                $stmt->bind_param('sss', $newcode , $_GET['email'], $_GET['code']);
                $stmt->execute();
                echo 'Your account is now activated, y0u can now login! <br>< href = "index.html">Login</a>';
            }else{
                echo 'The account is already activated or dose not exist!';
            }
        }
    }
}




?>