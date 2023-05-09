// Asi funciona un iterador por dentro

function crearIterador(objeto) {
  let i = 0;

  return {
    siguiente: () => {
      const fin = i >= objeto.length;
      const valor = !fin ? objeto[i++] : undefined;

      return {
        fin,
        valor,
      };
    },
  };
}

const carrito = ["Producto 1", "Producto 2", "Producto 3"];

const recorrerCarrito = crearIterador(carrito);

console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
