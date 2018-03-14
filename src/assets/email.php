<?php

header('Content-type: application/json');

$errors = '';

if(empty($errors))
{

	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);

	$from_name = $request->name;
	$from_email = $request->email;
	$from_ciudad = $request->ciudad;
	$from_celular = $request->celular;
	$from_tipo = $request->tipo;
	$from_para = $request->para;
	$from_message = $request->message;

	$comercial = '';
    $nom_comercial = '';
    $foto_comercial = '';


	if($from_tipo == 'Contenedores Refrigerados'){



    	$comercial = 'dmendez@econtainerscolombia.com';
    	$nom_comercial = 'David Mendez';
    	$foto_comercial = 'https://www.econtainerscolombia.com/info/jpg/[EC]_MailLanding_3.png';

    }

       //if($from_tipo == 'Bodegas'){



    	//$comercial = 'avila@econtainerscolombia.com';
    	//$nom_comercial = 'Alejandra Vila';
        //$foto_comercial = 'https://www.econtainerscolombia.com/info/jpg/[EC]_MailLanding_1.png';

  // }


	if($from_tipo == 'Proyectos Especiales o Arquitectónicos' || $from_tipo == 'Oficinas' || $from_tipo == 'Salas de Ventas' || $from_tipo == 'Salas de Ventas' ){


		if($from_ciudad  == 'Medellín' || $from_ciudad  == 'Cartagena' || $from_ciudad  == 'Santa Marta' || $from_ciudad  == 'Maicao' || $from_ciudad  == 'Riohacha' || $from_ciudad  == 'Valledupar' || $from_ciudad  == 'Río negro' || $from_ciudad  == 'Antioquia' | $from_ciudad  == 'Barranquilla'){


				$comercial = 'pvalencia@econtainerscolombia.com';
				$nom_comercial = 'Paula Valencia';
				$foto_comercial = 'https://www.econtainerscolombia.com/info/jpg/[EC]_MailLanding_7.png';

		}

		if($from_ciudad  == 'Manizales' || $from_ciudad  == 'Pereira' || $from_ciudad  == 'Armenia' || $from_ciudad  == 'Cali' || $from_ciudad  == 'Jumbo' || $from_ciudad  == 'Pasto'){



				$comercial = 'pvalencia@econtainerscolombia.com';
				$nom_comercial = 'Paula Valencia';
				$foto_comercial = 'https://www.econtainerscolombia.com/info/jpg/[EC]_MailLanding_7.png';


		}

    }






        	if($from_tipo == 'Oficinas' || $from_tipo == 'Proyectos Especiales o Arquitectonicos' || $from_tipo == 'Bodegas' || $from_tipo == 'Salas de Ventas' ){

    	if($from_ciudad  == 'Bogotá' || $from_ciudad  == 'Ibagué' || $from_ciudad  == 'Villavicencio' || $from_ciudad  == 'Bucaramanga'){

		$aleatorio = rand ( 1 , 5);

		if($aleatorio==1){
				$comercial = 'fcastrodelrio@econtainerscolombia.com';
				$nom_comercial = 'Ivan Castro del Rio';
				$foto_comercial = 'https://www.econtainerscolombia.com/info/jpg/[EC]_MailLanding_5.png';
			}

		if($aleatorio==2){
				$comercial = 'fvargas@econtainerscolombia.com';
				$nom_comercial = 'Frank Vargas';
				$foto_comercial = 'https://www.econtainerscolombia.com/info/jpg/[EC]_MailLanding_2.png';
			}
			if($aleatorio==3){
				$comercial = 'dmarulanda@econtainerscolombia.com';
				$nom_comercial = 'Diana Marulanda';
				$foto_comercial = 'https://www.econtainerscolombia.com/info/jpg/[EC]_MailLanding_4.png';
			}

			if($aleatorio==4){
				$comercial = 'kgarcia@econtainerscolombia.com';
				$nom_comercial = 'Karolina Garcia';
				$foto_comercial = 'https://www.econtainerscolombia.com/info/jpg/[EC]_MailLanding_6.png';
			}
			if($aleatorio==5){
				$comercial = 'dmendez@econtainerscolombia.com';
				$nom_comercial = 'David Mendez';
				$foto_comercial = 'https://www.econtainerscolombia.com/info/jpg/[EC]_MailLanding_3.png';
			}



		}

		if($from_ciudad  == 'Medellín' || $from_ciudad  == 'Cartagena' || $from_ciudad  == 'Santa Marta' || $from_ciudad  == 'Maicao' || $from_ciudad  == 'Riohacha' || $from_ciudad  == 'Valledupar' || $from_ciudad  == 'Río negro' || $from_ciudad  == 'Antioquia' | $from_ciudad  == 'Barranquilla'){




				$comercial = 'pvalencia@econtainerscolombia.com';
				$nom_comercial = 'Paula Valencia';
				$foto_comercial = 'https://www.econtainerscolombia.com/info/jpg/[EC]_MailLanding_7.png';


		}

		if($from_ciudad  == 'Manizales' || $from_ciudad  == 'Pereira' || $from_ciudad  == 'Armenia' || $from_ciudad  == 'Cali' || $from_ciudad  == 'Jumbo' || $from_ciudad  == 'Pasto'){



				$comercial = 'pvalencia@econtainerscolombia.com';
				$nom_comercial = 'Paula Valencia';
				$foto_comercial = 'https://www.econtainerscolombia.com/info/jpg/[EC]_MailLanding_7.png';


		}

    }


	//ALEATORIO BOGOTA


	//ALEATORIO OTROS
	if($from_ciudad  == 'Otros'){

		if($from_para == 'Compra' || $from_para == 'Alquiler'){

			$aleatorio = rand ( 1 , 5);

			if($aleatorio==1){
				$comercial = 'fcastrodelrio@econtainerscolombia.com';
				$nom_comercial = 'Ivan Castro del Rio';
				$foto_comercial = 'https://www.econtainerscolombia.com/info/jpg/[EC]_MailLanding_5.png';
			}
			if($aleatorio==2){
				$comercial = 'pvalencia@econtainerscolombia.com';
				$nom_comercial = 'Paula Valencia';
				$foto_comercial = 'https://www.econtainerscolombia.com/info/jpg/[EC]_MailLanding_7.png';
			}


			if($aleatorio==3){
				$comercial = 'fvargas@econtainerscolombia.com';
				$nom_comercial = 'Frank Vargas';
				$foto_comercial = 'https://www.econtainerscolombia.com/info/jpg/[EC]_MailLanding_2.png';
			}

			if($aleatorio==4){
				$comercial = 'dmarulanda@econtainerscolombia.com';
				$nom_comercial = 'Diana Marulanda';
				$foto_comercial = 'https://www.econtainerscolombia.com/info/jpg/[EC]_MailLanding_4.png';

		}
		   if($aleatorio==5){
				$comercial = 'kgarcia@econtainerscolombia.com';
				$nom_comercial = 'Karolina Garcia';
				$foto_comercial = 'https://www.econtainerscolombia.com/info/jpg/[EC]_MailLanding_6.png';

		}


		}


























		if($from_tipo == 'Proyectos Especiales o Arquitectónicos'){

			$aleatorio = rand ( 1 , 5);

			if($aleatorio==1){
				$comercial = 'fcastrodelrio@econtainerscolombia.com';
				$nom_comercial = 'Ivan Castro del Rio';
				$foto_comercial = 'https://www.econtainerscolombia.com/info/jpg/[EC]_MailLanding_5.png';
			}
			if($aleatorio==2){
				$comercial = 'dmendez@econtainerscolombia.com';
				$nom_comercial = 'David Mendez';
				$foto_comercial = 'https://www.econtainerscolombia.com/info/jpg/[EC]_MailLanding_4.png';
			}
			if($aleatorio==3){
				$comercial = 'pvalencia@econtainerscolombia.com';
				$nom_comercial = 'Paula Valencia';
				$foto_comercial = 'https://www.econtainerscolombia.com/info/jpg/[EC]_MailLanding_7.png';
			}

			if($aleatorio==4){
				$comercial = 'pvalencia@econtainerscolombia.com';
				$nom_comercial = 'Paula Valencia';
				$foto_comercial = 'https://www.econtainerscolombia.com/info/jpg/[EC]_MailLanding_7.png';

		}

		if($aleatorio==5){
				$comercial = 'dmarulanda@econtainerscolombia.com';
				$nom_comercial = 'Diana Marulanda';
				$foto_comercial = 'https://www.econtainerscolombia.com/info/jpg/[EC]_MailLanding_4.png';
			}

	        if($aleatorio==6){
				$comercial = 'kgarcia@econtainerscolombia.com';
				$nom_comercial = 'Karolina Garcia';
				$foto_comercial = 'https://www.econtainerscolombia.com/info/jpg/[EC]_MailLanding_6.png';
			}

	}
	}

	if($nombre == 'NOMBRE' || $nombre == 'Nombre'){

}else{


	if ( trim($from_name!='') || trim($from_correo!='') || trim($from_celular!='') ||  trim($from_tipo!='')){


	    $sql = <<<SQL


		INSERT INTO  `econtain_landing-2018`.`tbl_econtainers` (
		`id` ,
		`nombre` ,
		`comercial` ,
		`correo` ,
		`celular` ,
		`modalidad` ,
		`segmento` ,
		`ciudad`
		)
		VALUES (
		NULL ,  '$from_name',  '$comercial',  '$from_email',  '$from_celular',  '$from_para',  '$from_tipo',  '$from_ciudad'
		);


SQL;

$hostname = 'localhost';
    $username = 'econtain_2018';
    $password = 'guirova18';
    $dbname = 'econtain_landing-2018';

    mysql_connect($hostname, $username, $password) OR DIE('Unable to connect to database! Please try again later.');
    mysql_select_db($dbname);
    mysql_query($sql);

	}

}

