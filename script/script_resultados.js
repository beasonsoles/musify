let canciones = document.querySelectorAll(".cancion");
let images = document.querySelectorAll(".me_gusta");
if ((contador_favoritos = localStorage.getItem("contador_favoritos")) == undefined) {
    contador_favoritos = 0;
}

/* Para mostrar la canción que se ha buscado */
let titulo_buscado = localStorage.getItem("titulo_busqueda");

canciones.forEach(function(cancion) {
    titulo = cancion.querySelector(".descripcion").querySelector(".titulo");
    if (titulo.innerHTML == titulo_buscado) {
        cancion.style.display = "block";
    }
});


images.forEach(function(image) {
    image.addEventListener("click", function() {
        titulo = image.parentElement.parentElement.parentElement.querySelector(".descripcion").querySelector(".titulo");
        autor = image.parentElement.parentElement.parentElement.querySelector(".descripcion").querySelector(".autor");
        if (image.src.match("images/favorito.png")) {
            for (var i = 0; i < contador_favoritos; i++) {
                if (localStorage.getItem("titulo"+(i+1).toString()) == titulo.innerHTML && 
                    localStorage.getItem("autor" +(i+1).toString()) == autor.innerHTML) {
                        alert("Esta canción ya está en tu lista de favoritos");
                        return;
                }
            }
            contador_favoritos++;
            image.src = "images/favorito_relleno.png";
            localStorage.setItem("contador_favoritos", contador_favoritos);
            localStorage.setItem("titulo"+contador_favoritos.toString(), titulo.innerHTML); 
            localStorage.setItem("autor"+contador_favoritos.toString(), autor.innerHTML);
        } else {
            image.src = "images/favorito.png";
            //images_array = Array.prototype.slice.call(images);
            //var index = 0;
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
