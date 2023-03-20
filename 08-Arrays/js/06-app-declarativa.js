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

//En la forma declarativa no se modifica el array original de carrito, sino que se crea otro que es al que modificamos
let resultado = [...carrito, LG_X93];
resultado = [...resultado, Mi9t];
resultado = [RTX_2060_SC_Gaming, ...resultado];

console.table(resultado);