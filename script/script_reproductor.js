let volumen = document.getElementById("volumen");
let track = document.getElementById("track");
let progreso = document.getElementById("progreso");
let circulo_progreso  = document.getElementById("circulo_progreso");
let play = document.getElementById("play");
let imagen_play = document.getElementById("imagen_play");
let siguiente = document.getElementById("siguiente");
let anterior = document.getElementById("anterior");
let info_titulo_cancion = document.getElementById("info_titulo_cancion");
let info_artista_cancion = document.getElementById("info_artista_cancion");
let caratula_cancion = document.getElementById("caratula_cancion");
let botones_reproducir = document.querySelectorAll(".boton_reproducir");
let track_actual = 0;
let song, duracion;
let audio = new Audio();
let playing = false;
let songs = [];
let canciones_disponibles = document.querySelectorAll(".cancion, .cancion_resultado, .cancion_alternativa, .cancion_escuchada");


/* Para rellenar el json con las canciones que aparecen en la pantalla y guardar en una lista */
canciones_disponibles.forEach(function(cancion) {
    let song_json = {
        "info_titulo_cancion": "",
        "info_artista_cancion": "",
        "url": "",
        "caratula_cancion": ""
    }
    if (cancion.style.display != "none") {
        if ((titulo = cancion.querySelector(".titulo")) == null) {titulo = cancion.querySelector(".titulo_cancion_playlist");}
        song_json.info_titulo_cancion = titulo.innerHTML;
        if ((autor = cancion.querySelector(".autor")) == null) {autor = cancion.querySelector(".autor_cancion_playlist");}
        song_json.info_artista_cancion = autor.innerHTML;
        var audio_source = cancion.querySelector(".reproductor").querySelector(".audio").firstElementChild.src;
        song_json.url = "audio/"+audio_source.split("audio/")[1];
        var caratula_source = cancion.querySelector(".musica").src;
        song_json.caratula_cancion = "images/"+caratula_source.split("images/")[1]; 
        songs.push(song_json);
    }
});

//setInterval(function() {
    
//}, 10); 

/*if (audio != undefined) {

    debugger;
    
}*/


/*Para mostrar los datos de la canción cuando se clica en el botón de reproducir*/
botones_reproducir.forEach(function(boton) {
    boton.addEventListener("click", function() {
        var caratula_cancion_clicada = boton.parentElement.parentElement.querySelector(".musica").src;
        for (var i = 0; i < songs.length; i++) {
            if (songs[i].caratula_cancion == "images/"+caratula_cancion_clicada.split("images/")[1]) {
                track_actual = i;
            }
        }
        song = songs[track_actual];
        audio.src = song.url;
        info_titulo_cancion.textContent = song.info_titulo_cancion;
        info_artista_cancion.textContent = song.info_artista_cancion;
        caratula_cancion.src = song.caratula_cancion;
        audio.play();

        /* Para actualizar la barra de progreso de la canción */
        audio.addEventListener("timeupdate", function() {
            tiempo_actual = audio.currentTime;
            porcentaje = Math.round((tiempo_actual * 100) / duracion);
            progreso.style.width = porcentaje + "%";
            circulo_progreso.style.left = porcentaje + "%";
        });

        /* Obtener la duración de la canción */
        audio.addEventListener("loadedmetadata", function () {
            duracion = this.duration;
        });

        /* Para cambiar la imagen del botón de play dependiendo de si la canción está reproduciéndose o está parada */
        audio.addEventListener("pause", function () {
            imagen_play.src = "images/play.png";
            playing = false;
        });

        audio.addEventListener("play", function () {
            imagen_play.src = "images/pause.png";
            playing = true;
        });

        /* Para parar o reproducir la canción */
        play.addEventListener("click", function () {
            if (playing) {
                audio.pause();
            } else { audio.play();}
        });


        /* Para cambiar a la siguiente canción */
        siguiente.addEventListener("click", function() {
            track_actual++;
            track_actual = track_actual % (songs.length);
            song = songs[track_actual];
            audio.src = song.url;
            audio.onloadeddata = function() {
            updateInfo();
            }
            console.log(song.info_titulo_cancion);
            console.log("track"+track_actual);
        });

        /* Para ir a la canción anterior */
        anterior.addEventListener("click", function() {
            track_actual--;
            if (track_actual == -1) { 
                (songs.length - 1);
            } else { 
                track_actual = track_actual;
            };
            //track_actual = (track_actual == -1 ? (songs.length - 1) : track_actual);
            song = songs[track_actual];
            audio.src = song.url;
            audio.onloadeddata = function() {
            updateInfo();
            }
        });


        function updateInfo() {
            info_titulo_cancion.textContent = song.info_titulo_cancion;
            info_artista_cancion.textContent = song.info_artista_cancion;
            caratula_cancion.src = song.caratula_cancion;
            caratula_cancion.onload = function() {
                audio.play();
            }
        }

        /* Función para controlar el volumen */
        volumen.oninput = (e) =>{
            const vol = e.target.value;
            audio.volume = vol;
        }
    });
});

//window.addEventListener("load", init());




