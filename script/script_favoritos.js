/* Para mostrar las canciones que hayan sido añadidas a favoritos */
let lista_canciones = document.querySelectorAll(".cancion");
let contador_favoritos = localStorage.getItem("contador_favoritos");
let lista_titulos = [];
for (var i = 0; i < lista_canciones.length; i++) {
    var titulo_cancion = lista_canciones[i].querySelector(".descripcion").querySelector(".titulo").innerHTML;
    lista_titulos.push(titulo_cancion);
}

setInterval(function() {
    for (var i = 0; i < lista_titulos.length; i++) {
        var foto_favoritos = localStorage.getItem(lista_titulos[i]);
        if (foto_favoritos == "images/favorito_relleno.png") {
            lista_canciones.forEach(function(cancion) {
                var titulo_cancion = cancion.querySelector(".descripcion").querySelector(".titulo").innerHTML;
                if (titulo_cancion == lista_titulos[i]) {
                    cancion.style.display = "block";
                }
            });
            
        } else {
            lista_canciones.forEach(function(cancion) {
                var titulo_cancion = cancion.querySelector(".descripcion").querySelector(".titulo").innerHTML;
                if (titulo_cancion == lista_titulos[i]) {
                    cancion.style.display = "none";
                }
            });
        }
    }
}, 1);
