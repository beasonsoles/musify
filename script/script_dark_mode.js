let interruptor = document.getElementById("interruptor_modo_oscuro");
var header = document.getElementById("header");
var musify_texto = document.getElementById("musify_texto");
var texts = document.querySelectorAll(".subtitulo, .autor, .titulo, .nombre_playlist, .nombre_usuario");
var menu = document.getElementById("menu_container");
var menu_contents = document.querySelectorAll("#home, #biblioteca, #crear, #favorito, #ajustes");
var menu_images = document.querySelectorAll("#home_icono, #biblioteca_icono, #crear_icono, #favorito_icono, #ajustes_icono");
var main = document.getElementById("main_container");
var footer = document.getElementById("politicas");

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

    if (tema_actual == "claro") {
        musify_texto.style.color = "black";
        header.style.background = "rgb(117, 117, 117)";
        texts.forEach(function (text) {text.style.color = "black";});
        main.style.background = "rgb(224, 224, 224)";
        menu.style.background = "rgb(189, 189, 189)";
        menu_contents.forEach(function(option) {option.style.color = "black";});
        menu_images.forEach(function(image) {image.style.filter = "invert(0%)";});
        footer.style.background = "rgb(117, 117, 117)";
    } else {
        musify_texto.style.color = "white";
        header.style.background = "black";
        texts.forEach(function (text) {text.style.color = "white";});
        main.style.background = "rgb(43, 43, 43)";
        menu.style.background = "rgb(28, 27, 27)";
        menu_contents.forEach(function(option) {option.style.color = "white";});
        menu_images.forEach(function(image) {image.style.filter = "invert(100%)";});
        footer.style.background = "black";
    }
}, 1);
