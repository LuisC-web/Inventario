import validando from '../helpers/validando';

var vemail = document.getElementById('email');
var vpassword = document.getElementById('password');
var boton = document.getElementById('submit');

function ObtenerDatos(e) {
  e.preventDefault();
  let gpassword = vpassword.value;
  let gemail = vemail.value;
  if (ValidarUsuario(gemail, gpassword)) {
    window.location.href = 'PaginaPrincipalAdm.html';
    alert('Bienvenido página uno');
  }

  if (ValidarUsuario(gemail, gpassword)) {
    alert('Por favor Ingrese su correo y su contraseña');
  }

  if (validando(gemail, gpassword) == true) return;
  alert(validando(gemail, gpassword));
}

/*Verifica que los datos ingresados por el usuario no esten vacios 
si los campos estan vaciòs retorna una variable booleana = true*/

let ejemploUsur = 'a@';
let ejempoPassword = '123';
/* Verifica si el usuario y la constraseña existen el la base de datos
 se debe desarrolla la consulta a la base de datos a traves del desarrollo Back-End 
 retorna true si el usuario esta registrado*/

function ValidarUsuario(usuario, constraseña) {
  if (usuario === '') return false;
  if (constraseña === '') return false;
  return true;
}

//SE escucha primero que la página está cargada correctamente
document.addEventListener('DOMContentLoaded', (e) => {
  boton.addEventListener('click', ObtenerDatos(e));
});

/*HAY MUCHOS ERRORES DE MALAS PRÁCTICAS QUE SE DEJARON USAR DESDE LA VERSIÓN EMACSCRIPT 6
 COMO ES EL USO DE VAR. Se usa let o const. 
 Segundo no estás evitando la propagación de eventos que es importante para evitar inesperados en la aplicación.
 
 EL nombramiento de variable del HTML no se escriben en minúsculas se escriben con la siguient notación 
$BENVIARDATOS
Signo dolar+ABREVIACIÓN DEL ELEMENTO + NOMBRE DEL ID O LO QUE HACE EL ELEMENTO Y todo en mayúscula

Para mejorar las prácticas con condicionales se dejan los errores de primeros para al final poder realizar ejecutar la instrucción correcta. Y así evitamos un if/else
*/
