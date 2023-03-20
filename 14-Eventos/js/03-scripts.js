const busqueda = document.querySelector('.busqueda');

// Cuando el evento seleccionado ocurra, se lleva acabo la funcion de la derecha
busqueda.addEventListener('keydown', () => {
  console.log('Presionar tecla');
});

busqueda.addEventListener('keyup', () => {
  console.log('Dejar de presionar tecla');
});

busqueda.addEventListener('blur', () => {
  console.log('Saliste de la caja de texto'); // Se deselecciona el objeto
});

busqueda.addEventListener('copy', () => {
  console.log('Se copio el texto');
});

busqueda.addEventListener('paste', () => {
  console.log('Se pego el texto');
});

busqueda.addEventListener('cut', () => {
  console.log('Se corto el texto');
});

busqueda.addEventListener('input', () => {
  console.log('Se realizo una accion presionando una tecla'); // Escribir, borrar (si habia un caracter que borrar), copiar, pegar, etc
});

// Obtener informacion acerca de que tipo de input se da
busqueda.addEventListener('input', (event) => {
  console.log(event);
});

// Obtener que tipo de input se da
busqueda.addEventListener('input', (event) => {
  console.log(event.type);
});

// Saber sobre que input estamos escribiendo
busqueda.addEventListener('input', (event) => {
  console.log(event.target);
});

// Saber que valor le estamos enviando
busqueda.addEventListener('input', (event) => {
  console.log(event.target.value);
});