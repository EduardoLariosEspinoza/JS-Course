//Hacer que el programa se vuelva mas estricto y no permita errores que se puedan cometer como declarar una variable sin el const, var o let
//Tambien nos permite usar metodos de objetos
"use strict"

const producto = {
  nombre: "Monitor 24 pulgadas",
  precio: 349,
  disponible: false,
}

//seal y isSealed para sellar y ver si esta sellado

//Sella el objeto, no nos deja agregar ni eliminar propiedades pero si nos deja modificar las existentes
Object.seal(producto);

producto.disponible = true;

console.log(producto);

//Para saber si un objeto esta sellado o no
console.log(Object.isSealed(producto)); //True