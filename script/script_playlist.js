let canciones_base_datos = document.querySelectorAll(".cancion");
let contador_playlists = localStorage.getItem("contador_playlists");
let botones_borrar_cancion = document.querySelectorAll(".borrar_cancion");
let boton_borrar_playlist = document.getElementById("borrar_playlist");
let playlist_actual_index = 0;
let playlist_actual = localStorage.getItem("playlist_actual");
let nombre_lista_de_reproduccion = document.getElementById("nombre_lista_de_reproduccion");
let playlist_text = "";
let playlist = "";

/* Para mostrar el nombre de la playlist como un título */
nombre_lista_de_reproduccion.innerHTML = playlist_actual;

/* Para mostrar las canciones añadidas a la playlist */
for (var i = 1; i <= contador_playlists; i++) {
    playlist_text = localStorage.getItem("playlist"+i.toString());
    playlist = JSON.parse(playlist_text);
    playlist_actual_index = i;
    if (playlist.nombre_playlist == playlist_actual) {
        for (var j = 0; j < playlist.canciones_playlist.length; j++) {
            canciones_base_datos.forEach(function(cancion) {
                titulo_cancion = cancion.querySelector(".descripcion").querySelector(".titulo_cancion_playlist");
                if (titulo_cancion.innerHTML == playlist.canciones_playlist[j]) {
                    cancion.style.display = "block";
                }
            });
        }
        break;
    }
}

/* Para encargarse de las funciones del drag and drop */
canciones_base_datos.forEach(function(cancion) {
    cancion.addEventListener("dragstart", function(e) {
        cancion.style.opacity = "0.4";
        dragged_element = cancion;
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text", cancion.innerHTML);
    });

    cancion.addEventListener("dragover", function(e) {
        e.preventDefault(); // evitar que las canciones vuelvan a su sitio original
    });

    cancion.addEventListener("dragend", function(e) {
        cancion.style.opacity = "1";
    });

    cancion.addEventListener("drop", function(e) {
        e.stopPropagation();
        if (dragged_element != cancion) {
            dragged_element.innerHTML = cancion.innerHTML; // guardar el html antes de arrastrar
            cancion.innerHTML = e.dataTransfer.getData("text");
        }
    });
});

/* Para borrar una canción */
botones_borrar_cancion.forEach(function(boton) {
    boton.addEventListener("click", function() {
        if (confirm("Estás seguro de que deseas borrar la canción?")) {
            cancion = boton.parentElement;
            cancion.style.display = "none";
            // encontrar la canción que hay que borrar en la lista de canciones de localStorage
            var titulo = cancion.querySelector(".descripcion").querySelector(".titulo_cancion_playlist").innerHTML;
            var index = playlist.canciones_playlist.indexOf(titulo);
            playlist.canciones_playlist.splice(index, 1);
            localStorage.setItem("playlist"+playlist_actual_index.toString(), JSON.stringify(playlist));
        }
    });
});

/* Para borrar la playlist */
boton_borrar_playlist.addEventListener("click", function() {
    if (confirm("Estás seguro de que deseas borrar la playlist?")) {
        contador_playlists--;
        localStorage.setItem("contador_playlists", contador_playlists);
        localStorage.removeItem("playlist"+playlist_actual_index.toString());
        window.open("biblioteca.html", "_self");
    }
});