if ( trim($from_name!='') || trim($from_email!='') || trim($from_celular!='') ||  trim($from_para!='')){


    $email_from = "news@econtainers.com.co";
		$email_to = "avila@econtainerscolombia.com, " . $comercial ." ";
		$email_subject = "Nuevo Lead pagina web: ";



		$email_message = "Nuevo contacto:\n\n";
		$email_message .= "Nombre: " . $from_name . "\n\n";
		$email_message .= "Celular: " . $from_celular . "\n\n";
		$email_message .= "Ciudad: " . $from_ciudad . "\n\n";
		$email_message .= "Email: " . $from_email . "\n\n";
		$email_message .= "Segmento: " . $from_tipo . "\n\n";
		$email_message .= "Modalidad: " . $from_para . "\n\n";
		$email_message .= "Mensaje: " . $from_message . "\n\n";
		$email_message .= "Comercial asignado: " . $comercial . "\n\n";



	//Ahora se envía el e-mail usando la función mail() de PHP
		$headers = 'From: '.$email_from."\r\n".
		'Reply-To: '.$email_from."\r\n" .
		'X-Mailer: PHP/' . phpversion();
		@mail($email_to, $email_subject, $email_message, $headers);


		// Correo enviado a lciente
    	        $email_from2 = "E-Containers Colombia news@econtainerscolombia.com";
		$email_to2 =  $from_email;
		$email_subject2 = "Pronto estaremos en contacto";



		/*$email_message2 = "Pronto nuestro asesor\n\n";
		$email_message2 .= $foto_comercial . "\n";
		$email_message2 .= "se comunicara y le brindara la información necesaria.\n\n";*/

		$email_message2 .= "<head><title></title></head><body><table><tr><td><img src='". $foto_comercial ."'></td></tr></table></body></html>";

		// Ahora se envía el e-mail usando la función mail() de PHP
		$headers2 = 'MIME-Version: 1.0' . "\r\n";
		$headers2.= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
		$headers2.= 'From: '.$email_from2."\r\n".
		'Reply-To: '.$email_from2."\r\n" .
		'X-Mailer: PHP/' . phpversion();

		@mail($email_to2, $email_subject2, $email_message2, $headers2);





	}

}



