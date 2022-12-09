let interruptor = document.getElementById("interruptor_modo_oscuro");
var texts = document.querySelectorAll(".subtitulo, .autor, .titulo, .nombre_playlist, .nombre_usuario");
var menu = document.getElementById("menu_container");
var menu_contents = document.querySelectorAll("#home, #biblioteca, #crear, #favorito, #ajustes");
var menu_images = document.querySelectorAll("#home_icono, #biblioteca_icono, #crear_icono, #favorito_icono, #ajustes_icono");
var main = document.getElementById("main_container");

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
        texts.forEach(function (text) {text.style.color = "black";});
        main.style.background = "rgb(104, 142, 247)";
        menu.style.background = "rgb(67, 102, 255)";
        menu_contents.forEach(function(option) {option.style.color = "black";});
        menu_images.forEach(function(image) {image.style.filter = "invert(0%)";});
    } else {
        texts.forEach(function (text) {text.style.color = "white";});
        main.style.background = "rgb(43, 43, 43)";
        menu.style.background = "rgb(28, 27, 27)";
        menu_contents.forEach(function(option) {option.style.color = "white";});
        menu_images.forEach(function(image) {image.style.filter = "invert(100%)";});
    }
}, 1);
