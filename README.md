# Interfaces de Usuario - Reproductor de música
## Interfaces de Usuario - Caso Práctico 2
#### UC3M 2022

**Se recomienda usar Chrome como navegador**

El html que hay que abrir en el navegador es "**index.html**". En esta página se puede iniciar sesión o registrarse. El resto de funcionalidades están restringidas hasta que el usuario se registra o inicia sesión
- Si se pulsa en "**registrarse**", aparece un formulario para registrarse. Si los datos introducidos son correctos, la página es redirigida al formulario para iniciar sesión
- Si el usuario ya tiene una cuenta, puede clicar directamente en "**iniciar sesión**" e introducir sus datos. Tras iniciar sesión, se procede a abrir la página de **home**. Dentro de esta página, se puede:
- Acceder a la **biblioteca de playlists**, donde se puede clicar en cada playlist para ver y ordenar las canciones que han sido añadidas
- Acceder a las **canciones favoritas** del usuario
- Acceder a la home de nuevo
- **Crear una playlist** y añadir canciones a la playlist, que se puede ver en la biblioteca y en el perfil del usuario una vez creada
- **Buscar una canción** con el buscador
- Clicar en la foto de perfil del usuario. Al hacer esto aparece un popup con botones para: 
    - **Acceder a la cuenta**, donde se muestran los datos introducidos por el usuario al registrarse y permite cambiarlos
    - **Acceder al perfil** del usuario, donde se pueden ver los **artistas más escuchados**, las **canciones más escuchadas**, las
**canciones que le gustan al usuario**, las **playlists creadas por el usuario**, y el listado de otros **usuarios a los que se está siguiendo**. Al pulsar en cualquiera de los artistas, se abre una página que muestra las canciones y los álbumes del artista. Al pulsar en cualquiera de los usuarios seguidos, se abre una página que contiene la información del perfil de ese usuario
    - **Cerrar sesión**. Esta opción devuelve al usuario a la página inicial ("index.html")

***
***En todas las páginas se puede escuchar las canciones que se muestran, pasar a la siguiente canción o volver a la anterior, subir o bajar el volumen de la canción, y añadir o quitar una canción de favoritos.***

IMPORTANTE: Para buscar una canción en el buscador, se debe **escribir el título sin tildes**. Se puede elegir entre las canciones: ***"Moscow mule", "Demasiadas mujeres", "Bohemian rhapsody", "Waiting for love", "Sucker for pain", "More than you know", "Kitt y los coches del pasado", "Boulevard of broken dreams", "Viva la vida" y "Lagrimas de amor"***.

IMPORTANTE: El método usado para guardar toda la información necesaria para la aplicación es **localStorage**.
