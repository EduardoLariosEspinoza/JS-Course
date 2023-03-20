// Las clases y los prototipos son casi equivalentes

// Sintaxis mas usada para declarar clases
class Cliente {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }

  // Se manda a llamar con la instancia, cliente.mostrarInformacion()
  mostrarInformacion() {
    return `Hola ${this.nombre} saldo de ${this.saldo}`;
  }

  // No pertenece a la instancia, pertenece al objeto. Se manda a llamar con la clase, Cliente.bienvenida()
  static bienvenida() {
    return `Estatica`;
  }

}

const cliente = new Cliente('juan', 300);
console.log(cliente.mostrarInformacion());
console.log(Cliente.bienvenida());


// Sintaxis no muy usada para declarar clases
const Cliente2 = class {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }

  mostrarInformacion() {
    return `Hola ${this.nombre} saldo de ${this.saldo}`;
  }

  // No pertenece a la instancia, pertenece al objeto. Se manda a llamar con la clase, Cliente.bienvenida()
  static bienvenida() {
    return `Estatica`;
  }
}

const cliente2 = new Cliente('juan', 300);
console.log(cliente2.mostrarInformacion());
console.log(Cliente2.bienvenida());