const carrito = [
  { nombre: 'Monitor 27 Pulgadas', precio: 500 },
  { nombre: 'Televisión', precio: 100 },
  { nombre: 'Tablet', precio: 200 },
  { nombre: 'Audifonos', precio: 300 },
  { nombre: 'Teclado', precio: 400 },
  { nombre: 'Celular', precio: 700 },
]

// Con forEach
let total = 0;
carrito.forEach(objeto => {
  total += objeto.precio;
});
console.log(total);

// Le decimos al programa que sume todos los valores de precio en el acumulador
let resultado = carrito.reduce((acumulador, productoActual) => acumulador + productoActual.precio, 0) // Le decimos que se inicialice en 0, solo cuando trabajamos con arrays de objetos
console.log(resultado);