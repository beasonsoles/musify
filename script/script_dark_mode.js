let interruptor = document.getElementById("interruptor_modo_oscuro");

interruptor.addEventListener("change", function (e) {
    var texts = document.querySelectorAll(".subtitulo, .autor, .titulo, .nombre_playlist, .nombre_usuario");
    var menu = document.getElementById("menu_container");
    var menu_contents = document.querySelectorAll("#home, #biblioteca, #crear, #favorito, #ajustes");
    var menu_images = document.querySelectorAll("#home_icono, #biblioteca_icono, #crear_icono, #favorito_icono, #ajustes_icono");

    if (e.target.checked) {
        // cambiar al tema oscuro
        texts.forEach(function (text) {text.style.color = "white";});
        document.body.style.background = "rgb(43, 43, 43)";
        menu.style.background = "rgb(28, 27, 27)";
        menu_contents.forEach(function(option) {option.style.color = "white";});
        menu_images.forEach(function(image) {image.style.filter = "invert(100%)";});
    } else {
        // cambiar al tema claro
        texts.forEach(function (text) {text.style.color = "black";});
        document.body.style.background = "rgb(31, 66, 222)";
        menu.style.background = "rgb(67, 102, 255)";
        menu_contents.forEach(function(option) {option.style.color = "black";});
        menu_images.forEach(function(image) {image.style.filter = "invert(0%)";});
    }
});
