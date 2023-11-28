<?php
        $host = 'localhost';
        $dbname = 'newsl';
        $uname = 'YourUsername';//please change your id and password here
        $key = 'YourPassword';
   $con = mysqli_connect($host,$uname,$key);
    if(!$con){
        echo 'Could not Connect to N2D Server Please contact support@n2d.com';
    }
    if(!mysqli_select_db($con,'newsl')){
        echo 'Error Connecting Database Please contact support@n2d.com';
    }
?>