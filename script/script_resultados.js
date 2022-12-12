let canciones = document.querySelectorAll(".cancion");
let canciones_alternativas = document.querySelectorAll(".cancion_alternativa");
let images = document.querySelectorAll(".me_gusta");
let titulo_buscado = localStorage.getItem("titulo_busqueda");
if ((contador_favoritos = localStorage.getItem("contador_favoritos")) == undefined) {
    contador_favoritos = 0;
}

/* Para mostrar la canción que se ha buscado */
canciones.forEach(function(cancion) {
    titulo = cancion.querySelector(".descripcion").querySelector(".titulo");
    if (titulo.innerHTML == titulo_buscado) {
        cancion.style.display = "block";
    }
});

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
        titulo = image.parentElement.parentElement.parentElement.querySelector(".descripcion").querySelector(".titulo");
        autor = image.parentElement.parentElement.parentElement.querySelector(".descripcion").querySelector(".autor");
        // si no estaba añadida a favoritos
        if (image.src.match("images/favorito.png")) {
            //------------------ REVISAR
            for (var i = 0; i < contador_favoritos; i++) {
                if (localStorage.getItem("titulo"+(i+1).toString()) == titulo.innerHTML && 
                    localStorage.getItem("autor" +(i+1).toString()) == autor.innerHTML) {
                        alert("Esta canción ya está en tu lista de favoritos");
                        return;
                }
            }
            //----------------- REVISAR
            // añadir
            contador_favoritos++;
            image.src = "images/favorito_relleno.png";
            localStorage.setItem("contador_favoritos", contador_favoritos);
            localStorage.setItem("titulo"+contador_favoritos.toString(), titulo.innerHTML); 
            localStorage.setItem("autor"+contador_favoritos.toString(), autor.innerHTML);
            localStorage.setItem("megusta"+contador_favoritos.toString(), image.src);
        // si estaba añadida a favoritos
        } else {
            // quitar de favoritos
            image.src = "images/favorito.png";
            for (var i = 0; i < contador_favoritos; i++) {
                if (localStorage.getItem("titulo"+(i+1).toString()) == titulo.innerHTML && 
                    localStorage.getItem("autor" +(i+1).toString()) == autor.innerHTML) {
                        contador_favoritos--;
                        localStorage.setItem("contador_favoritos", contador_favoritos);
                        localStorage.removeItem("titulo"+(i+1).toString());
                        localStorage.removeItem("autor"+(i+1).toString());
                        return;
                }
            }
        }
        localStorage.setItem("megusta"+contador_favoritos.toString(), image.src);
    });
});
