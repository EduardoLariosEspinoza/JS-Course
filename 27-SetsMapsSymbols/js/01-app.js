// Los sets no aceptan valores duplicados
// Los sets son estructuras desordenadas

const carrito = new Set();

carrito.add("Camisa");
carrito.add("Disco #1");
carrito.add("Disco #2");
carrito.add("Disco #3");
carrito.add("Disco #4");
carrito.add("camisa"); // Las minusculas y mayusculas si importan

console.log(carrito.delete("Disco #4")); // Ademas de eliminar el elemento, devuelve true o false
console.log(carrito);
console.log("El tamaño del set es de: ", carrito.size); // Para saber cuantos elementos tiene el set
console.log("El carrito tiene Camisa? ", carrito.has("Camisa")); // Para saber si existe un elemento en el set. true o false

//carrito.clear(); // Para limpiar el set

//console.log(carrito);

carrito.forEach((producto, index, setCompleto) => {
  console.log(producto);
  //console.log(index); // Index imprime el mismo valor que producto porque no hay indices en los sets
  console.log(setCompleto);
});

// Eliminar elementos duplicados de un arreglo
const arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5];

const noDuplicado = new Set(arreglo);

console.log(noDuplicado); // Devuelve un set con los elementos del arreglo sin duplicados
