<?php
    $serverName = "localhost";
    $username ="root";
    $password = "Carolina#2013";
    $databaseName="react_php";
    
    $conn = mysqli_connect($serverName, $username, $password, $databaseName);
    
    $recievedText = $_POST['text'];

    $query="INSERT INTO messages (texts) VALUES('$recievedText')";
 
    if(mysqli_query($conn, $query)){
        echo "Data has been inserted successfully";
    } else {
        echo "Error";
    }
?>