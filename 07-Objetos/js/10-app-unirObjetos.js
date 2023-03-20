"use strict"

const producto = {
  nombre: "Monitor 24 pulgadas",
  precio: 349,
  disponible: false,
}

const medidas = {
  peso: "1kg",
  medida: '1m',
}

const resultado = Object.assign(producto, medidas);

//Spread operator o Rest operator. Es el metodo mas utilizado para unir objetos
// ...producto = copia el objeto producto
const resultado2 = {...producto, ...medidas }; // = Copia el objeto producto y unelo con una copia del objeto medidas 

console.log(resultado);
console.log(resultado2);