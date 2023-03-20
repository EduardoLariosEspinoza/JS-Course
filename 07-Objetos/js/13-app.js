"use strict"

const producto = {
  nombre: "Monitor 24 pulgadas",
  precio: 349,
  disponible: false,
}

//Devuelve las llaves (variables) del objeto y cuantas tiene. Sirve mucho para saber si un objeto esta vacio o no
console.log(Object.keys(producto));

//Devuelve los valores del objeto
console.log(Object.values(producto));

//Devuelve llaves y valores en pares, las llaves con su valor
console.log(Object.entries(producto));