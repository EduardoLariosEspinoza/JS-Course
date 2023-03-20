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

const total = {
  producto: 'Total',
  precio: LG_X93.precio + Mi9t.precio + RTX_2060_SC_Gaming.precio,
}

carrito.push(total);

console.table(carrito);