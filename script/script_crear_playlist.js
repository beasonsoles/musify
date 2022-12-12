let titulos_base_datos = ["Moscow mule", "Demasiadas mujeres", "Bohemian rhapsody", "Waiting for love", "Sucker for pain", 
"More than you know", "Kitt y los coches del pasado", "Boulevard of broken dreams", "Viva la vida", "Lagrimas de amor"];
let foto_seleccionada = 0; 
let cancion_buscada = document.getElementById("cancion_playlist");
let boton_anadir = document.getElementById("boton_anadir_cancion");
let image = document.getElementById("subir_foto");
let form = document.getElementById("crear_playlist");
if ((contador_playlists = localStorage.getItem("contador_playlists")) == undefined) {
    contador_playlists = 0;
}
//-------------FINISH+------------- dictionary?????
for (var i = 1; i <= contador_playlists; i++) {
    if ((contador_canciones = localStorage.getItem("contador_canciones")) == undefined) {
        contador_canciones = 0;
    }
}


/* Mostrar un mensaje cuando el usuario sube una foto para la playlist */
image.addEventListener("change", function(e) {
    var text = document.getElementById("confirmacion1");
    foto_seleccionada = e.currentTarget.files.length;
    if (foto_seleccionada != 0) {
        text.classList.toggle("mostrar");
    }
});

/* Para asegurarse de que la cancion que se intenta añadir existe y no está ya en la playlist */
boton_anadir.addEventListener("click", function(e) {
    e.preventDefault();
    var text2 = document.getElementById("confirmacion2");
    for (var i=0; i < titulos_base_datos.length; i++) {
        // si la canción existe... 
        if (cancion_buscada.value == titulos_base_datos[i]) {
            for (var j=1; j <= contador_canciones; j++) {
                if (localStorage.getItem("cancion_playlist"+i.toString()+"_"+j.toString()) == cancion_buscada.value) {
                    alert("La canción '"+cancion_buscada.value+"' ya está en la playlist");
                    return;
                }
            }
            // y no está ya en la playlist... 
            contador_canciones++;
            localStorage.setItem("contador_canciones", contador_canciones);
            // mostar un mensaje al usuario indicando que se ha añadido
            text2.classList.toggle("mostrar");
            // y añadir la canción
            localStorage.setItem("cancion_playlist"+contador_playlists.toString()+"_"+contador_canciones.toString(), cancion_buscada.value);
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
form.addEventListener("submit", function(e) {
    nombre_playlist = document.getElementById("nombre").value;
    e.preventDefault();
    // evitar que la misma playlist se cree dos veces
    for (var i = 1; i <= contador_playlists; i++) { 
        if (localStorage.getItem("nombre_playlist"+i.toString()) == nombre_playlist) {
            alert("Ya existe una playlist con el nombre "+nombre_playlist);
            return;
        }
    }
    if (foto_seleccionada == 0) {
        alert("No has añadido una foto para la playlist");
        return;
    }
    contador_playlists++;
    localStorage.setItem("contador_playlists", contador_playlists);
    localStorage.setItem("foto_playlist"+contador_playlists.toString(), image.files[0].name);
    localStorage.setItem("nombre_playlist"+contador_playlists.toString(), nombre_playlist);
    // añadir varias canciones a la playlist
    alert("¡Tu playlist ha sido creada! Accede a la biblioteca para verla");
    resetear();
});