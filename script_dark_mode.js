let interruptor = document.getElementById("interruptor_modo_oscuro");
var header = document.getElementById("header");
var musify_texto = document.getElementById("musify_texto");
var texts = document.querySelectorAll(".subtitulo, .autor, .titulo, .nombre_playlist, .nombre_usuario");
var menu = document.getElementById("menu_container");
var menu_contents = document.querySelectorAll("#home, #biblioteca, #crear, #favorito, #ajustes");
var menu_images = document.querySelectorAll("#home_icono, #biblioteca_icono, #crear_icono, #favorito_icono, #ajustes_icono");
var main = document.getElementById("main_container");
var footer = document.getElementById("politicas");
let boton_deslizante = document.getElementsByClassName("boton_deslizante")[0];
let circulo_deslizante = document.getElementById("circulo");


interruptor.addEventListener("change", function (e) {
    if (e.target.checked) {
        var tema = "claro";
    } else {
        var tema = "oscuro";
    }
    localStorage.setItem("tema", tema);
});

setInterval(function() {
    var tema_actual = localStorage.getItem("tema");
    // cambiar offset del botón del interruptor según el tamaño de la ventana
    var x = 0;
    if (481 < window.innerWidth && window.innerWidth < 900) { x = 19;} // tablet
    else if (window.innerWidth < 480) { x = 12;} // móvil
    else { x = 20;} // ordenador
    if (tema_actual == "claro") {
        // cambiar colores de la página
        musify_texto.style.color = "black";
        header.style.background = "rgb(117, 117, 117)";
        texts.forEach(function (text) {text.style.color = "black";});
        main.style.background = "rgb(224, 224, 224)";
        menu.style.background = "rgb(189, 189, 189)";
        menu_contents.forEach(function(option) {option.style.color = "black";});
        menu_images.forEach(function(image) {image.style.filter = "invert(0%)";});
        footer.style.background = "rgb(117, 117, 117)";
        // cambiar el estado del interruptor
        if (boton_deslizante != null && circulo_deslizante != null) {
            boton_deslizante.style.background = "rgb(78, 218, 39)";
            circulo_deslizante.style.background = "black";
            circulo_deslizante.style.transform = "translateX("+x.toString()+"px)";
        }
    } else {
        // cambiar colores de la página
        musify_texto.style.color = "white";
        header.style.background = "black";
        texts.forEach(function (text) {text.style.color = "white";});
        main.style.background = "rgb(43, 43, 43)";
        menu.style.background = "rgb(28, 27, 27)";
        menu_contents.forEach(function(option) {option.style.color = "white";});
        menu_images.forEach(function(image) {image.style.filter = "invert(100%)";});
        footer.style.background = "black";
        // cambiar el estado del interruptor
        if (boton_deslizante != null && circulo_deslizante != null) {
            boton_deslizante.style.background = "rgb(134, 140, 133)";
            circulo_deslizante.style.background = "white";
            circulo_deslizante.style.transform = "translateX(0px)";
        }
    }
}, 1);
