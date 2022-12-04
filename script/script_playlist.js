let canciones_playlist = document.querySelectorAll(".cancion");
let botones_borrar_cancion = document.querySelectorAll(".borrar_cancion");
let boton_borrar_playlist = document.getElementById("borrar_playlist");

/* Para mostrar las canciones añadidas a la playlist */
if ((titulo_cancion_buscada = getCookie("titulo_cancion")) != "") {
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
        deleteCookie("nombre_playlist", getCookie("nombre_playlist"));
        deleteCookie("foto_playlist", getCookie("foto_playlist"));
        window.open("biblioteca.html", "_self");
    }
});

/* Funciones para las cookies */
function getCookie(field_name) {
    let value = field_name + "=";
    let ca = document.cookie.split(';'); /* lista que guarda los campos de la cookie */
    for(let i = 0; i < ca.length; i++) { 
        let c = ca[i].trim();
        if (c.indexOf(value) == 0) { /* el valor ha sido encontrado */
            return c.substring(value.length, c.length); /* el valor de la cookie es devuelto */
        }
    }
    return "";
}

function deleteCookie(field, value) {
    document.cookie = field + "=" + value + "expires=" + new Date(0).toUTCString();
}