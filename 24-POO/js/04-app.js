class Cliente {

  // Declarar variable privada. Solo se puede usar dentro la misma clase
  #nombre;

  constructor(nombre, saldo) {
    this.#nombre = nombre;
    this.saldo = saldo;
  }

  // Se manda a llamar con la instancia, cliente.mostrarInformacion()
  mostrarInformacion() {
    return `Hola ${this.#nombre} saldo de ${this.saldo}`;
  }

  // No pertenece a la instancia, pertenece al objeto. Se manda a llamar con la clase, Cliente.bienvenida()
  static bienvenida() {
    return `Estatica`;
  }
}

const cliente = new Cliente("juan", 300);
// console.log(cliente.#nombre); // Error

// Aqui si puede acceder al nombre porque accede desde la funcion dentro de la clase
console.log(cliente.mostrarInformacion());


class Empresa {

  // Declarar variable privada. Solo se puede usar dentro la misma clase
  #nombre;

  setNombre(nombre) {
    this.#nombre = nombre;
  }

  getNombre() {
    return this.#nombre;
  }
}

const empresa = new Empresa("juan", 300);

empresa.setNombre('RedBull');
console.log(empresa.getNombre());