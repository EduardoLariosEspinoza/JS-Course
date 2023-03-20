// Ejercicio 1. Seleccionar hijos de un nodo
const navegacion = document.querySelector('nav');
console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);

/* console.log(navegacion.childNodes); // Los espacios en blanco entre las etiquetas tambien se agregan a esta NodeList
console.log(navegacion.children); // Solo se agregan los elementos html, las etiquetas, a la coleccion

console.log(navegacion.children[1]);

console.log(navegacion.children[1].nodeType); // Tipos de nodos: https://developer.mozilla.org/es/docs/Web/API/Node/nodeType
console.log(navegacion.children[1].nodeName); // 'A' Porque es un enlace */


// Ejercicio 2. Modificar los hijos de un nodo
let card = document.querySelector('.card:nth-child(3)');

/* console.log(card.children[1].children);

card.children[0].src = 'img/hacer4.jpg';
card.children[1].children[1].textContent = 'Si'; */


// Ejercicio 3. Ver elemento padre
/* 
console.log(card.parentNode);
console.log(card.parentElement); // Es mejor porque solo toma en cuenta los elementos que son validos en el HTML
console.log(card.parentElement.parentElement.parentElement); // main */


// Ejercicio 4. Ver elemento hermano
/* card = document.querySelector('.card');
console.log(card.nextElementSibling); // Siguiente elemento del mismo padre
console.log(card.nextElementSibling.nextElementSibling);

console.log('\n');

const ultimoCard = document.querySelector('.card:last-child');
console.log(ultimoCard);
console.log(ultimoCard.previousElementSibling); */