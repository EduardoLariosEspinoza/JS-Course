document.addEventListener('DOMContentLoaded', function() {

  const email = {
    email: '',
    emailcc: '',
    asunto: '',
    mensaje: ''
  }

  const inputEmail = document.querySelector('#email');
  const inputEmailCc = document.querySelector('#emailcc');
  const inputAsunto = document.querySelector('#asunto');
  const inputMensaje = document.querySelector('#mensaje');
  const formulario = document.querySelector('#formulario');
  const btnSubmit = document.querySelector('#formulario button[type="submit"]'); // Boton con el tipo submit
  const btnReset = document.querySelector('#formulario button[type="reset"]');
  const spinner = document.querySelector('#spinner');

  /* inputEmail.addEventListener('blur', function(e) {
    console.log(e.target.value); // value se usa para ver el valor que hay dentro de un input, value pertenece al DOM de Js, no a Js, se puede colocar como atributo en un
        // input para dar un valor inicial, por ejemplo: <input class="bg-gray-100 border shadow p-3 w-full" value="Texto" id="email" type="email">
  }); */

  inputEmail.addEventListener('blur', validar); // La funcion se coloca sin parentesis ya que si se ponen se llama a la funcion, si no los ponemos se llama a la funcion hasta que suceda el evento
  inputEmailCc.addEventListener('blur', validar);
  inputAsunto.addEventListener('blur', validar);
  inputMensaje.addEventListener('blur', validar);
  formulario.addEventListener('submit', enviarEmail);

  btnReset.addEventListener('click', function(e) {
    e.preventDefault(); // La accion por default del boton reset es reiniciar los valores del formulario

    resetFormulario();
  });

  function enviarEmail(e) {
    e.preventDefault();

    spinner.classList.remove('hidden');
    spinner.classList.add('flex');

    setTimeout(() => {
      spinner.classList.add('hidden');
      spinner.classList.remove('flex');

      resetFormulario();

      const alertaExito = document.createElement('P');
      alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');
      alertaExito.textContent = 'Formulario enviado';
      formulario.appendChild(alertaExito);

      setTimeout(() => {
        alertaExito.remove();
      }, 3500);

    }, 3000);
  }

  function validar(e) {

    // trim elimina los espacios en blanco en una cadena, para que no cuente a un espacio como un caracter
    if (e.target.id !== 'emailcc') {

      if (e.target.value.trim() === '') {

        mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
        email[e.target.id] = ''
        comprobarEmail();
        return; // Si entra al if se retorna la funcion y no continua
      }
    }


    if (!validarEmail(e.target.value) && e.target.id === 'email') {
      mostrarAlerta(`Este no es un email valido`, e.target.parentElement);
      email[e.target.id] = ''
      comprobarEmail();
      return;
    }


    if (e.target.id === 'emailcc' && e.target.value !== '') {
      if (!validarEmail(e.target.value)) {
        mostrarAlerta(`Este no es un email valido`, e.target.parentElement);
        email[e.target.id] = 'No hay correo valido';
        comprobarEmail();
        return;
      }
    }

    email[e.target.id] = e.target.value.trim().toLowerCase(); // Ej. email['asunto'] = 'Solicito permiso de modificacion'
    //console.log(email.emailcc);



    limpiarAlerta(e.target.parentElement); // Limpiar porque si se llega hasta aqui es porque el dato es correcto
    comprobarEmail();

  }

  // El valor 'referencia' manda el elemento padre de donde nos encontramos
  function mostrarAlerta(mensaje, referencia) {
    limpiarAlerta(referencia); // Limpiar alerta para mostrar otra porque de nuevo no hay datos correctos, para que no hayan muchas alertas y solo 1

    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');

    referencia.appendChild(error);
  }

  function limpiarAlerta(referencia) {
    const alerta = referencia.querySelector('.bg-red-600'); // Dentro del elemento referenciua busca un elemento con esa clase
    if (alerta) {
      alerta.remove();
    }
  }

  function validarEmail(email) {
    // Funcion regular para saber si el valor es un email o no
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
    const resultado = regex.test(email);
    return resultado;
  }

  // Comprobar si el boton de enviar ya se puede habilitar
  function comprobarEmail() {

    if (email.email === '' || email.asunto === '' || email.mensaje === '') {
      btnSubmit.classList.add("opacity-50");
      btnSubmit.disabled = true;
      return;
    }

    if (email.emailcc !== '' && !validarEmail(email.emailcc)) {
      btnSubmit.classList.add("opacity-50");
      btnSubmit.disabled = true;
      return;
    }

    btnSubmit.classList.remove("opacity-50");
    btnSubmit.disabled = false;
  }

  function resetFormulario() {
    email.email = '';
    email.emailcc = '';
    email.asunto = '';
    email.mensaje = '';

    formulario.reset();
    comprobarEmail();
  }

}); // Lo que se haga dentro de esta estructura se realizara hasta el final del codigo, que es hasta que todo el HTML ya se cargo