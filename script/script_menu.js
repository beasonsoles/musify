/* Para redirigir al usuario dependiendo de la opción que elije en el menu */
let home = document.getElementById("opcion1");
let biblioteca = document.getElementById("opcion2");
let playlist = document.getElementById("opcion3");
let favoritos = document.getElementById("opcion4");

home.addEventListener("click", function() {
    window.open("sesion_iniciada.html", "_self");
});

biblioteca.addEventListener("click", function() {
    window.open("biblioteca.html", "_self");
});

playlist.addEventListener("click", function() {
    window.open("crear_playlist.html", "_self");
});

favoritos.addEventListener("click", function() {
    window.open("favoritos.html", "_self");
});
