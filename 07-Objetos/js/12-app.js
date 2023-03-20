//Object literal. Mas usado
const producto = {
  nombre: "Monitor 24 pulgadas",
  precio: 349,
  disponible: false,
}

//Para crear objetos de una forma mas dinamica
function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
}

const producto2 = new Producto('Monitor 24"', 300);
const producto3 = new Producto('Tablet', 250);

console.log(producto2);
console.log(producto3);