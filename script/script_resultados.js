let canciones = document.querySelectorAll(".cancion");
let images = document.querySelectorAll(".me_gusta");

/* Para mostrar la canción que se ha buscado */
let titulo_buscado = getCookie("titulo_busqueda");

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
            image.src = "images/favorito_relleno.png";
            if (!checkCookie("titulo", titulo.innerText) && !checkCookie("autor", autor.innerText)) {
                addFavorito(titulo.innerText, autor.innerText);
            }
        } else {
            image.src = "images/favorito.png";
            // borrar la cookie
            deleteCookie("titulo", titulo.innerText);
            deleteCookie("autor", autor.innerText);
        }
    });
});

function addFavorito(titulo, autor) {
    document.cookie = "titulo=" + titulo; document.cookie = "autor=" + autor;
    // crear un json para guardar las canciones favoritas
}

function getCookie(field_name) {
    let value = field_name + "=";
    let ca = document.cookie.split(';'); /* lista que guarda los campos de la cookie */
    for(let i = 0; i < ca.length; i++) { 
        let c = ca[i].trim();
        if (c.indexOf(value) == 0) { /* el valor ha sido encontrado */
            return c.substring(value.length, c.length); /* el valor de la cookie es devuelto */
        }
    }
    return "";
}

function checkCookie(field, value) {
    let cookie_value = getCookie(field);
    if (value == cookie_value) {
        return true;
    }
    return false;
}

function deleteCookie(field, value) {
    document.cookie = field + "=" + value + "expires=" + new Date(0).toUTCString();
}