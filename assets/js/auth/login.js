//var documentDom = document.addEventListener("DOMContentLoaded");

// Expresión regular
var validEmail =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

var form = document.getElementById("form_login");
var btnSubmit = document.getElementById("enviar")
btnSubmit.addEventListener('click', function(){
    validarFormulario();
});

function validarFormulario(){
    var user = document.getElementById("email").value;

    if(validEmail.test(user) ){
        if (user.length == 0) {
            alert("No se ha registrado el usuario");
        } else {
            var password = document.getElementById("password").value;
            if (password.length < 6) {
                alert("La clave no es válida");
            } else {
                alert("Iniciando sesión!");
            }
        }
    }else{
        alert('Email invalido');
    }
    //this.submit()
}
