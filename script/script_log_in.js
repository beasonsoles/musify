let form = document.getElementById("log_in_form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    email = document.getElementById("user_email");
    password = document.getElementById("pswd");
    username = document.getElementById("user_name");
    email_found = checkCookie("email", email.value);
    password_found = checkCookie("password", password.value);
    username_found = checkCookie("username", username.value);
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
  
function getCookie(field_name) {
    let value = field_name + "=";
    let ca = document.cookie.split(";"); /* lista que guarda los campos de la cookie */
    for(let i = 0; i < ca.length; i++) { 
        let c = ca[i].trim();
        if (c.indexOf(value) == 0) { /* el valor ha sido encontrado */
            return c.substring(value.length, c.length); /* el valor de la cookie es devuelto */
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
}
