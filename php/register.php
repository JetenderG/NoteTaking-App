 
<?php

$DATABASE_HOST = 'localhost';
$DATABASE_USER = 'root';
$DATABASE_PASS = 'root';
$DATABASE_NAME = 'noteTaker_db'

$con=mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);
if (mysqli_connect_errno()){
    	// If there is an error with the connection, stop the script and display the error.
        die ('Failed to connect to mySQL:' . mysqli_connect_errno())
}

if(!isset($_POST['username']) || ($_POST['password']) || ($_POST['email'])){
    die ('Please complete the registeration form!');
}
if(empty($_POST['username']) || empty($_POST['password']) || empty($_POST['email'])){
    die('Please complete the registration form')
}
if($stmt = $con->prepare('Select id, password from accounts WHERE username')){
    	// Bind parameters (s = string, i = int, b = blob, etc), hash the password using the PHP password_hash function.
    $stmt->bind_param("s", $_POST["username"]);
    $stmt->execute();
    $stmt->store_result();	
    // Store the result so we can check if the account exists in the database.
    if ($stmt->num_rows > 0){
        echo 'Username exists, please choose another!';
    }else{
// Username doesnt exists, insert new account
if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
	die ('Email is not valid!');
}

if($stmt - $con->prepare('INSERT INTO accounts (username,password,email,activation_code) VALUES(?,?,?,?)')){
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
    $stmt->bind_param('ssss', $_POST['username'], $password, $_POST['email'],'$uniqid');
    $stmt->execute();
    
    $from = 'noreply@yourdoman.com';
    $subject = 'Account Activation Required';
    $headers = 'From: ' . $from . "\r\n" . 'Reply-To: ' . $from . "\r\n" . 'X-Mailer: PHP/' . phpversion() . "\r\n" . 'MIME-VERSION: 1.0' . "\r\n" . 'Content-Type: text/html; charset=UTF-8' . "\r\n"; 
    $activation_link = 'http://yourdomain.com/phplogin/activate.php?email =' . $_POST['email'] . '&code='. $uniqid;
    $message= '<p>Please click the following link tyo activate your account: <a href="'.$activation_link ' ">' . $activation_link , '</a></p>';
    mail($_POST['email'], $subject. $message.$headers);
    echo "Please check your email to activate your account!";
}else{
    // Something is wrong with the sql statement, check to make sure accounts table exists with all 3 fields.
	echo 'Could not prepare statement!';
}

    }
    $stmt->close();
}else{
    	// Something is wrong with the sql statement, check to make sure accounts table exists with all 3 fields.
 echo 'Could not prepare statement'
}
$con->close();
?>