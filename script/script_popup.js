let foto = document.getElementById("foto_perfil");
let cerrarSesion = document.getElementById("cerrar_sesion_text");
let cuenta = document.getElementById("cuenta_text");
let perfil = document.getElementById("perfil_text");

foto.addEventListener("click", function() {
    var popup = document.getElementById("popup_perfil");
    var contenidos_popup = document.querySelectorAll("#cuenta_text, #perfil_text, #cerrar_sesion_text");
    popup.classList.toggle("mostrar");
    contenidos_popup.forEach((opcion) => {
        opcion.classList.toggle("mostrar");
    });
});

cerrarSesion.addEventListener("click", function() {
    var response = confirm("¿Estás seguro de que deseas cerrar sesión?");
    if (response) {
        window.open("index.html", "_self");
    }
});

cuenta.addEventListener("click", function() {
    window.open("cuenta.html", "_self");
});

perfil.addEventListener("click", function() {
    window.open("perfil.html", "_self");
});