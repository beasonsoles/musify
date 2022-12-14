let artista_actual = localStorage.getItem("artista_actual");
let artistas = document.querySelectorAll(".autor");

/* Cambiar los títulos para que muestren el nombre del artista en el que se ha clicado */
document.getElementById("nombre_artista").innerHTML = "Canciones de "+artista_actual;
document.getElementById("nombre_albumes_artista").innerHTML = "Álbumes de "+artista_actual;

/* Mostrar solo las canciones del artista en el que se ha clicado */
for (var i=0; i < artistas.length; i++) {
    var cancion_artista = artistas[i].parentElement.parentElement;
    if (artistas[i].innerHTML.includes(artista_actual)) {
        cancion_artista.style.display = "block";
    } else {cancion_artista.style.display = "none";}
}