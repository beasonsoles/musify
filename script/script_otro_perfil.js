let artistas = document.querySelectorAll(".artista");
let usuarios = document.querySelectorAll(".usuario");

/* Para mostrar las playlists y álbumes de un artista */
artistas.forEach(function(artista) {
    artista.addEventListener("click", function() {
        window.open("artista.html", "_self");
    });
});

/* Para redirigir al usuario a los perfiles de los usuarios que sigue */
usuarios.forEach(function(usuario) {
    usuario.addEventListener("click", function() {
        window.open("otro_perfil.html", "_self");
    });
});