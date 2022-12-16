/* Para mostrar todas las canciones*/
let canciones_home = document.querySelectorAll(".cancion");

canciones_home.forEach(cancion => {
    cancion.style.display = "block";
});

