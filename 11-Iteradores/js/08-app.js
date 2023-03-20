const auto = {
  marca: 'Camaro',
  año: '1992',
  kilometraje: 10000
};

// forIn itera sobre objetos y guarda la llave de los valores, no los valores en si

for (let llave in auto) {
  console.log(llave); // marca, año, kilometraje
}

for (let llave in auto) {
  console.log(`${auto[llave]}`); // camaro, 1992, 10000
}

console.log('\n');

// Nueva forma de iterar sobre objetos y tambien te guarda los valores del objeto, no solo sus llaves

for (let [llave, propiedad] of Object.entries(auto)) {
  console.log(propiedad); // marca, año, kilometraje
  console.log(llave); // camaro, 1992, 10000
}