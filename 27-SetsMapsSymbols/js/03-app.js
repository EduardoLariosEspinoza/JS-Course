// Si vas a estar agregando y eliminando elementos constantemente, es mejor usar un map que un objeto

const cliente = new Map();

cliente.set("nombre", "Karen");
cliente.set("tipo", "Premium");
cliente.set("saldo", 3000);

// Una diferencia importante con un objeto es que en un map las llaves pueden ser de cualquier tipo de dato
cliente.set([0], true);

console.log(cliente);

console.log("El tamaño del map es de: ", cliente.size);

console.log(cliente.has("nombre")); // Busca por llave, no por valor

console.log(cliente.get("nombre")); // Obtener un valor dada una llave

cliente.delete("saldo"); // Eliminar un elemento del map

console.log(cliente.has("saldo")); // false

console.log(cliente.get("saldo")); // undefined

cliente.clear(); // Eliminar todos los elementos del map
console.log(cliente);

// Inicializar un map con valores
const paciente = new Map([
  ["nombre", "paciente"],
  ["cuarto", "no definido"],
]);

paciente.set("dr", "Dr. Asignado");
paciente.set("nombre", "Antonio"); // Sobreescribe

console.log(paciente);

// Si pasas un solo constructor, el map lo toma como valor
paciente.forEach((datos, index) => {
  console.log(`${index}: ${datos}`);
});
