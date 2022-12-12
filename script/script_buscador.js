let buscadores = document.querySelectorAll("#buscador", "#buscador_canciones_playlist");
let titulos = ["Moscow mule", "Demasiadas mujeres", "Bohemian rhapsody", "Waiting for love", "Sucker for pain", 
"More than you know", "Kitt y los coches del pasado", "Boulevard of broken dreams", "Viva la vida", "Lagrimas de amor"]

buscadores.forEach(function(buscador) {
    buscador.addEventListener("keyup", function(event) {
        if (event.code === "Enter" || event.code === "NumpadEnter") {
            var busqueda = buscador.value;
            for (var i=0; i < titulos.length; i++) {
                if (busqueda == titulos[i]) {
                    localStorage.setItem("titulo_busqueda", busqueda);
                    window.open("resultados.html", "_self");
                    return;
                }
            }
            alert("Lo sentimos. Esa canción no está en nuestra base de datos");
        }
    });
});