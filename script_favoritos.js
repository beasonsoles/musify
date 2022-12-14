/* Para mostrar las canciones que hayan sido añadidas a favoritos */
let lista_canciones = document.querySelectorAll(".cancion");
let contador_favoritos = localStorage.getItem("contador_favoritos");

//-------------------------------ARREGLAR---------------------------------
setInterval(function() {
    for (let i = 1; i <= contador_favoritos; i++) {
        if ((titulo_anadido = localStorage.getItem("titulo"+i.toString())) != "" && (autor_anadido = localStorage.getItem("autor"+i.toString())) != "") {
            lista_canciones.forEach(function(cancion) {
                var titulo_cancion = cancion.querySelector(".descripcion").querySelector(".titulo").innerHTML;
                var autor_cancion = cancion.querySelector(".descripcion").querySelector(".autor").innerHTML;
                var foto_favoritos = localStorage.getItem(titulo_cancion);
                if (titulo_cancion == titulo_anadido && autor_cancion == autor_anadido && foto_favoritos == "images/favorito_relleno.png") {
                    cancion.style.display = "block";
                } else if (foto_favoritos == "images/favorito.png") {
                    cancion.style.display = "none";
                }
            });
        }
    }
}, 1);
