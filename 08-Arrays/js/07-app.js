const carrito = [];

const LG_X93 = {
  producto: 'Television',
  precio: 532,
}

const Mi9t = {
  producto: 'Celular',
  precio: 319,
}

const RTX_2060_SC_Gaming = {
  producto: 'Tarjeta grafica',
  precio: 259,
}

carrito.push(LG_X93, Mi9t);

//Agrega uno o varios elementos al inicio del arreglo aunque se declaren despues
carrito.unshift(RTX_2060_SC_Gaming);

console.table(carrito);

/* //Eliminar ultimo valor del arreglo
carrito.pop();

//Eliminar primer valor del arreglo
carrito.shift(); */

//En la posicion 0, elimina 2 elemento2 (Elimina el objeto en la posicion 0 y en la 1)
carrito.splice(0, 2);

console.table(carrito);