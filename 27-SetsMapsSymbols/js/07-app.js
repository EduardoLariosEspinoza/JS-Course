function* crearGenerador() {
  yield 1;
  yield "Nombre";
  yield 3 + 3;
  yield true;
}

const iterador = crearGenerador();

// Al usar el .next() se despierta el generador y se vuelve a dormir hasta que volvamos a llamar a .next()

console.log(iterador); // <suspended> = dormido
console.log(iterador.next().value); // 1
console.log(iterador.next().value); // "Nombre". Cada vez que se llama .next() se ejecuta el yield siguiente
console.log(iterador.next().value); // 6
console.log(iterador.next().done); // false. Cuando se acaban los yield devuelve true (cuando ya se acabo la iteracion)
console.log(iterador.next().value); // undefined
console.log(iterador.next().done); // true
console.log(iterador); // <closed> = ya se acabaron los elementos para iterar

console.log("========================================");

// Generador para carrito de compras
function* generadorCarrito(carrito) {
  for (let i = 0; i < carrito.length; i++) {
    yield carrito[i];
  }
}

const carrito = ["Producto 1", "Producto 2", "Producto 3", "Producto 4"];

const iteradorCarrito = generadorCarrito(carrito);

console.log(iteradorCarrito.next()); // {value: "Producto 1", done: false}
console.log(iteradorCarrito.next()); // {value: "Producto 2", done: false}
console.log(iteradorCarrito.next());
console.log(iteradorCarrito.next());
console.log(iteradorCarrito.next()); // {value: undefined, done: true}
