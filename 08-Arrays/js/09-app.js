const carrito = [
  { nombre: "Tablet", precio: 223 },
  { nombre: "Celular", precio: 432 },
  { nombre: "Television", precio: 123 },
  { nombre: "Reloj", precio: 435 },
  { nombre: "Audifonos", precio: 234 },
  { nombre: "Mouse", precio: 123 },
  { nombre: "Teclado", precio: 32 },
];

// Imprime cada uno de los nombres y precios de los objetos dentro del array hasta que lo hagas con todos
for (let i = 0; i < carrito.length; i++) {
  console.log(`El producto: ${carrito[i].nombre} cuesta ${carrito[i].precio}`);
}

console.log('\n')

// Por cada objeto (producto) dentro del array, imprime su nombre y precio
carrito.forEach(function(producto) {
  console.log(`El producto: ${producto.nombre} cuesta ${producto.precio}`);
})

// Funcionan practicamente igual pero el forEach ahorra un poco de linea