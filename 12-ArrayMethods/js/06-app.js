const carrito = [
  { nombre: 'Monitor 27 Pulgadas', precio: 500 },
  { nombre: 'Televisión', precio: 100 },
  { nombre: 'Tablet', precio: 200 },
  { nombre: 'Audifonos', precio: 300 },
  { nombre: 'Teclado', precio: 400 },
  { nombre: 'Celular', precio: 700 },
]

// Si todos los objetos dentro del array cumplen la condicion se retorna un true
const resultado = carrito.every(objeto => objeto.precio >= 300);
console.log(resultado); // false

// Con que uno de los objetos dentro del array cumpla la condicion, se retorna un true
const resultado2 = carrito.some(objeto => objeto.precio >= 300);
console.log(resultado2); // true