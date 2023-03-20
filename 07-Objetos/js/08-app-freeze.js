//Hacer que el programa se vuelva mas estricto y no permita errores que se puedan cometer como declarar una variable sin el const, var o let
//Tambien nos permite usar metodos de objetos
"use strict"

const producto = {
  nombre: "Monitor 24 pulgadas",
  precio: 349,
  disponible: true,
}

//freeze y isFrozen para congelar y ver si esta congelado

//Congela el objeto para que ya no puedas modificar, agregar o eliminar propiedades
Object.freeze(producto);

//Para saber si un onjeto esta congelado o no
console.log(Object.isFrozen(producto)); //True