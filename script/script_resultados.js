let canciones = document.querySelectorAll(".cancion_resultado");
let canciones_alternativas = document.querySelectorAll(".cancion_alternativa");
let images = document.querySelectorAll(".me_gusta");
let titulo_buscado = localStorage.getItem("titulo_busqueda");
let imagen_fuente = "images/favorito.png";
if ((contador_favoritos = localStorage.getItem("contador_favoritos")) == undefined) {
    contador_favoritos = 0;
}
if ((contador_maximo_favoritos = localStorage.getItem("contador_maximo_favoritos")) == undefined) {
    contador_maximo_favoritos = 0;
}

/* Para mostrar la canción que se ha buscado */
if (titulo_buscado != null) {
    canciones.forEach(function(cancion) {
        titulo = cancion.querySelector(".descripcion").querySelector(".titulo");
        if (titulo.innerHTML == titulo_buscado) {
            cancion.style.display = "block";
        }
    });
}


/* Para asegurarse de que la canción buscada no aparece en la sección de canciones alternativas*/
canciones_alternativas.forEach(function(alternativa) {
    titulo = alternativa.querySelector(".descripcion").querySelector(".titulo");
    if (titulo.innerHTML == titulo_buscado) {
        alternativa.style.display = "none";
    }
});


/* Para añadir o quitar una canción de favoritos */
images.forEach(function(image) {
    // el usuario clica en el corazón
    image.addEventListener("click", function() {
        titulo = image.parentElement.parentElement.parentElement.querySelector(".descripcion").querySelector(".titulo").innerHTML;
        autor = image.parentElement.parentElement.parentElement.querySelector(".descripcion").querySelector(".autor").innerHTML;
        // si no estaba añadida a favoritos
        if (image.src.match("images/favorito.png")) {
            contador_favoritos++;
            contador_maximo_favoritos++;
            imagen_fuente = "images/favorito_relleno.png";
            localStorage.setItem("contador_favoritos", contador_favoritos);
            localStorage.setItem("contador_maximo_favoritos", contador_maximo_favoritos);
            localStorage.setItem("titulo"+contador_favoritos.toString(), titulo); 
            localStorage.setItem("autor"+contador_favoritos.toString(), autor);
            localStorage.setItem(titulo, imagen_fuente);
        // si estaba añadida a favoritos
        } else {
            // quitar de favoritos
            imagen_fuente = "images/favorito.png";
            for (var i = 0; i < contador_maximo_favoritos; i++) {
                if (localStorage.getItem("titulo"+(i+1).toString()) == titulo && 
                    localStorage.getItem("autor" +(i+1).toString()) == autor) {
                        contador_favoritos--;
                        localStorage.removeItem("titulo"+(i+1).toString());
                        localStorage.removeItem("autor"+(i+1).toString());
                        localStorage.removeItem(titulo);
                        localStorage.setItem(titulo, imagen_fuente);
                        localStorage.setItem("contador_favoritos", contador_favoritos);
                        return;
                }
            }
        }
        
    });
});

/* Para actualizar la imagen de las canciones que se han añadido a favoritos*/
setInterval(function() {
    images.forEach(function(image) {
        titulo = image.parentElement.parentElement.parentElement.querySelector(".descripcion").querySelector(".titulo").innerHTML;
        if ((source = localStorage.getItem(titulo)) != undefined) {
            image.src = source;
        } else {image.src = "images/favorito.png";}
    });
}, 1);
