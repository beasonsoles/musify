let canciones_playlist = document.querySelectorAll(".cancion");
let botones_borrar_cancion = document.querySelectorAll(".borrar_cancion");
let boton_borrar_playlist = document.getElementById("borrar_playlist");

/* Para mostrar las canciones añadidas a la playlist */
if ((titulo_cancion_buscada = localStorage.getItem("titulo_cancion")) != "") {
    canciones_playlist.forEach(function(cancion) {
        titulo_cancion = cancion.querySelector(".descripcion").querySelector(".titulo");
        autor_cancion = cancion.querySelector(".descripcion").querySelector(".autor");
        if (titulo_cancion.innerHTML == titulo_cancion_buscada) {
            cancion.style.display = "block";
        }
    });
}

/* Para encargarse de las funciones del drag and drop */
canciones_playlist.forEach(function(cancion) {
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

/* Para borrar una cancion */
botones_borrar_cancion.forEach(function(boton) {
    boton.addEventListener("click", function() {
        if (confirm("Estás seguro de que deseas borrar la canción?")) {
            cancion = boton.parentElement;
            cancion.style.display = "none";
        }
    });
});

/* Para borrar la playlist */
boton_borrar_playlist.addEventListener("click", function() {
    if (confirm("Estás seguro de que deseas borrar la playlist?")) {
        document.getElementById("playlist").remove();
        localStorage.removeItem("nombre_playlist", localStorage.getItem("nombre_playlist")); //REMOVE ITEM SOLO TIENE LA KEY (ARREGLAR)
        localStorage.removeItem("foto_playlist", localStorage.getItem("foto_playlist")); //REMOVE ITEM SOLO TIENE LA KEY (ARREGLAR)
        window.open("biblioteca.html", "_self");
    }
});