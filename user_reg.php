<?php 

extract($_POST);
include("database.php");

if (empty($firstName) ||
	empty($lastName) ||
	empty($password) ||
	empty($email) ||
	empty($cpassword) ||
	empty($birthDate) ||
	empty($phoneNumber) 
	) {
	
	die('Please fill all required fields!');
}

if ($password !== $cpassword) {
   die('Password and Confirm password should match!');   
}

$sql=mysqli_query($conn,"SELECT * FROM user where Email='$email'");
if(mysqli_num_rows($sql)>0)
{
    die("1"); //"Email Id Already Exists"; 
	
}
else if(isset($_POST['save'])){
   
	$query = "INSERT INTO user (firstName, lastName, email, password, birthDate, phoneNumer ) VALUES ('$firstName', '$lastName', '$email', '".md5($password)."', '$birthDate' ,'$phoneNumber')";
	$sql = mysqli_query($conn,$query) or die("Could Not Perform the Query");
	die("registered");
}

?>