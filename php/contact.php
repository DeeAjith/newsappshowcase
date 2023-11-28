<?php
	//create db
	include 'config.php';
	
	
	if(isset($_POST['email']) == true && empty($_POST['email']) == false){
		$email = $_POST['email'];
		if(filter_var($email, FILTER_VALIDATE_EMAIL) == true){
			//SQL
			$sql = "INSERT INTO newsletter (email) VALUES ('$email')";
			//check
			echo 'That\'s a valid email address ';
			$res = mysqli_query($con, $sql);
			if(!$res){
				echo 'Could not post data! Contact at support@n2d.com.';
			}else{
				echo "Thanks for Subscribing";
			}
		}else {
			echo 'Not a valid email address';
		}
	}

	
?>