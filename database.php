<?php
    $url='localhost';
    $dbusername='root';
    $dbpassword='root123';
    $conn=mysqli_connect($url,$dbusername,$dbpassword,"lara_crud");
    if(!$conn){
        die('Could not Connect My Sql:' .mysql_error());
    }
?>