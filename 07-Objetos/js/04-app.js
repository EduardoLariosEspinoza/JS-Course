const producto = {
  nombre: "Monitor 24 pulgadas",
  precio: 349,
  disponible: true,
}

//Extraer el valor de una propiedad o variable dentro de un objeto y guardarlo en una variable fuera del objeto
//Destructuring
const { nombre, precio, disponible } = producto;
console.log("El nombre del producto es: ", nombre);
console.log("El precio del producto es: ", precio);
console.log("El nombre del producto es: ", disponible);