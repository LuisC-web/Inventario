import validando from '../helpers/validando.js';
const d = document;
const $BUTTONSUBMIT = d.getElementById('buttonSubmit');
const $INPUTPASSWORD = d.getElementById('inputPassword');
const $EMAIL = d.getElementById('email');
const buttonSubmit = (event) => {
  event.preventDefault();
  if ($EMAIL.value === '') return alert('DEBE LLENAR EL CORREO');
  if ($INPUTPASSWORD.value === '') return alert('DEBE TENER CONTRASEÑA');
  if (validando($EMAIL.value, $INPUTPASSWORD.value) === true)
    return console.info('Llamando api');
  return alert(validando($EMAIL.value, $INPUTPASSWORD.value));
};
d.addEventListener('DOMContentLoaded', () => {
  $BUTTONSUBMIT.addEventListener('click', (e) => buttonSubmit(e));
});
