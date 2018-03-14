<?php

header('Content-type: application/json');

$errors = '';



	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);

	$from_asunto = $request->asunto;
	$from_nombre = $request->nombre;
	$from_telefono = $request->telefono;
	$from_tipo = $request->tipo;
	$from_id = $request->id;
	$from_correo = $request->correo;
	$from_motivo = $request->motivo;



    $email_from = "pqrs@econtainerscolombia.com";
		$email_to = "pqrs@econtainerscolombia.com";
		$email_subject = "Nuevo mensaje PQRS (Página Web) ";



		$email_message = "Nuevo mensaje:\n\n";
		$email_message .= "Asunto: " . $from_asunto . "\n\n";
		$email_message .= "Nombre: " . $from_nombre . "\n\n";
		$email_message .= "Telefono: " . $from_telefono . "\n\n";
    $email_message .= "Correo: " . $from_correo . "\n\n";
		$email_message .= "Identificacion: " . $from_tipo .": " . $from_id . " \n\n";
		$email_message .= "Mensaje: " . $from_motivo . "\n\n";



	//Ahora se envía el e-mail usando la función mail() de PHP
		$headers = 'From: '.$email_from."\r\n".
		'Reply-To: '.$email_from."\r\n" .
		'X-Mailer: PHP/' . phpversion();
		@mail($email_to, $email_subject, $email_message, $headers);





?>
