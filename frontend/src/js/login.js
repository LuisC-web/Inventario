
var vemail = document.getElementById("email");
var vpassword = document.getElementById("password");
var boton = document.getElementById("submit");

function ObtenerDatos() {
    var gemail = vemail.value;
    var gpassword = vpassword.value;
    if (ValidarUsuario(gemail, gpassword)) {
        window.location.href = "PaginaPrincipalAdm.html"

        alert("Bienvenido pagna uno")
    }

    if (ValidacionCamposVacios(gemail, gpassword)) {
        alert("Por favor Ingrese su correo y su contraseña")
    }

    if (ValidarUsuario(gemail, gpassword) == false && ValidacionCamposVacios(gemail, gpassword) == false) {
        alert("Correo o contraseña errada")

    }

}

/*Verifica que los datos ingresados por el usuario no esten vacios 
si los campos estan vaciòs retorna una variable booleana = true*/

function ValidacionCamposVacios(email, password) {
    var validacionCamposVacios = false;
    if (email == "" || password == "") {
        validacionCamposVacios = true;
    }
    return validacionCamposVacios;
}


var ejemploUsur = "a@"
var ejempoPassword = "123"
/* Verifica si el usuario y la constraseña existen el la base de datos
 se debe desarrolla la consulta a la base de datos a traves del desarrollo Back-End 
 retorna true si el usuario esta registrado*/

function ValidarUsuario(usuario, constraseña) {
    var validacionUsuario = false;
    if (usuario === ejemploUsur & constraseña === ejempoPassword) {
        validacionUsuario = true;
    }
    return validacionUsuario
}


//Ejecuta la funciòn 
boton.addEventListener("click", ObtenerDatos)





