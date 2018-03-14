<?php

header('Content-type: application/json');

$errors = '';



	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);

	$from_nombre = $request->nombre;
	$from_celular = $request->celular;
	$from_correo = $request->correo;
	$from_cargo = $request->cargo;



    $email_from = "talento@econtainerscolombia.com";
		$email_to = "talento@econtainerscolombia.com";
		$email_subject = "Nuevo mensaje Talento (Página Web) ";

		$email_message = "Nuevo mensaje:\n\n";
		$email_message .= "Nombre: " . $from_nombre . "\n\n";
		$email_message .= "Celular: " . $from_celular . "\n\n";
    $email_message .= "Correo: " . $from_correo . "\n\n";
  	$email_message .= "Cargo: " . $from_cargo . " \n\n";


	//Ahora se envía el e-mail usando la función mail() de PHP
		$headers = 'From: '.$email_from."\r\n".
		'Reply-To: '.$email_from."\r\n" .
		'X-Mailer: PHP/' . phpversion();
		@mail($email_to, $email_subject, $email_message, $headers);





?>
