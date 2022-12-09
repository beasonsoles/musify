let artistas = document.querySelectorAll(".artista");
let canciones = document.querySelectorAll("#canciones_favoritas .cancion");
let nombre_playlist_anadida = localStorage.getItem("nombre_playlist");
let foto_playlist_anadida = localStorage.getItem("foto_playlist");
let usuarios = document.querySelectorAll(".usuario");


/* Para mostrar las playlists y álbumes de un artista */
artistas.forEach(function(artista) {
    artista.addEventListener("click", function() {
        window.open("artista.html", "_self");
    });
});


/* Para mostrar las canciones que hayan sido añadidas a favoritos */

if ((titulo_anadido = getCookie("titulo")) != "" && (autor_anadido = getCookie("autor")) != "") {
    canciones.forEach(function(cancion) {
        titulo_cancion = cancion.querySelector(".descripcion").querySelector(".titulo");
        autor_cancion = cancion.querySelector(".descripcion").querySelector(".autor");
        if (titulo_cancion.innerHTML == titulo_anadido && autor_cancion.innerHTML == autor_anadido) {
            cancion.style.display = "block";
        }
    });
}


/* Para redirigir al usuario a los perfiles de los usuarios que sigue */
usuarios.forEach(function(usuario) {
    usuario.addEventListener("click", function() {
        window.open("otro_perfil.html", "_self");
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