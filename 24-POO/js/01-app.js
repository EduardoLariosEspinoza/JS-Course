// Las clases y los prototipos son casi equivalentes

// Sintaxis mas usada para declarar clases
class Cliente {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }
}

const cliente = new Cliente('juan', 300);
console.log(cliente);


// Sintaxis no muy usada para declarar clases
const Cliente2 = class {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }
}

const cliente2 = new Cliente('juan', 300);
console.log(cliente2);