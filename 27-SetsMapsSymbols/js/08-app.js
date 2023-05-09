const ciudades = ["Londres", "New York", "Madrid", "Paris"];
const ordenes = new Set([123, 231, 131, 102]);
const datos = new Map();

datos.set("nombre", "juan");
datos.set("profesion", "desarrollador web");

// Iterador por default de los elementos

// El iterador por defecto de un array es Values iterador
for (let ciudad of ciudades) {
  console.log(ciudad); // Te imprime los valores
}

// El iterador por defecto de un set es Values iterador
for (let orden of ordenes) {
  console.log(orden); // Te imprime los valores
}

// El iterador por defecto de un map es Entries iterador
for (let dato of datos) {
  console.log(dato); // Te imprime las llaves y valores
}

console.log("\n===================================\n");

// Keys iterador
// Te imprime las llaves
for (let ciudad of ciudades.keys()) {
  console.log(ciudad);
}

for (let orden of ordenes.keys()) {
  console.log(orden); // Un set no tiene llave, por lo que la llave es igual al valor
}

for (let dato of datos.keys()) {
  console.log(dato);
}

console.log("\n===================================\n");

// Values iterador
// Te imprime los valores
for (valor of ciudades.values()) {
  console.log(valor);
}

for (valor of ordenes.values()) {
  console.log(valor);
}

for (valor of datos.values()) {
  console.log(valor);
}

console.log("\n===================================\n");

// Entries iterador
// Guarda llave y valor en entradas 'entries'. Si no tiene llave, se le asigna una llave que es igual que el valor
for (let entry of ciudades.entries()) {
  console.log(entry);
}

for (let entry of ordenes.entries()) {
  console.log(entry); // Un set no tiene llave, por lo que la llave es igual al valor
}

for (let entry of datos.entries()) {
  console.log(entry);
}
