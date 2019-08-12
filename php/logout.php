<?php
session_start();
session_destroy();
// Redirect tp the login page:
header('Location: index.html')

?>