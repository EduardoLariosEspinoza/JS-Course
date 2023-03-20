// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

// Event Listeners
eventListeners();

function eventListeners() {

  // Cuando se agrega un tweet
  formulario.addEventListener("submit", agregarTweet);

  // Cuando el documento esta listo
  document.addEventListener("DOMContentLoaded", () => {

    // Intenta obtener el primer valor pero si da null, entonces dale el valor de un array vacio
    tweets = JSON.parse(localStorage.getItem("Tweet")) || [];

    crearHTML();
  })
}

//Funciones
function agregarTweet(e) {
  e.preventDefault();

  // TextArea
  const tweet = document.querySelector("#tweet").value;

  if (!tweet) {
    mostrarError("No se puede tener un tweet vacio");

    return;
  }

  tweetObj = {
    id: Date.now(),
    tweet // === tweet: tweet        Cuando el nombre de la propiedad es el mismo nombre de la variable que le asignas, se puede usar esta sintaxis mas simple
  }

  tweets = [...tweets, tweetObj];

  crearHTML();

  formulario.reset();
}

function mostrarError(error) {
  const alerta = document.createElement('P');
  alerta.textContent = error;
  alerta.classList.add("error");

  const contenido = document.querySelector('#contenido');
  contenido.appendChild(alerta);

  setTimeout(() => {
    alerta.remove();
  }, 3000);
}

function crearHTML() {
  limpiarHTML();

  if (tweets.length > 0) {
    tweets.forEach(tweet => {
      const btnEliminar = document.createElement('a');
      btnEliminar.classList.add('borrar-tweet');
      btnEliminar.innerText = 'X';

      // Darle propiedad onclick al boton en html
      btnEliminar.onclick = () => {
        borrarTweet(tweet.id);
      };

      const li = document.createElement('li');
      li.innerText = tweet.tweet; // El elemento tweet dentro del objeto tweet contiene el texto
      li.appendChild(btnEliminar);

      listaTweets.appendChild(li);
    })
  }

  sincronizarStorage();
}

function sincronizarStorage() {
  localStorage.setItem('Tweet', JSON.stringify(tweets));
}

function borrarTweet(id) {
  tweets = tweets.filter(tweet => tweet.id !== id);

  crearHTML();
}

function limpiarHTML() {
  while (listaTweets.firstChild) {
    listaTweets.removeChild(listaTweets.firstChild);
  }
}