const contenedorPadre = document.getElementById("situaciones");
const imagenEscenaDiv = document.getElementById("imagenEscena");
const botonA = document.getElementById("opcionA");
const imagenA = document.getElementById("imagenA");
const imagenEscena = document.getElementById("imagenEscena");
const siguienteImg = document.getElementById("siguienteImg");
const botonB = document.getElementById("opcionB");

var nuevaImg = "";
var numMax = "";
var situacionNumID = 1;
var escenaNumero = 1; // Inicializa con la primera escena
var escenaActual = "1";
var opcion = "a";

// Función para generar la URL de la imagen de fondo
function obtenerUrlImagen(indice) {
  return `url(./elementos/materiales/s${indice}.png)`;
}

// Función para cambiar la imagen al pasar el ratón sobre el elemento
function cambiarImagenAlEntrar() {
  const clicado = this.dataset.clicado === "true";

  if (!clicado) {
    // Obtiene la URL original desde un atributo personalizado
    const imagenOriginal = this.style.backgroundImage;

    // Construye la nueva URL con "_on" antes de ".png"
    const nuevaImagen = imagenOriginal.replace(".png", "_on.png");

    // Establece la nueva imagen de fondo
    this.style.backgroundImage = nuevaImagen;
  }
}

// Función para restaurar la imagen original al salir del elemento
function restaurarImagenAlSalir() {
  const clicado = this.dataset.clicado === "true";

  if (!clicado) {
    // Obtiene la URL original desde un atributo personalizado
    const imagenOriginal = this.style.backgroundImage;

    // Restaura la imagen original eliminando "_on" antes de ".png"
    const imagenRestaurada = imagenOriginal.replace("_on.png", ".png");

    // Establece la imagen de fondo original
    this.style.backgroundImage = imagenRestaurada;
  }
}

// Función para cambiar la imagen al hacer clic
function cambiarImagenAlClic() {
  // Busca el div anteriormente clicado por su clase 'clicado'
  const anteriorBoton = document.querySelector(".clicado");

  //Mira si hay anteriror clicado y si el clicado no es el que ahora clicamos
  if (anteriorBoton && anteriorBoton !== this) {
    // Si hay un div anteriormente clicado y no es el mismo, restaura su imagen y clase
    const imgCambiada = anteriorBoton.style.backgroundImage.replace(
      "_on.png",
      ".png"
    );
    anteriorBoton.style.backgroundImage = imgCambiada; //cambia la imagen
    anteriorBoton.classList.remove("clicado"); //Quita la clase
    anteriorBoton.classList.add("situacion"); //Añade la clase
    anteriorBoton.dataset.clicado = "false"; //cambia el booleano clicado
  }

  // Obtiene el valor del atributo data-clicado
  const clicado = this.classList.contains("clicado");

  if (!clicado) {
    // Obtiene la URL original desde un atributo personalizado del elemento clicado
    const imagenOriginal = this.style.backgroundImage;

    // Como imagenOriginal al clicarla con el raton y
    //este al estar encima cambia la imagen no hace falta cambiar la terminacion de la url
    const nuevaImg = imagenOriginal;

    // Establece la nueva imagen de fondo y clase para el div actual
    this.style.backgroundImage = nuevaImg;

    this.classList.add("clicado"); //Cambia el nombre de la clase

    // Establece el atributo data-clicado a trues
    this.dataset.clicado = "true";
  } else {
    // Si ya estaba clicado, restaura la imagen y clase original
    const imgCambiada = this.style.backgroundImage.replace("_on.png", ".png");
    this.style.backgroundImage = imgCambiada;
    this.classList.remove("clicado");
    this.classList.add("situacion");

    // Establece el atributo data-clicado a false
    this.dataset.clicado = "false";
  }

  // Actualiza el contenido de algún elemento con el ID 'texto' (deberías tener este elemento en tu HTML)
  // texto.innerHTML = this.classList.contains('clicado') ? 'Clicado' : 'No Clicado';
}

