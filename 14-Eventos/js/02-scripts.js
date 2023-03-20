const nav = document.querySelector('.navegacion');
const formulario = document.querySelector('#formulario');
const h1 = document.querySelector('h1');
const logo = document.querySelector('.logo');

nav.addEventListener('click', () => {
  // Funcion anonima

  console.log('click en nav');
});

nav.addEventListener('dblclick', () => {
  console.log('doble click en nav');
});

formulario.addEventListener('mouseenter', () => {
  console.log('entra el mouse por formulario');
  formulario.style.backgroundColor = 'blue'
});

formulario.addEventListener('mouseout', () => {
  console.log('sale el mouse del formulario');
  formulario.style.backgroundColor = 'red'
});

// Es igual a click pero este se activa con presionar cualquier boton del mouse, no solo click izquierdo
h1.addEventListener('mousedown', () => {
  h1.style.color = 'red'
});

// Sucede cuando el click deja de realizarse y se suelta el boton del mouse
logo.addEventListener('mouseup', () => {
  logo.style.backgroundColor = 'red'
});