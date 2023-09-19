<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre = $_POST["nombre"];
  $telefono=$_POST["telefono"];
  $email = $_POST["email"];
  $mensaje = $_POST["mensaje"];

  $destinatario = "mariamontero97@hotmail.com";
  $asunto = "Nuevo mensaje";

  $contenido = "Nombre: $nombre\n";
  $telefono= "Telefono: $telefono\n";
  $contenido .= "Correo electrónico: $email\n";
  $contenido .= "Mensaje:\n$mensaje\n";

  if (mail($destinatario, $asunto, $mensaje)) {
    $response = array("success" => true);
} else {
    $response = array("success" => false);
}

header("Content-Type: application/json");
echo json_encode($response);
}
?>
