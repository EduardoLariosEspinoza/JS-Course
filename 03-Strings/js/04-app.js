//Se guardan los espacios en la cadena
const producto = "      Monitor de 20 pulgadas        ";
console.log(producto);

//Eliminar espacios del principio y del final respectivamante
console.log(producto.trimStart());
console.log(producto.trimEnd());

//Eliminar ambos. Ambos metodos lo hacen
console.log(producto.trimStart().trimEnd());
console.log(producto.trim());