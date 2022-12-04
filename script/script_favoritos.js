/* Para mostrar las canciones que hayan sido añadidas a favoritos */
let canciones = document.querySelectorAll(".cancion");

if ((titulo_anadido = getCookie("titulo")) != "" && (autor_anadido = getCookie("autor")) != "") {
    canciones.forEach(function(cancion) {
        titulo_cancion = cancion.querySelector(".descripcion").querySelector(".titulo");
        autor_cancion = cancion.querySelector(".descripcion").querySelector(".autor");
        if (titulo_cancion.innerHTML == titulo_anadido && autor_cancion.innerHTML == autor_anadido) {
            cancion.style.display = "block";
        }
    });
}



/* Función para las cookies*/
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