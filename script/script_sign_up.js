let form = document.getElementById("sign_up_form");
let users = [];

form.addEventListener("submit", function(e) {
    e.preventDefault();
    password = document.getElementById("pswd");
    email = document.getElementById("user_email");
    debugger;
    try {
        if (checkPassword(password.value) && checkEmail(email.value)) {
            found = checkCookie($("#user_name").val(), $("#pswd").val(), $("#name").val(), $("#surname1").val(), $("#surname2").val(), $("#user_email").val(), $("#birthdate").val());
            if (found) {
                alert("Ya existe una cuenta asociada a la cuenta " + email.value);
            } else {
                window.open("log_in_form.html", "_self");
            }
        }
    } catch (error) {
        e.preventDefault();
    }
});

function checkPassword(password) {
    var pattern = /[0-9a-z]{8,}/;
    if (pattern.test(password)) {
        return true;
    } else {
        if(password.length < 8) {
            alert("Introduca una contraseña con un mínimo de 8 caracteres");
        } else {
            alert("Introduzca una contraseña con las letras a-z y los números 0-9");
        }
    }
    return false;
}

function checkEmail(email) {
    var pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (pattern.test(email)){
        return true;
    } else {
        alert("Introduca una email con el formato nombre@dominio.extensión");
    }
    return false;
}

/* Funciones para las cookies */
function setCookie(user_name, pswd, name, surname1, surname2, user_email, birthdate) {
    document.cookie = "username=" + user_name; document.cookie = "password=" + pswd; 
    document.cookie = "name=" + name; document.cookie = "surname1=" + surname1; 
    document.cookie = "surname2=" + surname2 ; document.cookie =  "email=" + user_email; 
    document.cookie = "birthdate=" + birthdate;
}
  
function getCookie(field_name) {
    let value = field_name + "=";
    let ca = document.cookie.split(';'); /* lista que guarda los campos de la cookie */
    for(let i = 0; i < ca.length; i++) { 
        let c = ca[i].trim();
        if (c.indexOf(value) == 0) { /* el valor ha sido encontrado */
            return c.substring(value.length, c.length); /* el valor de la cookie es devuelto */
        }
    }
    return "";
}

function checkCookie(user_name, pswd, name, surname1, surname2, user_email, birthdate) {
    if ((email = getCookie("email")) != "") {
        return true;
    } else {
        setCookie(user_name, pswd, name, surname1, surname2, user_email, birthdate);

    }
    return false;
}