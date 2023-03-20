document.addEventListener('DOMContentLoaded', function() {

  const email = {
    email: '',
    asunto: '',
    mensaje: ''
  }

  const inputEmail = document.querySelector('#email');
  const inputAsunto = document.querySelector('#asunto');
  const inputMensaje = document.querySelector('#mensaje');
  const formulario = document.querySelector('#enviar-mail');

  /* inputEmail.addEventListener('blur', function(e) {
    console.log(e.target.value); // value se usa para ver el valor que hay dentro de un input, value pertenece al DOM de Js, no a Js, se puede colocar como atributo en un input para dar un valor inicial, por ejemplo: <input class="bg-gray-100 border shadow p-3 w-full" value="Texto" id="email" type="email">
  }); */

  inputEmail.addEventListener('blur', validar); // La funcion se coloca sin parentesis ya que si se ponen se llama a la funcion, si no los ponemos se llama a la funcion hasta que suceda el evento
  inputAsunto.addEventListener('blur', validar);
  inputMensaje.addEventListener('blur', validar);

  function validar(e) {

    // trim elimina los espacios en blanco en una cadena, para que no cuente a un espacio como un caracter
    if (e.target.value.trim() === '') {
      mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
      return; // Si entra al if se retorna la funcion y no continua
    }

    if (!validarEmail(e.target.value) && e.target.id === 'email') {
      mostrarAlerta(`Este no es un email valido`, e.target.parentElement);
      return;
    }

    limpiarAlerta(e.target.parentElement);

    email[e.target.id] = e.target.value.trim(); // Ej. email['asunto'] = 'Solicito permiso de modificacion'

    comprobarEmail();

  }

  // El valor 'referencia' manda el elemento padre de donde nos encontramos
  function mostrarAlerta(mensaje, referencia) {
    limpiarAlerta(referencia);

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
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
    const resultado = regex.test(email);
    return resultado;
  }

  function comprobarEmail() {
    console.log(Object.values(email).includes(''));
  }

}); // Lo que se haga dentro de esta estructura se realizara hasta el final del codigo, que es hasta que todo el HTML ya se cargo