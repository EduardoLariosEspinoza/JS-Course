const carrito = [
  { nombre: 'Monitor 27 Pulgadas', precio: 500 },
  { nombre: 'Televisión', precio: 100 },
  { nombre: 'Tablet', precio: 200 },
  { nombre: 'Audifonos', precio: 300 },
  { nombre: 'Teclado', precio: 400 },
  { nombre: 'Celular', precio: 700 },
]

let resultado = carrito.filter(objeto => objeto.precio > 200); // Crea un array de objetos que sea el de carrito pero solo con los objetos que tengan un precio mayor a 200
resultado = carrito.filter(objeto => objeto.nombre !== 'Tablet'); // Crea un array de objetos que sea el de carrito pero solo con los objetos que no se llamen 'Tablet'

console.log(resultado);