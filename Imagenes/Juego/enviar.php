<?php
$nombre = $_POST['nombre'];
$correo = filter_var($_POST['correo'], FILTER_VALIDATE_EMAIL);
$telefono = filter_var($_POST['telefono'], FILTER_SANITIZE_NUMBER_INT);
$mensaje = $_POST['mensaje'];

$destinatario = 'maximiliano.paz@colegioalamos.edu.mx'; // Reemplaza con tu correo electrónico
$asunto = 'Nuevo mensaje del formulario de contacto';

$contenido = "Nombre: $nombre\n";
$contenido .= "Correo electrónico: $correo\n";
$contenido .= "Teléfono: $telefono\n";
$contenido .= "Mensaje: $mensaje\n";

$headers = 'From: tu_correo_electronico@example.com' . "\r\n" .
    'Reply-To: tu_correo_electronico@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($destinatario, $asunto, $contenido, $headers);
?>
