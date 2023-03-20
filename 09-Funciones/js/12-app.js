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
carrito.forEach(producto => console.log(`El producto: ${producto.nombre} cuesta ${producto.precio}`));

// Funciona igual a forEach pero map crea un nuevo array
const arrayMap = carrito.map(producto => `El producto: ${producto.nombre} cuesta ${producto.precio}`);

console.log(arrayMap); //Guarda el array creado por .map como strings de cada frase creada