function StripHtml( $fStringData = NULL )
{
	if( is_null( $fStringData ) && "" != $fStringData ){
		return FALSE;
	}

	$fStringData = trim( $fStringData );

	//quita tags tipo sql y html
	$fStringData = strip_tags( $fStringData );
	$fStringData = str_replace( "from", "", $fStringData );
	$fStringData = str_replace( "FROM", "", $fStringData );
	$fStringData = str_replace( "database", "", $fStringData );
	$fStringData = str_replace( "DATABASE", "", $fStringData );
	$fStringData = str_replace( "select", "", $fStringData );
	$fStringData = str_replace( "SELECT", "", $fStringData );
	$fStringData = str_replace( "delete", "", $fStringData );
	$fStringData = str_replace( "DELETE", "", $fStringData );
	$fStringData = str_replace( "update", "", $fStringData );
	$fStringData = str_replace( "UPDATE", "", $fStringData );
	$fStringData = str_replace( "table", "", $fStringData );
	$fStringData = str_replace( "TABLE", "", $fStringData );
	$fStringData = str_replace( "insert", "", $fStringData );
	$fStringData = str_replace( "INSERT", "", $fStringData );
	$fStringData = str_replace( "drop", "", $fStringData );
	$fStringData = str_replace( "DROP", "", $fStringData );
	$fStringData = str_replace( "create", "", $fStringData );
	$fStringData = str_replace( "CREATE", "", $fStringData );
	$fStringData = str_replace( "truncate", "", $fStringData );
	$fStringData = str_replace( "TRUNCATE", "", $fStringData );
	$fStringData = str_replace( "alter", "", $fStringData );
	$fStringData = str_replace( "ALTER", "", $fStringData );
	$fStringData = str_replace( "';", "", $fStringData );
	$fStringData = str_replace( "' ;", "", $fStringData );

	$fStringData = str_replace( "php", "", $fStringData );
	$fStringData = str_replace( "PHP", "", $fStringData );
	$fStringData = str_replace( "cookies", "", $fStringData );
	$fStringData = str_replace( "COOKIES", "", $fStringData );
	$fStringData = str_replace( "HTTP", "", $fStringData );
	$fStringData = str_replace( "HTTPS", "", $fStringData );
	$fStringData = rawurldecode($fStringData);

	return $fStringData;
}
?>
