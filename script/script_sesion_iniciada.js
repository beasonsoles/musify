/* Para mostrar el panel de control en el pie de página */
let caratulas = document.querySelectorAll(".caratula");
let players = document.querySelectorAll(".reproductor");
let reproduciendo = [];
let audio = "";

players.forEach(function(player) {
    player.addEventListener("click", function() { 
        player.parentElement.click();
    });
});

caratulas.forEach(function(caratula) {
    caratula.addEventListener("click", function() {
        reprod_caratula = caratula.querySelector(".reproductor");
        if (reproduciendo.length > 1) {
            // parar reproductor grande
            reproduciendo[0].pause();
            // parar reproductor pequeño
            reproduciendo[1].pause();
            // vaciar la lista de reproducción
            reproduciendo = [];
        }
        // clon del reproductor pequeño
        reproductor = reprod_caratula.cloneNode(true);
        reprod_caratula.style.visibility = "hidden";
        document.getElementById("panel_audio").appendChild(reproductor);
        reproductor.style.position = "fixed";
        reproductor.style.width = "200%";
        reproductor.style.background = "rgb(23, 22, 22)";
        audio = reproductor.querySelector(".audio");
        audio.style.width = "50%";
        audio.style.height = "70%";
        // reproductor pequeño
        audio_original = reprod_caratula.querySelector(".audio");
        // iniciar los dos reproductores a la vez
        audio.play();
        audio_original.play();
        reproduciendo.push(audio);
        reproduciendo.push(audio_original);
    });
});

caratulas.forEach(function(caratula) {
    caratula.addEventListener("mouseover", function() {
        reprod_caratula = caratula.querySelector(".reproductor");
        if (reprod_caratula.style.visibility == "hidden") {reprod_caratula.style.visibility = "visible";}
    });
});

setInterval(() => {
    document.getElementById("main_container").style.height = window.innerHeight;
}, 1);

/* Para poner una canción después de la otra */
/*if (audio != "") {
    audio.addEventListener("ended", function() {

    });
}*/