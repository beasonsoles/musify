# interfaces-de-usuario-practica-2
Interfaces de Usuario - Práctica 2
UC3M 2022

--> usar Firefox como navegador <--

El html que hay que abrir en el navegador es "index.html". En esta página se puede iniciar sesión o registrarse. El resto de funcionalidades están restringidas hasta que el usuario se registra o inicia sesión.
- Si se pulsa en "registrarse", aparece la página correspondiente a "sign_up_form.html". Si los datos introducidos son correctos, la página es redirigida a "log_in_form.html".
- Al pulsar "iniciar sesión", se abre el html "log_in_form.html". Tras iniciar sesión, se procede a abrir "sesion_iniciada.html" o home. Dentro de esta página, se puede:
- Acceder a la biblioteca de playlists ("biblioteca.html").
- Acceder a las canciones favoritas del usuario ("favoritos.html").
- Acceder a la home de nuevo ("sesion_iniciada.html").
- Crear una playlist ("crear_playlist.html") que se puede ver en "biblioteca.html" una vez creada y en el perfil del usuario.
- Acceder a la cuenta del usuario ("cuenta.html"). Esta página muestra los datos introducidos al registrarse y permite cambiarlos.
- Acceder al perfil del usuario ("perfil.html"), donde se pueden ver los artistas más escuchados, las canciones más escuchadas, las
canciones que le gustan, las playlists creadas por el usuario, y el listado de otros usuarios que se están siguiendo. Al pulsar en cualquiera de los artistas, se abre ("artista.html"). La página es la misma para todos los autores por simplicidad. Al pulsar en cualquiera de los usuarios seguidos, también se abre una única página ("otro_perfil.html") para todos.
- Cerrar sesión. Esta opción devuelve al usuario a "index.html".

Estas tres últimas funciones se muestran en un pop-up que aparece al clicar en la foto de perfil.

IMPORTANTE: Para reproducir las canciones, se puede pulsar en el play del audio que aparece en la carátula al hacer hover, o se puede pulsar en la carátula. Esta segunda opcion muestra el panel de control de la canción en el pie de página.

El buscador muestra la canción buscada en la página "resultados.html" junto con otras recomendaciones y permite darle al like para guardar esas canciones como favoritas. 

IMPORTANTE: Solo una canción se guarda en favoritos. Añadir otra canción rescribe la anterior canción. Lo mismo occurre con las playlists.

IMPORTANTE: Para buscar una canción en el buscador, se debe escribir la primera letra del título con mayúscula y el resto en minúscula y sin tildes. Se puede elegir entre las canciones: "Moscow mule", "Demasiadas mujeres", "Bohemian rhapsody", "Waiting for love", "Sucker for pain", 
"More than you know", "Kitt y los coches del pasado", "Boulevard of broken dreams", "Viva la vida" y "Lagrimas de amor".

IMPORTANTE: El método usado para guardar esta información son las cookies. A la hora de abrir los archivos html, Firefox es mejor opción que Chrome porque las cookies no funcionan en la segunda opción. Por eso se recomienda usar Firefox como navegador. 

Por último, al pulsar en una playlist de la biblioteca (creada por el usuario), se muestra la canción que ha sido añadida junto con dos canciones que están en la playlist de manera predeterminada ("Grenade" y "Anti-Hero"). Estas canciones, como todas las de los htmls, se pueden reproducir. 