<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Situaciones</title>
    <link rel="stylesheet" href="estilo.css">
    <script src="situaciones.js" defer></script>
</head>

<body>

    <div id></div>


    <div id="cabecero"></div>
    <div id="opcionA" class="opcion" onmouseover="cambiarImagenFondo('./elementos/materiales/opa_on.png')"></div>
    <div id="opcionB" class="opcion" onmouseover="cambiarImagenFondo('./elementos/materiales/opb_on.png')"></div>
    <div id="siguienteImg"></div>


    <div id="imagenEscena">
        <div id="imagenA"></div>
    </div>

    <div id="situaciones">
<div id="botonVolver"></div>

    </div>
    <?php
    // Incluye el archivo contarCarpetas.php
    include 'contarCarpetas.php';

    // Define la ruta del directorio
    $rutaDirectorio = './elementos'; // Cambia la ruta según tu directorio

    // Llama a la función contarCarpetas
    $numeroDeCarpetas = contarCarpetas($rutaDirectorio);

    // echo "<h1>Número de carpetas: $numeroDeCarpetas</h1>";
    ?>
    <script>
        var numeroDeCarpetasJS = <?php echo $numeroDeCarpetas; ?>;
        agregarSituacion(numeroDeCarpetasJS);

        function cambiarImagenFondo(nuevaImagen) {
            // Obtener el div de destino
            var divDestino = document.getElementById('imagenA');

            // Cambiar la imagen de fondo del div de destino
            divDestino.style.backgroundImage = 'url(' + nuevaImagen + ')';
        }
    </script>
</body>

</html>