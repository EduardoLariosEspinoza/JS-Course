// Imprime numeros hasta que lee un numero impar y termina el for
for (let i = 10; i < 10000000; i++) {

  if (i % 2 !== 0) {
    console.log('Impar');
    break;
  }

  console.log(i);
}

const carrito = [
  { nombre: "Tablet", precio: 223 },
  { nombre: "Celular", precio: 432 },
  { nombre: "Television", precio: 123 },
  { nombre: "Reloj", precio: 435, descuento: true },
  { nombre: "Audifonos", precio: 234 },
  { nombre: "Mouse", precio: 123 },
  { nombre: "Teclado", precio: 32 },
];

// Si hay un objeto en oferta se mostrara un mensaje que lo diga a un lado del nombre, para que no se vuelva a imprimir el nombre del producto se usa continue
for (let i = 0; i < carrito.length; i++) {

  if (carrito[i].descuento) {
    console.log(carrito[i].nombre, ' Oferta');
    continue;
  }
  console.log(carrito[i].nombre);
}