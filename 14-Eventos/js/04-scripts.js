const formulario = document.querySelector('#formulario');

// Submit es por mucho el evento mas utilizado en formularios
formulario.addEventListener('submit', validarFormulario); // Por defecto se le pasa el evento como parametro al momento de llamar a la funcion, por ello no se debe poner "validarFormulario(event)", sino que solo es "validarFormulario"

function validarFormulario(event) {
  event.preventDefault(); // Prevenir la accion por default como abrir un link o en este caso, enviar un formulario via post.
  // Cancela el evento si es cancelable, no afecta al resto del evento
  // El evento por default es enviar el formulario pero a veces vamos a quierer hacer cosas antes de enviarlo

  console.log("Consultando api");

  console.log(event);

  // Saber el tipo de metodo que utiliza el objetop que tenemos
  console.log(event.target.method); // post

  // Accion que va a realizar el elemento cuando se lleve a cabo el evento submit, en este caso nos manda el link al que se redirigira
  console.log(event.target.action); // http://127.0.0.1:5501/buscador
};