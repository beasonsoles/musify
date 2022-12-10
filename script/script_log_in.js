let form = document.getElementById("log_in_form");
let contador_usuarios = localStorage.getItem("contador_usuarios")

form.addEventListener("submit", function(e) {
    e.preventDefault();
    var email = document.getElementById("useremail");
    var password = document.getElementById("pswd");
    var username = document.getElementById("username");
    var email_found = false;
    var password_found = false;
    var username_found = false;

    for (var i = 0; i < contador_usuarios; i++) {
        if (localStorage.getItem("email_"+(i+1).toString()) == email.value) {
            email_found = true;
            return;
        }
    }

    for (var i = 0; i < contador_usuarios; i++) {
        if (localStorage.getItem("password_"+(i+1).toString()) == password.value) {
            password_found = true;
            return;
        }
    }

    for (var i = 0; i < contador_usuarios; i++) {
        if (localStorage.getItem("username_"+(i+1).toString()) == username.value) {
            username_found = true;
            return;
        }
    }

    if (!email_found) {
        alert("El email " + email.value + " no está dado de alta");
        return;
    } 
    
    if (!username_found) {
        alert("Nombre de usuario no encontrado");
        return;
    }

    if (!password_found) {
        alert("Contraseña incorrecta");
        return;
    }
    
    if (email_found && password_found && username_found) {
        window.open("sesion_iniciada.html", "_self");
    }
});

/* Funciones para las cookies */
  
/*function getCookie(field_name) {
    let value = field_name + "=";
    let ca = document.cookie.split(";"); /* lista que guarda los campos de la cookie 
    for(let i = 0; i < ca.length; i++) { 
        let c = ca[i].trim();
        if (c.indexOf(value) == 0) { /* el valor ha sido encontrado 
            return c.substring(value.length, c.length); /* el valor de la cookie es devuelto 
        }
    }
    return "";
}

function checkCookie(field, value) {
    let cookie_value = getCookie(field);
    if (value == cookie_value) {
        return true;
    }
    return false;
}*/
