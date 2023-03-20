// Query selector funciona con sintaxis de CSS para regresar una coleccion con un elemento que encuentre
// Solo regresa una coleccion de maximo un elemento

// Busca y te regresa el primer elemento que encuentre con la clase card
const card = document.querySelector('.card');
console.log(card);

// Busca y te regresa el primer elemento que encuentre con la clase info dentro de un elemento con la clase premium
const info = document.querySelector('.premium .info');
console.log(info);

// Busca y te regresa el segundo elemento que encuentre con la clase card dentro de un section que tenga la clase hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);

// Busca y te regresa el elemento con el id formulario
const formulario = document.querySelector('#formulario');
console.log(formulario);

// Busca y te regresa el primer elemento nav de HTML
const navegacion = document.querySelector('nav');
console.log(navegacion);