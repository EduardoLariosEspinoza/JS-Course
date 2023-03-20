const pendientes = ['Comprar', 'Estudiar', 'Proyecto'];

const carrito = [
  { nombre: "Tablet", precio: 223 },
  { nombre: "Celular", precio: 432 },
  { nombre: "Television", precio: 123 },
  { nombre: "Reloj", precio: 435, descuento: true },
  { nombre: "Audifonos", precio: 234 },
  { nombre: "Mouse", precio: 123 },
  { nombre: "Teclado", precio: 32 },
];

for (const pendiente of pendientes) {
  console.log(pendiente);
}

for (const objeto of carrito) {
  console.log(objeto.precio);
}

// forOf itera sobre arrays