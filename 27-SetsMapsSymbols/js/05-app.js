// Los simbolos sirven para que al iterar sobre unos valores, no se itere sobre los que sean simbolos

const sym = Symbol("1");
const sym2 = Symbol("1");

// Nunca va a haber dos simbolos iguales
if (sym === sym2) {
  console.log("Son iguales");
} else {
  console.log("Son diferentes"); // Esta se imprime
}

const nombre = Symbol();
const apellido = Symbol();

const persona = {};

// Agregar nombre y apellido como llaves del objeto
persona[nombre] = "Juan"; // En lugar de agregarse con sintaxis de punto, se agrega con corchetes
persona[apellido] = "De la torre";
persona.tipoCliente = "Premium";
persona.saldo = 500;

console.log(persona); // {tipoCliente: "Premium", saldo: 500, Symbol(): "Juan", Symbol(): "De la torre"}

// Para acceder a los valores se utilizan corchetes y no sintaxis de punto
console.log(persona[nombre]); // Juan
console.log(persona.tipoCliente); // Premium

// Las propiedades que utilizan un symbol no son iterables
for (let i in persona) {
  console.log(i); // No va a imprimir nombre ni apellido, solo tipoCliente y saldo
}

const nombreCliente = Symbol("Nombre del cliente");

const cliente = {};

cliente[nombreCliente] = "Pedro";

console.log(cliente); // {Symbol(Nombre del cliente): "Pedro"}
