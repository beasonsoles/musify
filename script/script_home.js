/* Para avisar al usuario que debe iniciar sesión para acceder a las funciones del menu */
let home = document.getElementById("opcion1");
let biblioteca = document.getElementById("opcion2");
let playlist = document.getElementById("opcion3");
let favoritos = document.getElementById("opcion4");
let ajustes = document.getElementById("opcion5");


home.addEventListener("click", function() {
    window.open("home.html", "_self");  //pulsar en home mantiene al usuario en la página principal
});

biblioteca.addEventListener("click", function() {
    alert("Inicia sesión o regístrate para acceder a tus playlists");
});

playlist.addEventListener("click", function() {
    alert("Inicia sesión o regístrate para poder crear playlists");
});

favoritos.addEventListener("click", function() {
    alert("Inicia sesión o regístrate para acceder a tus favoritos");
});

ajustes.addEventListener("click", function() {
  alert("Inicia sesión o regístrate para acceder a los ajustes");
});

/* Para crear la cuenta atrás de cada una de las canciones */

// cuenta atrás termina el 7 de septiembre a las 23:59:00
var fechaCuentaAtras = new Date("Nov 7, 2022 23:59:00").getTime(); 

// cuenta atrás se actualiza cada segundo
var cuentaAtras = setInterval(actualizarCuentaAtras, 1000); 
    
function actualizarCuentaAtras() {
    var hoy = new Date().getTime();
    var longitud = fechaCuentaAtras - hoy;
      
    // calcular los días, las horas, los minutos y los segundos que quedan hasta el 7 de septiembre
    var dias = Math.floor(longitud / (1000 * 60 * 60 * 24));
    var horas = Math.floor((longitud % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((longitud % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((longitud % (1000 * 60)) / 1000);
      
    var contadores = document.getElementsByClassName("contador");
    for (var i = 0; i < contadores.length; ++i) {
        contadores[i].innerHTML = dias + "d " + horas + "h " + minutos + "m " + segundos + "s";
    }

    if (longitud < 0) { 
        clearInterval(cuentaAtras);
        document.getElementById("contador").innerHTML = "¡Nuevo lanzamiento!";
    }
}