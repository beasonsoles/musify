/* Para mostrar las canciones que hayan sido añadidas a favoritos */
let canciones = document.querySelectorAll(".cancion");
let contador_favoritos = localStorage.getItem("contador_favoritos");

for (let i = 1; i <= contador_favoritos; i++) {
    if ((titulo_anadido = localStorage.getItem("titulo"+i.toString())) != "" && (autor_anadido = localStorage.getItem("autor"+i.toString())) != "") {
        canciones.forEach(function(cancion) {
            titulo_cancion = cancion.querySelector(".descripcion").querySelector(".titulo");
            autor_cancion = cancion.querySelector(".descripcion").querySelector(".autor");
            if (titulo_cancion.innerHTML == titulo_anadido && autor_cancion.innerHTML == autor_anadido) {
                cancion.style.display = "block";
            }
        });
    }
}