// crear div de Situaciones según la cantidad que haya
function agregarSituacion(num) {
  // Bucle para crear y agregar los divs
  for (let i = 0; i < num; i++) {
    if (i > 0) {
      // Crea un nuevo elemento div
      const nuevoDiv = document.createElement("div");

      // Agrega una clase al nuevo div (opcional, pero útil para estilos)
      nuevoDiv.classList.add("situacion");
      nuevoDiv.id = situacionNumID;
      situacionNumID++;

      // Genera la URL de la imagen de fondo según algún patrón
      const urlImagen = obtenerUrlImagen(i);

      // Agrega imagen de fondo
      nuevoDiv.style.backgroundImage = urlImagen;

      // Establece el atributo data-clicado a false
      nuevoDiv.dataset.clicado = "false";

      // Agrega eventos para cambiar y restaurar la imagen al pasar el ratón
      nuevoDiv.addEventListener("mouseenter", cambiarImagenAlEntrar);
      nuevoDiv.addEventListener("mouseleave", restaurarImagenAlSalir);

      // Agrega evento para cambiar la imagen al hacer clic

      nuevoDiv.addEventListener("click", cambiarImagenAlClic);
      nuevoDiv.addEventListener("click", clicEnNumeroEscena);

      // Agrega el nuevo div al contenedor padre
      contenedorPadre.appendChild(nuevoDiv);
    }
  }
}

// Función para cargar la primera imagen de la escena actual
function cargarPrimeraImagen(escena) {
  escenaNumero = 0;
  const urlImagen = `./elementos/escena${escena}/s${escena}_0${escenaNumero}.jpg`;
  imagenEscenaDiv.style.backgroundImage = `url(${urlImagen})`;
  //texto.innerHTML= escena+" "+escenaNumero+urlImagen;
}
function numeroMax(escena) {
  switch (escena + opcion) {
    case "1a":
      numMax = 6;
      break;
    case "1b":
      numMax = 8;
      break;
    case "2a":
      numMax = 3;
      break;
    case "2b":
      numMax = 2;
      break;
    case "3a":
      numMax = 9;
      break;
    case "3b":
      numMax = 10;
      break;
    case "4a":
      numMax = 9;
      break;
    case "4b":
      numMax = 6;
      break;
    case "5a":
      numMax = 9;
      break;
    case "5b":
      numMax = 8;
      break;
    case "6a":
      numMax = 7;
      break;
    case "7a":
      numMax = 6;
      break;
    case "8a":
      numMax = 3;
      break;
    case "9a":
      numMax = 6;
    case "6b":
      numMax = 8;
      break;
    case "7b":
      numMax = 5;
      break;
    case "8b":
      numMax = 6;
      break;
    case "9b":
      numMax = 7;
      break;
    default:
      numMax = 9;
      break;
  }
}
// Función para cambiar a la siguiente imagen de la escena actual
function clickSiguienteIMG(escena, op) {
  numeroMax(escenaActual);

  if (escenaNumero < numMax) {
    escenaNumero++;

    const urlImagen = `./elementos/escena${escena}/s${escena}${op}${escenaNumero}.jpg`;

    imagenEscenaDiv.style.backgroundImage = `url(${urlImagen})`;
  } else {
    escenaNumero = 1;

    mostrar();
    cargarPrimeraImagen(escenaActual);
  }
}
function clickAnteriorIMG(escena, op) {
  if (escenaNumero > 1) {
    escenaNumero--;
    const urlImagen = `./elementos/escena${escena}/s${escena}${op}${escenaNumero}.jpg`;
    if (urlImagen) {
      imagenEscenaDiv.style.backgroundImage = `url(${urlImagen})`;
    }
  }
}
// Función para manejar el clic en un número de escena
function clicEnNumeroEscena() {
  escenaActual = this.id;
  mostrar();
  cargarPrimeraImagen(escenaActual);
}
function ocultar() {
  botonA.style.display = "none";
  botonB.style.display = "none";
  imagenA.style.display = "none";
  siguienteImg.style.display = "block";
}
function mostrar() {
  botonA.style.display = "block";
  botonB.style.display = "block";
  imagenA.style.display = "block";
  siguienteImg.style.display = "none";
}
// Ejecuta tus funciones cuando el DOM esté listo
document.addEventListener(
  "DOMContentLoaded",
  agregarSituacion(numeroDeCarpetasJS)
);
siguienteImg.addEventListener("click", function () {
  // Llama a la función clickSiguienteIMG con los parámetros deseados
  clickSiguienteIMG(escenaActual, opcion);
});

botonA.addEventListener("click", function () {
  // Llama a la función clickSiguienteIMG con los parámetros deseados
  opcion = "a";
  ocultar();
  clickSiguienteIMG(escenaActual, opcion);
});
botonB.addEventListener("click", function () {
  opcion = "b";
  // Llama a la función clickSiguienteIMG con los parámetros deseados
  ocultar();
  clickSiguienteIMG(escenaActual, opcion);
});

window.onload = cargarPrimeraImagen(escenaActual);
