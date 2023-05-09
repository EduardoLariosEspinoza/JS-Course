const producto = {
  idProducto: 10,
};

const weakmap = new WeakMap();

weakmap.set(producto, "Monitor");

console.log(weakmap);

console.log(weakmap.has(producto));
console.log(weakmap.get(producto)); // No te da la información completa del objeto, solo te da el valor con el que esta guardado en el weakmap

weakmap.delete(producto);

console.log(weakmap.has(producto));

// No se puede iterar en un weakmap
// Un weakmap solo acepta objetos como llaves
