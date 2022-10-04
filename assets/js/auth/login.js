// Expresión regular para validar Email
var regExpEmail =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
// Expresión regular para validar Password
var regExpPass = /^(?=.*\d)(?=.*[!@#$%^&*_])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

// Formulario
var form = document.getElementById("form_login");
// Botón para acceder
var btnSubmit = document.getElementById("enviar")

// EventListener para iniciar sesión
btnSubmit.addEventListener('click', function(){
    validarFormulario();
});

/**
 * Función para comprobar los valores ingresados por el usuario
 */
function validarFormulario(){
    var user = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (comprobarDatosRegistrados(user, "Email") && comprobarDatosRegistrados(password, "Contraseña")) {
        if (comprobarEmail(user)){
            if (comprobarPassword(password)) {
                alert("Iniciando Sesión")
            }
        }
    }
}

/**
 * Función que ocupa expresión regular para comprobar que el texto ingresado sea un correo electrónico
 * @param email Correo a comprobar
 * @returns {boolean} Valor de retorno booleano
 */
function comprobarEmail(email){
    if (!regExpEmail.test(email)) {
        alert("Correo electrónico inválido")
        return false
    } else return true
}

/**
 * Función que ocupa expresión regular para comprobar que la contraseña ingresada cumpla con:
 * -Mínimo 6 caráteres
 * -Al menos un símbolo
 * -Letras mayúsculas y minúsculas
 * -Un número
 * @param password
 */
function comprobarPassword(password){
    if (!regExpPass.test(password)){
        alert("La contraseña no es válida debe contener: \n-Mínimo 6 caráteres\n-Al menos un símbolo(!@#$%^&*_)\n-Letras mayúsculas y minúsculas\n-Un número")
        return false
    } else return true
}

/**
 * Función para validar que se haya ingresado texto en un input de acuerdo al contexto
 * @param data Valor a comprobar
 * @returns {boolean} Valor de retorno booleano
 */
function comprobarDatosRegistrados(data, tipo){
    if (data.length == 0) {
        alert("Error, Favor de registrar: " + tipo)
        return false
    } else return true
}
