const pendientes = ['Comprar', 'Estudiar', 'Proyecto'];

pendientes.forEach((pendiente, index) => { // Si colocas un argumento ahi se guardara el valor de lo que haya dentro de cada posicion del array, si le colocas dos argumentos el segundo guardara en indice que tiene el contenido dentro del array (posicion)
  console.log(`${index}: ${pendiente}`);
})

const carrito = [
  { nombre: "Tablet", precio: 223 },
  { nombre: "Celular", precio: 432 },
  { nombre: "Television", precio: 123 },
  { nombre: "Reloj", precio: 435, descuento: true },
  { nombre: "Audifonos", precio: 234 },
  { nombre: "Mouse", precio: 123 },
  { nombre: "Teclado", precio: 32 },
];

const newArray = carrito.forEach((articulo) => {
  return articulo.nombre;
})

const newArray2 = carrito.map((articulo) => {
  return articulo.nombre;
})

// map te crea un array con los valores que le pases, forEach no

console.log(newArray); // undefined
console.log(newArray2); // Array con los datos que guardo