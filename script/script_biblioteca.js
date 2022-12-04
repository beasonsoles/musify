/* Para mostrar las playlists que hayan sido creadas por el usuario */
let nombre_playlist_anadida = getCookie("nombre_playlist");
let foto_playlist_anadida = getCookie("foto_playlist");

if (nombre_playlist_anadida != "" && !nombre_playlist_anadida.includes("expires") 
    && foto_playlist_anadida != "" && !foto_playlist_anadida.includes("expires")) {
    add_playlist("images/" + foto_playlist_anadida, nombre_playlist_anadida);
}

function add_playlist(foto_playlist_anadida, nombre_playlist_anadida) {
    // crear los elementos de la canción
    playlist = document.createElement("div");
    foto = document.createElement("img");
    descripcion = document.createElement("div");
    nombre = document.createElement("h3");
    // añadir clases a cada uno de los elementos
    playlist.classList.add("playlist");
    foto.classList.add("musica");
    descripcion.classList.add("descripcion");
    nombre.classList.add("nombre_playlist");
    // crear la estructura usando appendChild
    document.getElementById("tus_playlists").appendChild(playlist);
    playlist.appendChild(foto);
    playlist.appendChild(descripcion);
    descripcion.appendChild(nombre);
    // dar valor a los elementos
    foto.src = foto_playlist_anadida;
    nombre.innerHTML = nombre_playlist_anadida;
}

let listas_de_reproduccion = document.querySelectorAll(".playlist");

/* Para mostrar las canciones dentro de una playlist */
listas_de_reproduccion.forEach(function(lista) {
    lista.addEventListener("click", function() {
        window.open("playlist.html", "_self");
    });
});


/* Función para las cookies*/
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