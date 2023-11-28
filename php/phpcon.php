<?php
    require_once 'config.php'
    try{
        $con = new PDO("mysql:host=$host; dbname=$dbname, $uname, $key");
        echo "Connected to $dbname at $host successfully.";
    } catch (PDOException $e) {
        die("Could not connect to database $dbname :". $pe->get_Message());
    }
    $con = null;
?>