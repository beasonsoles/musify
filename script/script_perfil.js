let artistas = document.querySelectorAll(".artista");
let usuarios = document.querySelectorAll(".usuario");
let canciones_mas_escuchadas = document.querySelectorAll(".cancion_escuchada");
let canciones_perfil_usuario = document.querySelectorAll(".cancion");


/* Para mostrar todas las canciones*/
canciones_mas_escuchadas.forEach(cancion => {
    cancion.style.display = "block";
});

canciones_perfil_usuario.forEach(cancion => {
    cancion.style.display = "none";
});

/* Para mostrar las playlists y álbumes de un artista */
artistas.forEach(function(artista) {
    artista.addEventListener("click", function() {
        window.open("artista.html", "_self");
        localStorage.setItem("artista_actual", artista.querySelector(".autor").innerHTML);
    });
});

/* Para redirigir al usuario a los perfiles de los usuarios que sigue */
usuarios.forEach(function(usuario) {
    usuario.addEventListener("click", function() {
        window.open("otro_perfil.html", "_self");
    });
});

