let form = document.getElementById("cuenta_form");

if (user_name = getCookie("username")) {
    document.form.user_name.value = user_name;
}

if (pswd = getCookie("password")) {
    document.form.pswd.value = pswd;
}

if (nombre = getCookie("name")) {
    document.form.name.value = nombre;
}

if (surname1 = getCookie("surname1")) {
    document.form.surname1.value = surname1;
}

if (surname2 = getCookie("surname2")) {
    document.form.surname2.value = surname2;
}

if (email = getCookie("email")) {
    document.form.user_email.value = email;
}

if (birthdate = getCookie("birthdate")) {
    document.form.birthdate.value = birthdate;
}

form.addEventListener("submit", function(e) {
    e.preventDefault();
    // asegurarse de que los nuevos valores que intenta guardar el usuario son correctos
    new_password = document.getElementById("pswd").value;
    new_email = document.getElementById("user_email").value;
    // guardar el resto de inputs
    new_user_name = document.getElementById("user_name").value;
    new_name = document.getElementById("name").value;
    new_surname1 = document.getElementById("surname1").value;
    new_surname2 = document.getElementById("surname2").value;
    new_birthdate = document.getElementById("birthdate").value;
    try {
        if (checkPassword(new_password) && checkEmail(new_email)) {
            deleteCookies(user_name, pswd, nombre, surname1, surname2, email, birthdate);
            setCookieaccount(new_user_name, new_password, new_name, new_surname1, new_surname2, new_email, new_birthdate);
            alert("Los cambios han sido guardados");
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
}

function checkEmail(email) {
    var pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (pattern.test(email)){
        return true;
    } else {
        alert("Introduca una email con el formato nombre@dominio.extensión");
    }
}

/* Funciones para las cookies */
function setCookieaccount(user_name, pswd, name, surname1, surname2, user_email, birthdate) {
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

function deleteCookies(user_name, pswd, name, surname1, surname2, user_email, birthdate) {
    document.cookie = "username=" + user_name + "expires=" + new Date(0).toUTCString();
    document.cookie = "password=" + pswd + "expires=" + new Date(0).toUTCString();
    document.cookie = "name=" + name + "expires=" + new Date(0).toUTCString();
    document.cookie = "surname1=" + surname1 + "expires=" + new Date(0).toUTCString(); 
    document.cookie = "surname2=" + surname2 + "expires=" + new Date(0).toUTCString(); 
    document.cookie =  "email=" + user_email + "expires=" + new Date(0).toUTCString(); 
    document.cookie = "birthdate=" + birthdate + "expires=" + new Date(0).toUTCString();
}