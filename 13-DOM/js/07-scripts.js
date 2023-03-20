const encabezado = document.querySelector('h1');

// Cambiar los estilos de CSS con JS
encabezado.style.background = 'blue'
encabezado.style.fontFamily = 'Arial'
encabezado.style.textTransform = 'uppercase'


// Agregar y eliminar clases en los elementos
const card = document.querySelector('.card');
card.classList.add('nueva-clase', 'segunda-clase');
card.classList.remove('segunda-clase');
console.log(card.classList);