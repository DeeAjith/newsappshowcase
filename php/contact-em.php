<?php

	$errors = array();

	// Check if name has been entered
	if (!isset($_POST['name'])) {
		$errors['name'] = 'Please enter your name';
	}

	// Check if email has been entered and is valid
	if (!isset($_POST['email']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
		$errors['email'] = 'Please enter a valid email address';
	}
	// Check if email has been entered and is valid
	if (!isset($_POST['phone'])) {
		$errors['phone'] = 'Please enter phone number';
	}

	//Check if message has been entered
	if (!isset($_POST['message'])) {
		$errors['message'] = 'Please enter your message';
	}

	$errorOutput = '';

	if(!empty($errors)){

		$errorOutput .= '<div class="alert alert-danger alert-dismissible" role="alert">';
 		$errorOutput .= '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';

		$errorOutput  .= '<ul>';

		foreach ($errors as $key => $value) {
			$errorOutput .= '<li>'.$value.'</li>';
		}

		$errorOutput .= '</ul>';
		$errorOutput .= '</div>';

		echo $errorOutput;
		die();
	}



	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$from = $email;
	$to = 'desk.n2d@gmail.com';  // please change this email id
	$subject = 'Contact Form : Contact from Website';

	$body = "From: $name\n E-Mail: $email\n Message:\n $message";

	$headers = "From: ".$from;


	//send the email
	$result = '';
	if (mail ($to, $subject, $body, $headers)) {
		
		$result .= "Thank you for contacting us, we'll get back you shortly. Please wail for our response.";


		echo $result;
		die();
	}
	header("refresh:2;../index.html.");

	echo $result;
