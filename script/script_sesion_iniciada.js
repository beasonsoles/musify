/* Para mostrar el panel de control en el pie de página */
let caratulas = document.querySelectorAll(".caratula");
let players = document.querySelectorAll(".reproductor");
let reproduciendo = [];

players.forEach(function(player) {
    player.addEventListener("click", function() { 
        player.parentElement.click();
    });
});

caratulas.forEach(function(caratula) {
    caratula.addEventListener("click", function() {
        reprod_caratula = caratula.querySelector(".reproductor");
        if (reproduciendo.length > 0) {
            reproduciendo[0].pause();
            reproduciendo.pop();
        }
        reproductor = reprod_caratula.cloneNode(true);
        reprod_caratula.style.visibility = "hidden";
        document.getElementById("panel_audio").appendChild(reproductor);
        reproductor.style.position = "fixed";
        reproductor.style.width = "200%";
        reproductor.style.background = "rgb(23, 22, 22)";
        audio = reproductor.querySelector(".audio");
        audio.style.width = "50%";
        audio.style.height = "70%";
        audio.play();
        reproduciendo.push(audio);
    });
});

caratulas.forEach(function(caratula) {
    caratula.addEventListener("mouseover", function() {
        reprod_caratula = caratula.querySelector(".reproductor");
        if (reprod_caratula.style.visibility == "hidden") {reprod_caratula.style.visibility = "visible";}
    });
});

//audio.addEventListener("ended", playSound); --> para poner una canción después de la otra