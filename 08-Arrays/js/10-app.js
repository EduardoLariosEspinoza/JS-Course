const carrito = [
  { nombre: "Tablet", precio: 223 },
  { nombre: "Celular", precio: 432 },
  { nombre: "Television", precio: 123 },
  { nombre: "Reloj", precio: 435 },
  { nombre: "Audifonos", precio: 234 },
  { nombre: "Mouse", precio: 123 },
  { nombre: "Teclado", precio: 32 },
];

// Por cada objeto (producto) dentro del array, imprime su nombre y precio
const arrayForEach = carrito.forEach(function(producto) {
  return `El producto: ${producto.nombre} cuesta ${producto.precio}`;
})

console.log("\n")

// Funciona igual a forEach pero map crea un nuevo array
const arrayMap = carrito.map(function(producto) {
  return `El producto: ${producto.nombre} cuesta ${producto.precio}`;
})

console.table(arrayForEach); // Undefined
console.table(arrayMap); // En un array te regresara todos los strings que creo al pasar por el array: "El producto: Tablet cuesta 223", "El producto: Celular cuesta 423", ...

console.log("\n")

for (let i = 0; i < arrayMap.length; i++) {
  console.log(arrayMap[i]);
}