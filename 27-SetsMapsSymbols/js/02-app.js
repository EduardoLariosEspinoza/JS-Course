// En el set puedes guardar todo tipo de datos, pero en un weakset solo puedes guardar objetos

const weakset = new WeakSet();

const cliente = {
  nombre: "Juan",
  saldo: 100,
};

const sdcliente = {
  nombre: "Pedro",
  saldo: 100,
};

weakset.add(cliente);

console.log(weakset);

console.log(weakset.has(cliente));
console.log(weakset.has(sdcliente));

weakset.delete(cliente);

console.log(weakset);

// No se puede iterar en un weakset

// No tiene size

// No se puede usar el método forEach
