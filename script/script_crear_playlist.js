let titulos_base_datos = ["Moscow mule", "Demasiadas mujeres", "Bohemian rhapsody", "Waiting for love", "Sucker for pain", 
"More than you know", "Kitt y los coches del pasado", "Boulevard of broken dreams", "Viva la vida", "Lagrimas de amor"]

/* Activar click si el usuario quiere subir una foto para la playlist */
let image = document.getElementById("subir_foto");
let form = document.getElementById("crear_playlist");

image.addEventListener("change", function(e) {
    var text = document.getElementById("confirmacion1");
    if (e.currentTarget.files.length != 0) {
        text.classList.toggle("mostrar");
    }
});

/* Para asegurarse de que la cancion que se intenta añadir existe */
let boton_anadir = document.getElementById("boton_anadir_cancion");
let cancion_buscada = document.getElementById("cancion_playlist");

boton_anadir.addEventListener("click", function(e) {
    e.preventDefault();
    var text2 = document.getElementById("confirmacion2");
    for (var i=0; i < titulos_base_datos.length; i++) {
        if (cancion_buscada.value == titulos_base_datos[i]) {
            text2.classList.toggle("mostrar");
            setSongCookie(cancion_buscada.value);
            return;
        }
    }
    alert("Lo sentimos. Esa cancion no está en nuestra base de datos");
});

/* Para prevenir que el usuario guarde la playlist si no pulsa guardar*/
form.addEventListener("keydown", function(e) {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
        e.preventDefault();
    }
});

/* Guardar la playlist creada */
let enviar = document.getElementById("enviar");

enviar.addEventListener("click", function(e) {
    e.preventDefault();
    setPlaylistCokie(document.getElementById("subir_foto").files[0].name, document.getElementById("nombre").value, cancion_buscada.value);
    alert("¡Tu playlist ha sido creada! Accede a la biblioteca para verla");
});

/* Resetear el mensaje de confirmación */
form.addEventListener("reset", function() {
    var text = document.getElementById("confirmacion");
    text.classList.remove("mostrar");
    text.classList.add("texto");
});

/* Función para las cookies */
function setPlaylistCokie(foto_playlist, nombre_playlist, cancion_playlist) {
    document.cookie = "foto_playlist=" + foto_playlist; document.cookie = "nombre_playlist=" + nombre_playlist;
    document.cookie = "cancion_playlist=" + cancion_playlist;
}

function setSongCookie(titulo_cancion) {
    document.cookie = "titulo_cancion=" + titulo_cancion;
}