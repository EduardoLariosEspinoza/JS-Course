const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

// Cambiar el titulo de la pagina
let nuevoTitulo = 'Nuevo Titulo'
document.querySelector('.contenido-hero h1').textContent = nuevoTitulo;

// Cambiar la pagina en el HTML
const imagen1 = document.querySelector('.card img');
imagen1.src = 'img/hacer2.jpg'