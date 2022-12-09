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
            if (!checkCookie("titulo", titulo.innerText) && !checkCookie("autor", autor.innerText)) {
                contador_favoritos++;
                image.src = "images/favorito_relleno.png";
                localStorage.setItem("contador_favoritos", contador_favoritos);
                localStorage.setItem("titulo"+contador_favoritos.toString(), titulo.innerText); 
                localStorage.setItem("autor"+contador_favoritos.toString(), autor.innerText);
            }
        } else {
            image.src = "images/favorito.png";
            // borrar la cookie
            localStorage.removeItem("titulo", titulo.innerText); //REMOVE ITEM SOLO TIENE LA KEY (ARREGLAR)
            deleteCookie("autor", autor.innerText);
        }
    });
});
