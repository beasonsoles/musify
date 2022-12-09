let contador_playlists = localStorage.getItem("contador_playlists");
/* Para crear una playlist */
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

/* Para mostrar las playlists que hayan sido creadas por el usuario */
for (let i = 1; i <= contador_playlists; i++) {
    let nombre_playlist_anadida = localStorage.getItem("nombre_playlist"+i.toString());
    let foto_playlist_anadida = localStorage.getItem("foto_playlist"+i.toString());
    if (nombre_playlist_anadida != "" && foto_playlist_anadida != "") {
        add_playlist("images/" + foto_playlist_anadida, nombre_playlist_anadida);
    }
}
    

let listas_de_reproduccion = document.querySelectorAll(".playlist");

/* Para mostrar las canciones dentro de una playlist */
listas_de_reproduccion.forEach(function(lista) {
    lista.addEventListener("click", function() {
        window.open("playlist.html", "_self");
    });
});