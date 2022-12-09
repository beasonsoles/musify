let titulos_base_datos = ["Moscow mule", "Demasiadas mujeres", "Bohemian rhapsody", "Waiting for love", "Sucker for pain", 
"More than you know", "Kitt y los coches del pasado", "Boulevard of broken dreams", "Viva la vida", "Lagrimas de amor"];

/* Activar click si el usuario quiere subir una foto para la playlist */
let image = document.getElementById("subir_foto");
let form = document.getElementById("crear_playlist");
if ((contador_playlists = localStorage.getItem("contador_playlists")) == undefined) {
    contador_playlists = 0;
}

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
            localStorage.setItem("titulo_cancion", cancion_buscada.value);
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

/* Función para resetear los valores para crear una playlist */
function resetear() {
    var text1 = document.getElementById("confirmacion1");
    var text2 = document.getElementById("confirmacion2");
    text1.classList.remove("mostrar");
    text1.classList.add("texto1");
    text2.classList.remove("mostrar");
    text2.classList.add("texto2");
}

/* Guardar la playlist creada */
let enviar = document.getElementById("enviar");

enviar.addEventListener("click", function(e) {
    e.preventDefault();
    contador_playlists++;
    localStorage.setItem("contador_playlists", contador_playlists);
    localStorage.setItem("foto_playlist"+contador_playlists.toString(), document.getElementById("subir_foto").files[0].name);
    localStorage.setItem("nombre_playlist"+contador_playlists.toString(), document.getElementById("nombre").value);
    localStorage.setItem("cancion_playlist"+contador_playlists.toString(), cancion_buscada.value);
    alert("¡Tu playlist ha sido creada! Accede a la biblioteca para verla");
    resetear();
});