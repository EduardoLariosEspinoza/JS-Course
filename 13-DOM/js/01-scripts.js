let elemento;

elemento = document;
elemento = document.head;
elemento = document.body;
elemento = document.domain; // Ver direccion URL de la pagino, ya no es recomendado
elemento = document.forms;
elemento = document.forms[0];
elemento = document.forms[0].id;
elemento = document.forms[0].method;
elemento = document.forms[0].classList;
elemento = document.forms[0].action;

elemento = document.links; // Coleccion con todos los links en la pagina, todas las etiquetas a
elemento = document.links[4];
elemento = document.links[4].classList; // Se retorna como un indice de la informacion de los atributos de clase
elemento = document.links[4].className; // Regresa un string con el nombre de la clase del elemento

elemento = document.images; // Collecion con todas las imagenes de la pagina

elemento = document.scripts; // Coleccion de los scripts de la pagina

// Regresan elementos parecidos a un arreglo, pero son HTMLCollections

console.log(elemento);