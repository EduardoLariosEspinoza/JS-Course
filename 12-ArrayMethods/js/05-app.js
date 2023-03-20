const carrito = [
  { nombre: 'Monitor 27 Pulgadas', precio: 500 },
  { nombre: 'Televisión', precio: 100 },
  { nombre: 'Tablet', precio: 200 },
  { nombre: 'Audifonos', precio: 300 },
  { nombre: 'Teclado', precio: 400 },
  { nombre: 'Celular', precio: 700 },
]

const resultado = carrito.find(objeto => objeto.precio === 100); // Te devuelve el primer valor del array que cumpla con la condicion, solo el primero

console.log(resultado); // { nombre: 'Televisión', precio: 100 }